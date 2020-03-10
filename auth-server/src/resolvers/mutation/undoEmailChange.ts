// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import AuthService from '../../services/auth';
import { UndoEmailChangeResponseType } from '../../types';
import messages from '../../utils/messages';

interface argsType {
	token: string
}

export default async (parent, { token }: argsType): Promise<UndoEmailChangeResponseType> => {
	const authServiceInstance = new AuthService();
	const { updatedToken, email } = await authServiceInstance.UndoEmailChange(token);

	return { message: messages.EMAIL_UNDO_SUCCESSFUL, token: updatedToken, email };
};
