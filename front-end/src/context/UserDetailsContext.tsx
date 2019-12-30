import jwt from 'jsonwebtoken';
import React, { createContext, useState } from 'react';

import { getLocalStorageToken } from '../services/auth.service';
import { UserDetailsContextType, JWTPayploadType } from '../types';

const initialUserDetailsContext : UserDetailsContextType = {
	email: null,
	email_verified: false,
	id: null,
	name: null,
	picture: null,
	setUserDetailsContextState : (): void => {
		throw new Error('setUserDetailsContextState function must be overridden');
	},
	username: null
}

const accessToken = getLocalStorageToken();
try {
	const tokenPayload = accessToken && jwt.decode(accessToken) as JWTPayploadType;

	if (tokenPayload && tokenPayload.sub) {
		const {
			sub: id,
			name,
			username,
			email,
			email_verified
		} = tokenPayload

		if (id) {
			initialUserDetailsContext.id = Number(id);
		}
		if (username) {
			initialUserDetailsContext.username = username;
		}
		if (name) {
			initialUserDetailsContext.name = name
		}
		if (email) {
			initialUserDetailsContext.email = email
		}
		initialUserDetailsContext.email_verified = email_verified || false
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