import jwt from 'jsonwebtoken';
import React, { createContext, useState } from 'react';

import { getLocalStorageToken } from '../services/auth.service';
import { UserDetailsContextType, JWTPayploadType } from '../types';

const publicKey = process.env.REACT_APP_JWT_PUBLIC_KEY;
const initialUserDetailsContext : UserDetailsContextType = {
	id: null,
	picture: null,
	setUserDetailsContextState : (): void => {
		throw new Error('setUserDetailsContextState function must be overridden');
	},
	username: null
}

const accessToken = getLocalStorageToken();
const tokenPayload = accessToken && publicKey && jwt.verify(accessToken, publicKey) as JWTPayploadType;

if (tokenPayload && tokenPayload.sub && tokenPayload.name ){
	const { sub:id, name:username } = tokenPayload

	if (id && username){
		initialUserDetailsContext.id = id;
		initialUserDetailsContext.username = username;
	}
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