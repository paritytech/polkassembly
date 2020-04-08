// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { uuid } from 'uuidv4';

import Address from '../../model/Address';
import AuthService from '../../services/auth';
import { AddressLinkStartArgs, AddressLinkStartType, Context } from '../../types';
import getTokenFromReq from '../../utils/getTokenFromReq';
import messages from '../../utils/messages';

export default async (parent: void, { network, address }: AddressLinkStartArgs, ctx: Context): Promise<AddressLinkStartType> => {
	const token = getTokenFromReq(ctx.req);
	const authServiceInstance = new AuthService();
	const user = await authServiceInstance.GetUser(token);

	const dbAddress = await Address
		.query()
		.allowInsert('[network, address, user_id, sign_message, verified]')
		.insert({
			address,
			network,
			sign_message: uuid(),
			user_id: user.id,
			verified: false
		});

	return { address_id: dbAddress.id, message: messages.ADDRESS_LINKING_STARTED, sign_message: dbAddress.sign_message };
};
