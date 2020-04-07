// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import User from '../../model/User';
import { PublicUser } from '../../types';

interface ArgsType {
	id: number;
}
export default async (partent: any, { id }: ArgsType): Promise<PublicUser | null> => {
	const user = await User
		.query()
		.where('id', id)
		.first();

	if (!user) {
		console.error('no user found');
		return null;
	}

	return {
		id: user.id,
		name: user.name,
		username: user.username
	};
};
