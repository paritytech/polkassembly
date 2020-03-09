// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import getTokenFromReq from '../../utils/getTokenFromReq';
import AuthService from '../../services/auth';
import { Context, ChangeResponseType, NotificationPreferencesType } from '../../types';
import messages from '../../utils/messages';

interface argsType {
	notificationPreferences: NotificationPreferencesType
}

export default async (parent, { notificationPreferences }: argsType, ctx: Context): Promise<ChangeResponseType> => {
	const token = getTokenFromReq(ctx.req);
	const { postParticipated, postCreated, newProposal, ownProposal } = notificationPreferences;

	const authServiceInstance = new AuthService();
	const updatedJWT = await authServiceInstance.ChangeNotificationPreference(
		token,
		{
			postParticipated,
			postCreated,
			newProposal,
			ownProposal
		}
	);

	return { message: messages.NOTIFICATION_PREFERENCE_CHANGE_SUCCESSFUL, token: updatedJWT };
};
