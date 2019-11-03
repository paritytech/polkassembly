// import * as React from 'react'
// import { useContext } from 'react'
// import {Query} from 'react-apollo'
// import { MeDocument, MeQuery, MeQueryVariables, useMeQuery, useMeLazyQuery } from '../generated/graphql'
import { LoginObjectType, SignupObjectType, SignupResponseObjectType, UserDetailsContextType } from '../types'
// import { UserDetailsContext } from '../context/UserDetailsContext'

export const storeAuthHeader = (auth: string) => {
  localStorage.setItem('Authorization', 'Bearer '+auth)
}

export const getAuthHeader = (): string | null => {
  return localStorage.getItem('Authorization') || null
}

export const login = ({ username, password } : LoginObjectType) => {

  return fetch(`${process.env.REACT_APP_AUTH_SERVER_URL}/login`, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(async (response) => {
    if (response.status < 400 && response.ok) {
      return response
      // .json().then((data) => {
      //   const token = data.token;
        // storeAuthHeader(token);
        // return data;
      // });
    } else {
      // console.log('res.statusText',res.statusText)
      const error = await response.json()
        .then((data) => {
          console.log('Authservice login error',data.error);
          return data.error;
        })

        throw new Error(error);
      //Promise.reject(
       
        //))
    }
  });
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
    if(response.status < 400 && response.ok) {
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

export  const loginUser = ({user, token}: SignupResponseObjectType, currentUser:UserDetailsContextType) => {
  storeAuthHeader(token);
  currentUser.setUserDetailsContextState((prevState) => {
      return {
          ...prevState,
          id: user.id,
          username: user.username
      }  
  })       
}

// export const signOut = () => {
//   localStorage.removeItem('Authorization')
//   // window.location.href = '/sign-in'

//   return store.clearStore()
// }

export default {
  // withAuth,
  storeAuthHeader,
  getAuthHeader,
  login,
  signUp
  // signOut,
}
