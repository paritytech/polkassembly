import React, { createContext, useState } from 'react'
import { UserDetailsContextType } from '../types'

const initialUserDetailsContext : UserDetailsContextType = {
	id: null,
	picture: null,
	setUserDetailsContextState : (): void => {
		throw new Error('setUserDetailsContextState function must be overridden');
	},
	username: null
}

export const UserDetailsContext = createContext(initialUserDetailsContext)

export const UserDetailsProvider = ({ children }: React.PropsWithChildren<{}>) => {

	const [userDetailsContextState, setUserDetailsContextState] = useState(initialUserDetailsContext);

	return (
		<UserDetailsContext.Provider value={{ ...userDetailsContextState, setUserDetailsContextState }}>
			{children}
		</UserDetailsContext.Provider>
	)
}