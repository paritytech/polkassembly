// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { OnchainLinkType, PostType, PostTypeEnum } from '../types';

/**
 * Get Post id from an event
 */
export default (type: PostType, onchainLink: OnchainLinkType): number | string => {
	const {
		post_id,
		onchain_motion_id,
		onchain_proposal_id,
		onchain_referendum_id,
		onchain_tip_id,
		onchain_bounty_id,
		onchain_treasury_proposal_id,
		onchain_tech_committee_proposal_id
	} = onchainLink;

	let id: number | string | undefined;

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
	case PostTypeEnum.TIP:
		id = onchain_tip_id;
		break;
	case PostTypeEnum.BOUNTY:
		id = onchain_bounty_id;
		break;
	case PostTypeEnum.TECH:
		id = onchain_tech_committee_proposal_id;
		break;
	default:
		break;
	}

	return id === undefined ? post_id : id;
};

