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
		.allowInsert('[address, user_id, name, source]')
		.insert({
			address,
			user_id: user.id,
			name,
			source,
			message: uuid(),
			linked: false
		});

	return { message: messages.ADDRESS_LINKING_STARTED, address_id: dbAddress.id };
};
