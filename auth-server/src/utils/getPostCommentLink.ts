// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { CommentCreationHookDataType, PostType } from '../types';

/**
 * Get Post link type from an event
 */
export default (type: PostType, data: CommentCreationHookDataType): string => {
	if (!process.env.DOMAIN_NAME || !process.env.DOMAIN_PROTOCOL) {
		console.error('Domain name and protocol not set');
		return '';
	}
	const DOMAIN = `${process.env.DOMAIN_PROTOCOL}${process.env.DOMAIN_NAME}`;

	return `${DOMAIN}/${type}/${data.post_id}#${data.id}`;
};

