import { ForbiddenError } from 'apollo-server';

import Address from '../../model/address';
import AuthService from '../../services/auth';
import { Context, MessageType } from '../../types';
import getTokenFromReq from '../../utils/getTokenFromReq';
import messages from '../../utils/messages';

interface argsType {
	address_id: number
	signature: String
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

	// TODO: verify signature
	// TODO: set linked: true
	console.log(dbAddress, signature)

	return { message: messages.ADDRESS_LINKING_SUCCESSFUL };
};
