import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { HttpLink } from 'apollo-link-http';
import { TokenRefreshLink } from 'apollo-link-token-refresh';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {
	isLocalStorageTokenValidOrUndefined,
	getLocalStorageToken,
	getRefreshedToken,
	storeLocalStorageToken,
	deleteLocalStorageToken
} from './services/auth.service';
import { Get_Refresh_TokenQueryResult } from './generated/auth-graphql';

const setAuthorizationLink = setContext(() => {
	const token = getLocalStorageToken()
	if (token) {
		return { headers: { authorization: `Bearer ${token}` } }
	} else {
		return null
	}
});

const httpLink = new HttpLink({
	uri: process.env.REACT_APP_HASURA_GRAPHQL_URL
});

const tokenRefreshLink = new TokenRefreshLink({
	accessTokenField: 'token',
	fetchAccessToken: getRefreshedToken,
	handleError: (err:Error) => {
		deleteLocalStorageToken();
		console.error('There has been a problem getting a new access token: ', err);
		// FIXME probably redirect user to login with an error "you've been logged out"?
	},
	handleFetch: (accessToken) => storeLocalStorageToken(accessToken),
	handleResponse: () => async (response:Response) => {
		if(response.ok) {
			const res: Get_Refresh_TokenQueryResult = await response.json()
			if(res && res.data){
				return res.data.token
			} else {
				throw new Error('The auth server did not answer with an expected refreshed token.')
			}
		}

		throw new Error('The auth server did not answer successfully to the refresh token call.')
	},
	isTokenValidOrUndefined:  isLocalStorageTokenValidOrUndefined
})

const link = ApolloLink.from([
	tokenRefreshLink,
	setAuthorizationLink,
	httpLink
])

export const client = new ApolloClient({
	cache: new InMemoryCache(),
	link
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,

	document.getElementById('root'),
);
