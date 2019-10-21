import * as React from 'react'
import { useContext } from 'react'
import { useQuery } from 'react-apollo-hooks'
import { LoginObjectType } from '../types'
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
  return useContext(UserDetailsContext)
}

// export const withAuth = (Component: React.ComponentType) => {
//   return props => {
//     const token = getAuthHeader()
//     if (!token) return <Redirect to="/sign-in" />
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

  return fetch(`${process.env.REACT_APP_AUTH_URL}/login`, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json'
    },
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

export const signUp = ({ username, password }: LoginObjectType) => {
  // let res;
  return fetch(`${process.env.REACT_APP_AUTH_URL}/signup`, {
    method: 'POST',
    // FIXME doesn't make sense
    body: JSON.stringify({ name, username, password, confirmPassword: password }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
  })
  // .then((response) => {
  //   res = response
  //   console.log('response',response)
  //   if(response.ok) {
  //     console.log('response',response)
  //   } else {
  //     alert('Could not signup now. Try again later');
  //   }
  // })
  // .catch(error => {
  //   res = error
  //   console.log(error.message || error)
  // })
  // return res
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
  signUp,
  // signOut,
}
