import { AuthenticationError } from 'apollo-server';

import messages from './messages';
import User from '../model/User';

/**
 * Get User from userId
 */
export default async (userId: number) => {
	const user = await User
		.query()
		.where('id', userId)
		.first();

	if (!user) {
		throw new AuthenticationError(messages.USER_NOT_FOUND);
	}

	return user;
};

