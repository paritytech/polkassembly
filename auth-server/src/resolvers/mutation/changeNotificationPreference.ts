// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import AuthService from '../../services/auth';
import { ChangeNotificationPreferenceArgs, ChangeResponseType, Context } from '../../types';
import getTokenFromReq from '../../utils/getTokenFromReq';
import messages from '../../utils/messages';

export default async (parent: void, { notificationPreferences }: ChangeNotificationPreferenceArgs, ctx: Context): Promise<ChangeResponseType> => {
	const token = getTokenFromReq(ctx.req);
	const { postParticipated, postCreated, newProposal, ownProposal } = notificationPreferences;

	const authServiceInstance = new AuthService();
	const updatedJWT = await authServiceInstance.ChangeNotificationPreference(
		token,
		{
			newProposal,
			ownProposal,
			postCreated,
			postParticipated
		}
	);

	return { message: messages.NOTIFICATION_PREFERENCE_CHANGE_SUCCESSFUL, token: updatedJWT };
};
