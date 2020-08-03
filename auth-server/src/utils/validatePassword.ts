// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { UserInputError } from 'apollo-server';

import messages from './messages';

export default (password: string): void => {
	if (password.length < 6) {
		throw new UserInputError(messages.PASSWORD_LENGTH_ERROR);
	}
};
