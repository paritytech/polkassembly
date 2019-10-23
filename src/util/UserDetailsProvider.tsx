import React, { createContext, useState } from 'react'
import {UserDetailsContextType} from '../types'

const initialUserDetailsContext : UserDetailsContextType = {
    id: null, 
    picture: null,
    username: null,
    setUserDetailsContextState : (): void => {
        throw new Error('setUserDetailsContextState function must be overridden');
      },
}

export const UserDetailsContext = createContext(initialUserDetailsContext)

export const UserDetailsProvider = ({children}: React.PropsWithChildren<{}>) => {

    const [userDetailsContextState, setUserDetailsContextState] = useState(initialUserDetailsContext);
    const setUserDetailsContextStateWithprev = (newState:UserDetailsContextType) => setUserDetailsContextState({...userDetailsContextState, ...newState})

    return (
        <UserDetailsContext.Provider value={{ ...userDetailsContextState, setUserDetailsContextState }}>
            {children}
        </UserDetailsContext.Provider>
    )
}

//export default {UserDetailsContext, UserDetailsProvider}