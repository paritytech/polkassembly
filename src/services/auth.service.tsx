import * as React from 'react'
import { useContext } from 'react'
// import { useMeQuery } from '../generated/graphql'
import {Query} from 'react-apollo'
import { MeDocument, MeQuery, MeQueryVariables, useMeQuery, useMeLazyQuery } from '../generated/graphql'
import { LoginObjectType, SignupObjectType } from '../types'
// import { Redirect } from 'react-router-dom'
//import store from '../apollo-client'
//import * as queries from '../graphql/queries'
//import { Me } from '../graphql/types'
//import { useSubscriptions } from './cache.service'

// interface UserDetailsContextType {
//   id: number | null,
//   name: string,
//   picture: string |null,
// }

const UserDetailsContext = React.createContext({
  id: null,
  name: '',
  picture: null
})

export const useMe = () => {
  let res;
  const currentUser = useContext(UserDetailsContext)
  const [getMe, { data, error, loading }] = useMeLazyQuery()

  console.log('currentUser',currentUser)
  // if the user info aren't in memory
  if (!currentUser.id){
    const token = getAuthHeader()
    if (!token) {
      // the user has never been authenticated we return an empty user object.
      res = {};
    } else {
      // we found a token, let's get the associated user
      const id = parseJwt(token)['https://hasura.io/jwt/claims']['x-hasura-user-id'];
      // Get Hasura user info
      getMe({ variables : { id } })
      // const {data,loading,error} = Query<MeQuery, MeQueryVariables>(MeDocument, { id })
      console.log('user',data, 'error',error,'loading',loading)
      console.log('fetchUser',data && data.users && data.users[0])
      res = (data && data.users && data.users[0])
    }    
  }

  return res;
}

// const queryCurrent = (token : string ) => {
//   // we found a token, let's get the associated user
//   const id = parseJwt(token)['https://hasura.io/jwt/claims']['x-hasura-user-id'];
//   // Get Hasura user info
//   // const { data, error, loading } = useMeQuery({ variables : { id } })
//   const {data,loading,error} = useMeQuery({variables: { id }})
//   console.log('user',data, 'error',error,'loading',loading)
//   console.log('fetchUser',data && data.users && data.users[0])
//   return (data && data.users && data.users[0])
// }

// export const withAuth = (Component: React.ComponentType) => {
//   return props => {
//     const token = getAuthHeader()
//     if (!token) return <Redirect to="/sign-up" />
//     const id = parseJwt(token)['https://hasura.io/jwt/claims']['x-hasura-user-id'];
//     // Get Hasura user info
//     const fetchUser = useQuery<Me.Query, Me.Variables>(queries.me, { variables : { id } })
//     console.log('fetchUser',fetchUser.data && fetchUser.data.users && fetchUser.data.users[0])
//     // const myResult = fetchUser.data.users && fetchUser.data.users.length ? fetchUser.data.users[0] : {};
//     // const fetchUser = { id }
//     // console.log('currentUser',fetchUser)
//     // Should probably be re-enabled
//     // useSubscriptions(myResult)

//     return (
//        <UserDetailsContext.Provider value={fetchUser.data && fetchUser.data.users && fetchUser.data.users[0]}>
//         <Component {...props} />
//        </UserDetailsContext.Provider>
//     )
//   }
// }

export const storeAuthHeader = (auth: string) => {
  localStorage.setItem('Authorization', 'Bearer '+auth)
}

export const getAuthHeader = (): string | null => {
  return localStorage.getItem('Authorization') || null
}

const parseJwt = function (token : string) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};

export const signIn = ({ username, password } : LoginObjectType) => {

  return fetch(`${process.env.REACT_APP_AUTH_SERVER_URL}/login`, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if (res.status < 400) {
      return res.json().then((data) => {
        const token = data.token;
        storeAuthHeader(token);
      });
    } else {
      return Promise.reject(res.statusText)
    }
  })
}

export const signUp = (SignupData: SignupObjectType) => {
  return fetch(`${process.env.REACT_APP_AUTH_SERVER_URL}/signup`, {
    method: 'POST',
    body: JSON.stringify(SignupData),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then((response) => {
    console.log('response',response)
    if(response.ok) {
      return response
    } else {
      // FIXME we need to throw here and remove this ugly alert
      alert('Could not signup now. Try again later');
    }
  })
  .catch(error => {
    console.log(error.message || error)
    return error
  })
}

// export const signOut = () => {
//   localStorage.removeItem('Authorization')
//   // window.location.href = '/sign-in'

//   return store.clearStore()
// }

export default {
  useMe,
  // withAuth,
  storeAuthHeader,
  getAuthHeader,
  signIn,
  signUp
  // signOut,
}
