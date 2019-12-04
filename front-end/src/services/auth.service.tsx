import jwt from 'jsonwebtoken'

import { UserDetailsContextType, JWTPayploadType } from '../types'
import { LoginResponse } from '../generated/auth-graphql';

/**
 * Store the JWT token in localstorage
 * @param token the token received from the authentication header
 */
export const storeLocalStorageToken = (token: string) => {
	localStorage.setItem('Authorization', token)
}

/**
 * Get the the jwt from localstorage
 * if any. It might be expired
 */
export const getLocalStorageToken = (): string|null => {
	return localStorage.getItem('Authorization') || null;
}

/**
 * Remove the the jwt from localstorage
 * if any.
 */
export const deleteLocalStorageToken = (): void => {
	return localStorage.removeItem('Authorization');
}

/**
 * Tells whether the jwt token stored locally
 * is expired. It returns true if the token isn't set.
 */
export const isLocalStorageTokenValidOrUndefined = (): boolean => {
	let token = localStorage.getItem('Authorization') || null;

	if (token) {
		const tokenPayload = jwt.decode(token) as JWTPayploadType | null;

		if(tokenPayload){
			return tokenPayload.exp > Date.now() / 1000
		} else {
			// the token couldn't be decoded
			// ask for a new one.
			return false
		}
	} else {
		// if there's no token we shouldn't ask for a refresh token
		return true
	}
};

/**
 * Performs a call to the auth server
 * in the hope to get a new jwt token.
 */
export const getRefreshedToken = () => (
	fetch(`${process.env.REACT_APP_AUTH_SERVER_GRAPHQL_URL}`, {
		body: JSON.stringify({ 'operationName':null,'query':'query get_new_token { token { token }}' }),
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST'
	})
)

/**
 * Store the user information in local context and call the function to store the received token
 * @param param0 user and token answered by the auth server
 * @param currentUser context data on the user
 */
export const handleLoginUser = ({ user, token }: LoginResponse, currentUser: UserDetailsContextType) => {
	token && storeLocalStorageToken(token);
	user && currentUser.setUserDetailsContextState((prevState) => {
		return {
			...prevState,
			id: user.id,
			username: user.username
		}
	})
}

export const logout = (setUserDetailsContextState: UserDetailsContextType['setUserDetailsContextState']) => {
	deleteLocalStorageToken();
	setUserDetailsContextState((prevState) => {
		return {
			...prevState,
			id: null,
			username: null
		}
	})
}
