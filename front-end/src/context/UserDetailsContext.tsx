// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import jwt from 'jsonwebtoken';
import React, { createContext, useState } from 'react';

import { getLocalStorageToken } from '../services/auth.service';
import { JWTPayploadType, UserDetailsContextType } from '../types';
import { decodePostgresArray } from '../util/decodePostgressArray';

const initialUserDetailsContext : UserDetailsContextType = {
	addresses: [],
	defaultAddress: '',
	email: null,
	email_verified: false,
	id: null,
	name: null,
	notification: {
		newProposal: false,
		ownProposal: true,
		postCreated: true,
		postParticipated: true
	},
	picture: null,
	setUserDetailsContextState : (): void => {
		throw new Error('setUserDetailsContextState function must be overridden');
	},
	username: null,
	web3signup: false
};

const accessToken = getLocalStorageToken();
try {
	const tokenPayload = accessToken && jwt.decode(accessToken) as JWTPayploadType;

	if (tokenPayload && tokenPayload.sub) {
		const {
			sub: id,
			name,
			username,
			email,
			email_verified,
			notification,
			'https://hasura.io/jwt/claims': claims,
			web3signup
		} = tokenPayload;

		if (id) {
			initialUserDetailsContext.id = Number(id);
		}
		if (username) {
			initialUserDetailsContext.username = username;
		}
		if (name) {
			initialUserDetailsContext.name = name;
		}
		if (email) {
			initialUserDetailsContext.email = email;
		}
		if (notification) {
			initialUserDetailsContext.notification = notification;
		}
		initialUserDetailsContext.email_verified = email_verified || false;
		initialUserDetailsContext.addresses = decodePostgresArray(claims['x-hasura-kusama']);
		initialUserDetailsContext.defaultAddress = claims['x-hasura-kusama-default'];
		initialUserDetailsContext.web3signup = web3signup || false;
	}
} catch {
	//do nothing, the user will be authenticated as soon as there's a new call to the server.
}

export const UserDetailsContext = createContext(initialUserDetailsContext);

export const UserDetailsProvider = ({ children }: React.PropsWithChildren<{}>) => {

	const [userDetailsContextState, setUserDetailsContextState] = useState(initialUserDetailsContext);

	return (
		<UserDetailsContext.Provider value={{ ...userDetailsContextState, setUserDetailsContextState }}>
			{children}
		</UserDetailsContext.Provider>
	);
};
