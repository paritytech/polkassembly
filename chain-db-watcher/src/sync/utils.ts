// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/* eslint-disable camelcase */
import { OnchainMotionFragment } from 'src/generated/chain-db-graphql';
import { OnchainMotionSyncType, OnchainReferendaValueSyncType, SyncData, SyncMap } from 'src/types';

export const getMotionTreasuryProposalId = (section: string, motionProposalArguments: OnchainMotionFragment['motionProposalArguments']): number | undefined => {
	let treasuryProposalId: number | undefined;

	if (section === 'treasury' && motionProposalArguments?.length) {
		motionProposalArguments.forEach(({ name, value }) => {
			if (name === 'proposal_id') {
				treasuryProposalId = Number(value);
			}
		});
	}
	return treasuryProposalId;
};

export const getMaps = (syncData: SyncData): SyncMap => {
	const discussionMotionMap = syncData?.discussion.motions?.reduce(
		(prev, curr) => {
			// edgecase those id can be 0
			if ((curr?.onchain_motion_id || curr?.onchain_motion_id === 0) && (curr?.id || curr?.id === 0)) {
				return {
					...prev,
					[curr.onchain_motion_id]: curr.proposer_address
				};
			} else {
				return prev || {};
			}
		}, {});

	const onchainMotionMap = syncData?.onchain.motions?.reduce(
		(prev, curr) => {
			if ((curr?.motionProposalId || curr?.motionProposalId === 0) && (curr?.id || curr?.id === 0)) {
				const treasuryProposalId = getMotionTreasuryProposalId(curr.section, curr.motionProposalArguments);

				return {
					...prev,
					[curr.motionProposalId]: {
						author: curr.author,
						section: curr.section,
						treasuryProposalId: treasuryProposalId
					} as OnchainMotionSyncType
				};
			} else {
				return prev || {};
			}
		}, {});

	const discussionProposalMap = syncData?.discussion.proposals?.reduce(
			(prev, curr) => {
				// edgecase those id can be 0
				if ((curr?.onchain_proposal_id || curr?.onchain_proposal_id === 0) && (curr?.id || curr?.id === 0)) {
					return {
						...prev,
						[curr.onchain_proposal_id]: curr.proposer_address
					};
				} else {
					return prev || {};
				}
			}, {});

	const onchainProposalMap = syncData?.onchain.proposals?.reduce(
			(prev, curr) => {
				if ((curr?.proposalId || curr?.proposalId === 0) && (curr?.id || curr?.id === 0)) {
					return {
						...prev,
						[curr.proposalId]: curr.author
					};
				} else {
					return prev || {};
				}
			}, {});

	const discussionReferendaMap = syncData?.discussion.referenda?.reduce(
				(prev, curr) => {
					// edgecase those id can be 0
					if ((curr?.onchain_referendum_id || curr?.onchain_referendum_id === 0) && (curr?.id || curr?.id === 0)) {
						return {
							...prev,
							[curr.onchain_referendum_id]: curr.id
						};
					} else {
						return prev || {};
					}
				}, {});

	const onchainReferendaMap = syncData?.onchain.referenda?.reduce(
				(prev, curr) => {
					if ((curr?.referendumId || curr?.referendumId === 0) && (curr?.id || curr?.id === 0)) {
						return {
							...prev,
							[curr.referendumId]: {
								blockCreationNumber: curr?.referendumStatus?.[0]?.blockNumber?.number,
								preimageHash: curr.preimageHash
							} as OnchainReferendaValueSyncType
						};
					} else {
						return prev || {};
					}
				}, {});

	const discussionTreasuryProposalMap = syncData?.discussion.treasuryProposals?.reduce(
					(prev, curr) => {
						// edgecase those id can be 0
						if ((curr?.onchain_treasury_proposal_id || curr?.onchain_treasury_proposal_id === 0) && (curr?.id || curr?.id === 0)) {
							return {
								...prev,
								[curr.onchain_treasury_proposal_id]: curr.proposer_address
							};
						} else {
							return prev || {};
						}
					}, {});

	const discussionTechCommitteeProposalMap = syncData?.discussion.techCommitteeProposals?.reduce(
					(prev, curr) => {
						// edgecase those id can be 0
						if ((curr?.onchain_tech_committee_proposal_id || curr?.onchain_tech_committee_proposal_id === 0) && (curr?.id || curr?.id === 0)) {
							return {
								...prev,
								[curr.onchain_tech_committee_proposal_id]: curr.proposer_address
							};
						} else {
							return prev || {};
						}
					}, {});

	const onchainTreasuryProposalMap = syncData?.onchain.treasuryProposals?.reduce(
					(prev, curr) => {
						if ((curr?.treasuryProposalId || curr?.treasuryProposalId === 0) && (curr?.id || curr?.id === 0)) {
							return {
								...prev,
								[curr.treasuryProposalId]: curr.proposer
							};
						} else {
							return prev || {};
						}
					}, {});

	const onchainTechCommitteeProposalsProposalMap = syncData?.onchain.techCommitteeProposals?.reduce(
					(prev, curr) => {
						if ((curr?.proposalId || curr?.proposalId === 0) && (curr?.id || curr?.id === 0)) {
							return {
								...prev,
								[curr.proposalId]: curr.author
							};
						} else {
							return prev || {};
						}
					}, {});

	const discussionTipMap = syncData?.discussion.tips?.reduce(
					(prev, curr) => {
						// the id for tips is their hash
						if (curr?.onchain_tip_id) {
							return {
								...prev,
								[curr.onchain_tip_id]: curr.proposer_address
							};
						} else {
							return prev || {};
						}
					}, {});

	const onchainTipMap = syncData?.onchain.tips?.reduce(
					(prev, curr) => {
						if (curr?.hash) {
							return {
								...prev,
								[curr.hash]: curr.finder
							};
						} else {
							return prev || {};
						}
					}, {});

	const discussionBountyMap = syncData?.discussion.bounties?.reduce(
		(prev, curr) => {
			// edgecase those id can be 0
			if ((curr?.onchain_bounty_id || curr?.onchain_bounty_id === 0) && (curr?.id || curr?.id === 0)) {
				return {
					...prev,
					[curr.onchain_bounty_id]: curr.proposer_address
				};
			} else {
				return prev || {};
			}
		}, {});

	const onchainBountyMap = syncData?.onchain.bounties?.reduce(
		(prev, curr) => {
			if ((curr?.bountyId || curr?.bountyId === 0) && (curr?.id || curr?.id === 0)) {
				return {
					...prev,
					[curr.bountyId]: curr.proposer
				};
			} else {
				return prev || {};
			}
		}, {});

	return {
		discussion: {
			bounties: discussionBountyMap,
			motions: discussionMotionMap,
			proposals: discussionProposalMap,
			referenda: discussionReferendaMap,
			techCommitteeProposals: discussionTechCommitteeProposalMap,
			tips: discussionTipMap,
			treasuryProposals: discussionTreasuryProposalMap
		},
		onchain: {
			bounties: onchainBountyMap,
			motions: onchainMotionMap,
			proposals: onchainProposalMap,
			referenda: onchainReferendaMap,
			techCommitteeProposals: onchainTechCommitteeProposalsProposalMap,
			tips: onchainTipMap,
			treasuryProposals: onchainTreasuryProposalMap
		}
	};
};

