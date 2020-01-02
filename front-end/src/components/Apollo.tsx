import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { HttpLink } from 'apollo-link-http';
import { TokenRefreshLink } from 'apollo-link-token-refresh';
import jwt from 'jsonwebtoken';
import React, { useContext } from 'react';

import {
	logout,
	getLocalStorageToken,
	storeLocalStorageToken
} from '../services/auth.service';
import { Get_Refresh_TokenQueryResult } from '../generated/auth-graphql';
import { UserDetailsContext } from '../context/UserDetailsContext';
import { JWTPayploadType } from '../types';

/**
 * Performs a call to the auth server
 * to get a new jwt token.
 */
const fetchAccessToken = () => (
	fetch(`${process.env.REACT_APP_AUTH_SERVER_GRAPHQL_URL}`, {
		body: JSON.stringify({ 'operationName':null,'query':'query get_new_token { token { token }}' }),
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST'
	})
);

/**
 * Read the data from the answer
 * and pass along the new jwt token.
 */
const handleResponse = () => async (response:Response) => {
	if(response.ok) {
		const res: Get_Refresh_TokenQueryResult = await response.json();
		if(res && res.data){
			return res.data.token;
		} else {
			throw new Error('The auth server did not answer with an expected refreshed token.');
		}
	}

	throw new Error('The auth server did not answer successfully to the refresh token call.');
};

/**
 * Tells whether the jwt token stored locally
 * is expired. It returns true if the token isn't set.
 */
const isTokenValidOrUndefined = (): boolean => {
	let token = localStorage.getItem('Authorization') || null;

	if (token) {
		const tokenPayload = jwt.decode(token) as JWTPayploadType | null;

		// if the token couldn't be decoded (tokenPayload is null) ask for a new one.
		return tokenPayload ? tokenPayload.exp > Date.now() / 1000 : false;
	} else {
		// if there's no token we shouldn't ask for a refresh token
		return true;
	}
};

/**
 * Apollo link that will get the token from
 * local storage and set the Authorization accordingly.
 */
const setAuthorizationLink = setContext(() => {
	const token = getLocalStorageToken();
	if (token) {
		return { headers: { authorization: `Bearer ${token}` } };
	} else {
		return null;
	}
});

interface Props {
	children: JSX.Element[] | JSX.Element
  }

const Apollo = ( { children }:Props ) => {
	const currentUser = useContext(UserDetailsContext);
	const publicKey = process.env.REACT_APP_JWT_PUBLIC_KEY;

	const handleError = (err:Error) => {
		logout(currentUser.setUserDetailsContextState);
		console.error('There has been a problem getting a new access token: ', err);
	};

	const handleFetch = (accessToken : string) => {
		try {
			const tokenPayload = accessToken && publicKey && jwt.verify(accessToken, publicKey) as JWTPayploadType;

			storeLocalStorageToken(accessToken);

			if (tokenPayload && tokenPayload.sub) {
				const id = Number(tokenPayload.sub);
				const name = tokenPayload.name;
				const username =  tokenPayload.username;
				const email = tokenPayload.email;
				const email_verified = tokenPayload.email_verified;

				if (id) {
					currentUser.setUserDetailsContextState((prevState) => {
						return {
							...prevState,
							email,
							email_verified,
							id,
							name,
							username
						};
					});
				}
			}
		} catch (e) {
			// the jwt isn't valid
			console.log('Invalid jwt received.',e);
		}
	};

	const httpLink = new HttpLink({
		uri: process.env.REACT_APP_HASURA_GRAPHQL_URL
	});

	const tokenRefreshLink = new TokenRefreshLink({
		accessTokenField: 'token',
		fetchAccessToken,
		handleError,
		handleFetch,
		handleResponse,
		isTokenValidOrUndefined
	});

	const link = ApolloLink.from([
		tokenRefreshLink,
		setAuthorizationLink,
		httpLink
	]);

	const client = new ApolloClient({
		cache: new InMemoryCache(),
		link
	});

	return (
		<ApolloProvider client={client}>
			{children}
		</ApolloProvider>
	);
};

export default Apollo;
