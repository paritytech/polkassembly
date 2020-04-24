// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
/* eslint-disable no-extra-parens */

import { useEffect } from 'react';
import { OnchainLinkDiscussionFragment,
	OnchainLinkMotionFragment,
	OnchainLinkProposalFragment,
	OnchainLinkTreasuryProposalFragment
} from 'src/generated/graphql';

import useRouter from './useRouter';
interface RedirectGovernancePostType{
	onchainLink?:  OnchainLinkDiscussionFragment
	| OnchainLinkProposalFragment
	| OnchainLinkMotionFragment
	| OnchainLinkTreasuryProposalFragment
	| null;
	from: 'discussion' | 'motion' | 'proposal' | 'treasury'
}
export default function ({ onchainLink, from }: RedirectGovernancePostType) {

	const { history } = useRouter();

	useEffect(( ) => {
		// from a discussion, a proposal or a motion
		if ((onchainLink as OnchainLinkProposalFragment | OnchainLinkMotionFragment )?.onchain_referendum_id
			|| (onchainLink as OnchainLinkProposalFragment | OnchainLinkMotionFragment)?.onchain_referendum_id === 0 ){
			history.push(`/referendum/${(onchainLink as OnchainLinkProposalFragment | OnchainLinkMotionFragment).onchain_referendum_id}`);
			return;
		}

		// from a discussion or a treasury
		if (from !== 'motion'){
			if ((onchainLink as OnchainLinkTreasuryProposalFragment)?.onchain_motion_id
				|| (onchainLink as OnchainLinkTreasuryProposalFragment)?.onchain_motion_id === 0 ){
				history.push(`/motion/${(onchainLink as OnchainLinkTreasuryProposalFragment).onchain_motion_id}`);
				return;
			}
		}

		// from a discussion
		if (from !== 'motion' && from !== 'treasury' && from !== 'proposal'){
			if ((onchainLink as OnchainLinkTreasuryProposalFragment)?.onchain_treasury_proposal_id
				|| (onchainLink as OnchainLinkTreasuryProposalFragment)?.onchain_treasury_proposal_id === 0 ){
				history.push(`/treasury/${(onchainLink as OnchainLinkTreasuryProposalFragment).onchain_treasury_proposal_id}`);
				return;
			}
			if ((onchainLink as OnchainLinkProposalFragment)?.onchain_proposal_id
				|| (onchainLink as OnchainLinkProposalFragment)?.onchain_proposal_id === 0 ){
				history.push(`/proposal/${(onchainLink as OnchainLinkProposalFragment).onchain_proposal_id}`);
				return;
			}
		}
	});

}