import { UserInputError } from 'apollo-server';

import messages from './messages';

export default (name: string): void => {

	// empty name are accepted
	if (name === '') {
		return
	}

	const regexp = /^[A-Za-z0-9 ._-]{3,30}$/;

	if (!regexp.test(name)){
		throw new UserInputError(messages.NAME_INVALID_ERROR);
	}

};
