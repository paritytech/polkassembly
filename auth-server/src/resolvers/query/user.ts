// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import User from '../../model/User';
import { PublicUser } from '../../types';

interface argsType {
	id: number
}
export default async (parent, { id }: argsType): Promise<PublicUser> => {
	const user = await User
		.query()
		.where('id', id)
		.first();

	if (!user) {
		return null;
	}

	return {
		id: user.id,
		username: user.username,
		name: user.name
	};
};