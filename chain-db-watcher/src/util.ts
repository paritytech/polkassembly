
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

// FIXME This is probably too simple and fetches the token every single time.
// it's ok for proposals since there are rarely more than 1 proposal per 15min.
export const getToken = async () => {

	const username = process.env.USERNAME;
	const password = process.env.PASSWORD;

	if (!username || !password) {
		throw new Error ('USERNAME or PASSWORD environment variables haven\'t been set for the proposal bot to login.');
	}

	const credentials = JSON.stringify({
		username,
		password
	});

	const url = process.env.AUTH_SERVER_LOGIN_URL;

	if (!url) {
		throw new Error('Auth server url not set in env file.');
	}

	const token = await fetch(url, {
		method: 'post',
		body:    credentials,
		headers: { 'Content-Type': 'application/json' }
	})
		.then(res => res.json())
		.then(json => json.token)
		.catch(e => {throw new Error('Couldn\'t fetch the token' + e);});

	return token;
};
