const graphql = require('graphql');
const { User } = require('../db/schema');
const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList } = graphql;

const userType =  new GraphQLObjectType({
  name: 'User',
  fields: {
    username: {
      type: GraphQLString
    }
  }
});

const queryType =  new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: userType,
      args: {
        username: { type: GraphQLString }
      },
      resolve: async (source, {username}) => {
        console.log(username)
        const user = await User
          .query()
          .where('username', username)
          .first();
        return user;
      }
    },
    users: {
      type: new GraphQLList(userType),
      resolve: async () => {
        const users = await User.query();
        return users;
      }
    }
  }
})

const schema = new GraphQLSchema({
  query: queryType
})

module.exports = schema