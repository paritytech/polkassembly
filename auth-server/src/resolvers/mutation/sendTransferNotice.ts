// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import User from '../../model/User';
import { sendTransferNoticeEmail } from '../../services/email';
import { MessageType, TransferNoticeArgs } from '../../types';

const network = process.env.NETWORK;

export default async (parent: void, { secret, mistake }: TransferNoticeArgs): Promise<MessageType> => {
	const users = await User
		.query()
		.where({});

	if (secret !== process.env.JWT_KEY_PASSPHRASE) {
		return { message: 'Invalid Secret' };
	}

	for (let i = 0; i < users.length; i++) {
		const user = users[i];

		if (user.email) {
			console.log(`Sending notice: ${user.email}`);
			sendTransferNoticeEmail(network, user.email, mistake);
		}
	}

	return { message: 'Success' };
};
