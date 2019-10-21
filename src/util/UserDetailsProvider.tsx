import React, { createContext, useState } from 'react'
import {ContextUserDetailsType} from '../types'
// import UserDetailsContext from './UserDetailsContext'

export const UserDetailsContext = createContext({
    id: 0, 
    picture: '',
    username: '',
    setUserDetails: (u:any) => {}
})

export const UserDetailsProvider = ({ children }:any) => {

    const setUserDetails = function(u:any):void {
        return updateUserDetails(u)
    }

    const defaultUserState = {
        id: 0, 
        picture: '',
        username: '',
        setUserDetails
    }

    const [userDetails, updateUserDetails] = useState(defaultUserState);

  return (
    <UserDetailsContext.Provider value={userDetails}>
      {children}
    </UserDetailsContext.Provider>
  )
}

// export default UserDetailsProvider