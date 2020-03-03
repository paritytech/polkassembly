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
								preimageHash: curr.preimageHash,
								blockCreationHash: curr?.referendumStatus?.[0]?.blockNumber?.hash
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

	return {
		onchain: {
			motions: onchainMotionMap,
			proposals: onchainProposalMap,
			referenda: onchainReferendaMap,
			treasuryProposals: onchainTreasuryProposalMap
		},
		discussion: {
			motions: discussionMotionMap,
			proposals: discussionProposalMap,
			referenda: discussionReferendaMap,
			treasuryProposals: discussionTreasuryProposalMap
		}
	};
};

