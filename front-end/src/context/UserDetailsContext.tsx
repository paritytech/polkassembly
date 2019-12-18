import jwt from 'jsonwebtoken';
import React, { createContext, useState } from 'react';

import { getLocalStorageToken } from '../services/auth.service';
import { UserDetailsContextType, JWTPayploadType } from '../types';

const initialUserDetailsContext : UserDetailsContextType = {
	id: null,
	picture: null,
	setUserDetailsContextState : (): void => {
		throw new Error('setUserDetailsContextState function must be overridden');
	},
	username: null
}

const accessToken = getLocalStorageToken();
try {
	const tokenPayload = accessToken && jwt.decode(accessToken) as JWTPayploadType;

	if (tokenPayload && tokenPayload.sub && tokenPayload.name ){
		const { sub:id, name:username } = tokenPayload

		if (id && username){
			initialUserDetailsContext.id = Number(id);
			initialUserDetailsContext.username = username;
		}
	}
} catch {
	//do nothing, the user will be authenticated as soon as there's a new call to the server.
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