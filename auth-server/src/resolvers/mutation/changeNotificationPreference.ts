// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import AuthService from '../../services/auth';
import { ChangeResponseType, Context, NotificationPreferencesType } from '../../types';
import getTokenFromReq from '../../utils/getTokenFromReq';
import messages from '../../utils/messages';

interface ArgsType {
	notificationPreferences: NotificationPreferencesType;
}

export default async (partent: any, { notificationPreferences }: ArgsType, ctx: Context): Promise<ChangeResponseType> => {
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
