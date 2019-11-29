import { LoginObjectType, SignupObjectType, SignupResponseObjectType, UserDetailsContextType } from '../types'
import parseJwt from '../util/parseJWT';

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
	fetch(`${process.env.REACT_APP_AUTH_SERVER_URL}/token`, {
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST'
	})
)

/**
 * Sends a request to the authentication server to login a user
 * given the username and password
 * @param param0 Object with username and password
 */
export const login = ({ username, password }: LoginObjectType) => {

	return fetch(`${process.env.REACT_APP_AUTH_SERVER_URL}/login`, {
		body: JSON.stringify({ password, username }),
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST'
	})
		.then(async (response) => {
			if (response.status < 400 && response.ok) {
				return response
			} else {
				const error = await response.json()
					.then((data) => {
						console.error('Authservice login error', data.errors);
						return data.errors;
					})
				throw new Error(error);
			}
		});
}

/**
 * Sends a request to the authentication server to sign the user in as well as login them in.
 * @param SignupData Object with the data required to signup
 */
export const signUp = (SignupData: SignupObjectType) => {
	return fetch(`${process.env.REACT_APP_AUTH_SERVER_URL}/signup`, {
		body: JSON.stringify(SignupData),
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		},
		method: 'POST'
	})
		.then((response) => {
			if (response.status < 400 && response.ok) {
				return response
			} else {
				// FIXME we need to throw here and remove this ugly alert
				alert('Could not signup now. Try again later');
			}
		})
		.catch(error => {
			console.log(error.message || error)
			return error
		})
}

/**
 * Store the user information in local context and call the function to store the received token
 * @param param0 user and token answered by the auth server
 * @param currentUser context data on the user
 */
export const handleLoginUser = ({ user, token }: SignupResponseObjectType, currentUser: UserDetailsContextType) => {
	storeLocalStorageToken(token);
	currentUser.setUserDetailsContextState((prevState) => {
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
