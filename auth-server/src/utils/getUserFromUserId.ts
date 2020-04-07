// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { AuthenticationError } from 'apollo-server';

import User from '../model/User';
import messages from './messages';

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

