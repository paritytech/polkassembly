import { UserDetailsContextType } from '../types'
import parseJwt from '../util/parseJWT';
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
 * Tells whether the jwt token stored locally
 * is set and not expired.
 */
export const isLocalStorageTokenValid = (): boolean => {
	let token = localStorage.getItem('Authorization') || null;

	if (token) {
		const tokenPayload = parseJwt(token);
		return tokenPayload.exp > Date.now() / 1000
	} else {
		return false
	}
};

/**
 * Performs a call to the auth server
 * in the hope to get a new jwt token.
 */
export const getRefreshedToken = () => (
	fetch(`${process.env.REACT_APP_AUTH_SERVER_GRAPHQL_URL}/token`, {
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

// export const signOut = () => {
//   localStorage.removeItem('Authorization')
//   // window.location.href = '/sign-in'

//   return store.clearStore()
// }
