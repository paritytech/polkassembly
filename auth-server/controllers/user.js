const passport = require('../config/passport');
const { User } = require('../db/schema');
const { errorHandler } = require('../db/errors');
const jwt = require('jsonwebtoken');
const { GraphQLClient } = require('graphql-request');

const getSignedToken= function ({id, username}) {
  const tokenContent = {
    sub: '' + id,
    name: username,
    iat: Date.now() / 1000,
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": ["user"],
      "x-hasura-user-id": '' + id,
      "x-hasura-default-role": "user",
      "x-hasura-role": "user"
    }
  }
  return jwt.sign(tokenContent, process.env.ENCRYPTION_KEY)
}
/**
 * POST /login
 * Sign in using username and password.
 */
exports.postLogin = async (req, res, next) => {
  req.assert('username', 'Username is not valid').notEmpty();
  req.assert('password', 'Password cannot be blank').notEmpty();

  const errors = req.validationErrors();

  if (errors) {
    return res.status(400).json({'errors': errors});
  }

  passport.authenticate('local', (err, user) => {
    if (err) { return handleResponse(res, 400, {'error': err})}
    if (user) {

      const token = getSignedToken(user)
      
      handleResponse(res, 200, {
        token
      });
    }
  })(req, res, next);
};


/**
 * POST /signup
 * Create a new local account.
 */
exports.postSignup = async (req, res, next) => {
  req.assert('email', 'Your email can\'t be empty.').notEmpty();
  req.assert('password', 'Your password must be at least 6 characters long.').len(6);
  req.assert('username', 'Your username can\'t be empty.').notEmpty();

  const errors = req.validationErrors();

  if (errors) {
    return res.status(400).json({'errors': errors});
  }

  try {
    await User.query()
    .allowInsert('[email, password, username]')
    .insert({
      email: req.body.email,
      password: req.body.password,
      username: req.body.username
    });
  } catch (err) {
    errorHandler(err, res);
    return;
  }
  passport.authenticate('local', async (err, user, info) => {
    if (err) {  return handleResponse(res, 400, {'error': err})}
    if (user) {
      const token = getSignedToken(user)
      const userInfo = user.getUser()

      // create the user in hasura DB
      const affectedRows = await addNewUser({user: userInfo, token })

      if (affectedRows === 1){
        handleResponse(res, 200, {
          user: userInfo,
          token 
        });
      } else {
        handleResponse(res, 400, {'error': 'Couldn\'t create new user'})
      }    
    }
  })(req, res, next);
};



const addNewUser = ({token, user}) => {
 
  try {
    const client = new GraphQLClient(process.env.REACT_APP_SERVER_URL, {
      headers: {
        "x-hasura-role": "user",
        "Authorization": "Bearer " + token
      },
    })
    
    const mutation = `
    mutation addNewUser($email: String, $id: Int!, $username: String! ) {
      __typename
      insert_users(objects: {email: $email, id: $id, username: $username}) {
        affected_rows
      }
    }`
    
    const {email, id, username} = user
    return client.request(mutation, {email, id, username})
    .then(data => {return data.insert_users.affected_rows})
    .catch(err => {
      console.log('GraphQL response errors',err.response.errors)
      console.log('Response data if available',err.response.data)
      return 0
    })

  } catch (e){
    console.log('Couldn\'t create new user',e)
    throw new Error(e)
  }
}

function handleResponse(res, code, statusMsg) {
  res.status(code).json(statusMsg);
}
