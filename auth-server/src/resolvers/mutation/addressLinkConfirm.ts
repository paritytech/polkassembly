import { ForbiddenError } from 'apollo-server';
import keyring from '@polkadot/ui-keyring';
import { naclVerify, schnorrkelVerify } from '@polkadot/util-crypto';

import Address from '../../model/address';
import AuthService from '../../services/auth';
import { Context, MessageType } from '../../types';
import getTokenFromReq from '../../utils/getTokenFromReq';
import messages from '../../utils/messages';

interface argsType {
	address_id: number
	signature: string
}

export default async (parent, { address_id, signature }: argsType, ctx: Context): Promise<MessageType>  => {
	const token = getTokenFromReq(ctx.req);
	const authServiceInstance = new AuthService();
	const user = await authServiceInstance.GetUser(token);

	const dbAddress = await Address
		.query()
		.where('id', address_id)
		.first();

	if (!dbAddress) {
		throw new ForbiddenError(messages.ADDRESS_NOT_FOUND);
	}

	if (dbAddress.user_id !== user.id) {
		throw new ForbiddenError(messages.ADDRESS_USER_NOT_MATCHING);
	}

	await Address
		.query()
		.patch({
			signature: signature,
			linked: true
		})
		.findById(address_id);

	const publicKey = keyring.decodeAddress(dbAddress.address || '');

	const isValidEd = naclVerify(dbAddress.sign_message, signature, publicKey);
	const isValidSr = schnorrkelVerify(dbAddress.sign_message, signature, publicKey);

	console.log(isValidEd, isValidSr);

	return { message: messages.ADDRESS_LINKING_SUCCESSFUL };
};
