// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { OnchainLinkType, PostType, PostTypeEnum } from '../types';

/**
 * Get Post link type from an event
 */
export default (type: PostType, onchainLink: OnchainLinkType): string => {
	const DOMAIN = process.env.DOMAIN_NAME && process.env.DOMAIN_PROTOCOL ? `${process.env.DOMAIN_PROTOCOL}${process.env.DOMAIN_NAME}` : 'https://test.polkassembly.io';

	const {
		post_id,
		onchain_motion_id,
		onchain_proposal_id,
		onchain_referendum_id,
		onchain_treasury_proposal_id
	} = onchainLink;

	let id: number | undefined = post_id;

	switch (type) {
	case PostTypeEnum.PROPOSAL:
		id = onchain_proposal_id;
		break;
	case PostTypeEnum.TREASURY:
		id = onchain_treasury_proposal_id;
		break;
	case PostTypeEnum.MOTION:
		id = onchain_motion_id;
		break;
	case PostTypeEnum.REFERENDUM:
		id = onchain_referendum_id;
		break;
	default:
		break;
	}

	if (id === undefined) {
		console.error('getPostLink unhandled exception, id is undefined');
	}

	return `${DOMAIN}/${type}/${id}`;
};

