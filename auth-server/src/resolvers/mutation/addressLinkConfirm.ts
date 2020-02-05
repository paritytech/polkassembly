import AuthService from '../../services/auth';
import { Context, ChangeResponseType } from '../../types';
import getTokenFromReq from '../../utils/getTokenFromReq';
import messages from '../../utils/messages';

interface argsType {
	address_id: number
	signature: string
}

export default async (parent, { address_id, signature }: argsType, ctx: Context): Promise<ChangeResponseType>  => {
	let token = getTokenFromReq(ctx.req);
	const authServiceInstance = new AuthService();

	token = await authServiceInstance.AddressLinkConfirm(token, address_id, signature);

	return { message: messages.ADDRESS_LINKING_SUCCESSFUL, token };
};
