// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Request } from 'express';
import { AuthenticationError } from 'apollo-server';

/**
 * Get Token from request
 */
export default (req: Request): string => {
	// Authorization header is of format:
	// Authorization: Bearer $asdnkjadj32j23kj@#adslkads
	const authHeader = req.headers.authorization;

	if (!authHeader) {
		throw new AuthenticationError('Authorization header missing');
	}

	const token = `${authHeader}`.split(' ')[1];

	if (!token) {
		throw new AuthenticationError('token missing');
	}

	return token;
};