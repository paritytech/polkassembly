import { uuid } from 'uuidv4';

import Address from '../../model/Address';
import AuthService from '../../services/auth';
import { Context, AddressLinkStartType } from '../../types';
import getTokenFromReq from '../../utils/getTokenFromReq';
import messages from '../../utils/messages';

interface argsType {
	address: string
}

export default async (parent, { address }: argsType, ctx: Context): Promise<AddressLinkStartType>  => {
	const token = getTokenFromReq(ctx.req);
	const authServiceInstance = new AuthService();
	const user = await authServiceInstance.GetUser(token);

	const dbAddress = await Address
		.query()
		.allowInsert('[address, user_id, sign_message, linked]')
		.insert({
			address,
			user_id: user.id,
			sign_message: uuid(),
			linked: false
		});

	return { message: messages.ADDRESS_LINKING_STARTED, sign_message: dbAddress.sign_message, address_id: dbAddress.id };
};
