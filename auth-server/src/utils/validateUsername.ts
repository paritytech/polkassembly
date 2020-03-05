import { UserInputError } from "apollo-server";

import messages from "./messages";

export default (username: string): void => {
	const regexp = /^[A-Za-z0-9._-]{3,30}$/;

	if (!regexp.test(username)){
		throw new UserInputError(messages.USERNAME_INVALID_ERROR);
	}

};
