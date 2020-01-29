import Address from '../../model/Address';
import { AddressType, Context } from '../../types';
import AuthService from '../../services/auth';
import getTokenFromReq from '../../utils/getTokenFromReq';

export default async (parent, args, ctx: Context): Promise<AddressType[]> => {
	const token = getTokenFromReq(ctx.req);
	const authServiceInstance = new AuthService();
	const user = await authServiceInstance.GetUser(token);

	return Address
		.query()
		.where({
			verified: true,
			user_id: user.id
		});
};
