import Address from '../../model/Address';
import AuthService from '../../services/auth';
import { Context, MessageType } from '../../types';
import getTokenFromReq from '../../utils/getTokenFromReq';
import messages from '../../utils/messages';

interface argsType {
	address: string
}

export default async (parent, { address }: argsType, ctx: Context): Promise<MessageType>  => {
	const token = getTokenFromReq(ctx.req);
	const authServiceInstance = new AuthService();
	const user = await authServiceInstance.GetUser(token);

	await Address
		.query()
		.where({
			address,
			user_id: user.id
		})
		.del();

	return { message: messages.ADDRESS_UNLINKING_SUCCESS };
};
