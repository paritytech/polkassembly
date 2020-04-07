// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import AuthService from '../../services/auth';
import { ChangeResponseType, Context } from '../../types';
import getTokenFromReq from '../../utils/getTokenFromReq';
import messages from '../../utils/messages';
import validateName from '../../utils/validateName';

interface ArgsType {
	newName: string;
}

export default async (partent: any, { newName }: ArgsType, ctx: Context): Promise<ChangeResponseType> => {
	const token = getTokenFromReq(ctx.req);

	validateName(newName);

	const authServiceInstance = new AuthService();
	const updatedJWT = await authServiceInstance.ChangeName(token, newName);

	return { message: messages.NAME_CHANGED_SUCCESSFULLY, token: updatedJWT };
};
