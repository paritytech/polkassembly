import { uuid } from 'uuidv4';

import Address from '../../model/address';
import AuthService from '../../services/auth';
import { Context, AddressLinkStartType } from '../../types';
import getTokenFromReq from '../../utils/getTokenFromReq';
import messages from '../../utils/messages';

interface argsType {
	address: string
	name: string
	source: string
}

export default async (parent, { address, name, source }: argsType, ctx: Context): Promise<AddressLinkStartType>  => {
	const token = getTokenFromReq(ctx.req);
	const authServiceInstance = new AuthService();
	const user = await authServiceInstance.GetUser(token);

	const dbAddress = await Address
		.query()
		.allowInsert('[address, user_id, name, source, sign_message, linked]')
		.insert({
			address,
			user_id: user.id,
			name,
			source,
			sign_message: uuid(),
			linked: false
		});

	return { message: messages.ADDRESS_LINKING_STARTED, sign_message: dbAddress.sign_message, address_id: dbAddress.id };
};
