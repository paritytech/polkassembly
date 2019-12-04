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
	storeLocalStorageToken
} from './services/auth.service';

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
	handleError: (err:any) => {
		console.error('There has been a problem with your fetch operation: ', err);
	},
	handleFetch: (accessToken) => {console.log('access token',accessToken) ;storeLocalStorageToken(accessToken)},
	handleResponse: () => async (response:any) => {
		if(response.ok) {
			const res = await response.json()
			return res.data.token
		}

		throw new Error('Network response was not ok.')
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
