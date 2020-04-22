// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import chalk from 'chalk';

import {
	addDiscussionPostAndMotion,
	addDiscussionPostAndProposal,
	addDiscussionPostAndTreasuryProposal,
	addDiscussionReferendum,
	updateTreasuryProposalWithMotion
} from '../graphql_helpers';
import { MotionObjectMap, ObjectMap, OnchainMotionSyncType, ReferendumObjectMap, SyncData, TreasuryDeduplicateMotionMap } from '../types';
import {
	getDiscussionMotions,
	getDiscussionProposals,
	getDiscussionReferenda,
	getDiscussionTreasuryProposals,
	getOnChainMotions,
	getOnChainProposals,
	getOnchainReferenda,
	getOnChainTreasuryProposals
} from './getter';
import { getMaps } from './utils';

const getSyncData = async (): Promise<SyncData | undefined> => {
	try {
		const discussionMotions = await getDiscussionMotions();
		const discussionProposals = await getDiscussionProposals();
		const discussionReferenda = await getDiscussionReferenda();
		const discussionTreasuryProposals = await getDiscussionTreasuryProposals();

		const onChainMotions = await getOnChainMotions();
		const onChainProposals = await getOnChainProposals();
		const onchainReferenda = await getOnchainReferenda();
		const onChainTreasuryProposals = await getOnChainTreasuryProposals();

		return {
			discussion: {
				motions: discussionMotions,
				proposals: discussionProposals,
				referenda: discussionReferenda,
				treasuryProposals: discussionTreasuryProposals
			},
			onchain: {
				motions: onChainMotions,
				proposals: onChainProposals,
				referenda: onchainReferenda,
				treasuryProposals: onChainTreasuryProposals
			}
		};
	} catch (err) {
		console.error(chalk.red('getSyncData execution error'), err);
	}
};

const syncTreasuryProposals = async (onchainTreasuryProposals: ObjectMap, discussionTreasuryProposals: ObjectMap): Promise<void[]> => {
	return Promise.all(Object.entries(onchainTreasuryProposals).map(async ([key, author]) => {
		// if this treasuryproposal doesn't exist in the discussion DB
		if (!discussionTreasuryProposals[key]) {
			await addDiscussionPostAndTreasuryProposal({ onchainTreasuryProposalId: Number(key), proposer: author });
		}
	}));
};

const syncMotions = async (onchainMotions: MotionObjectMap, discussionMotions: ObjectMap, treasuryDeduplicatedMotionsMap: TreasuryDeduplicateMotionMap): Promise<void[]> => {
	return Promise.all(Object.entries(onchainMotions).map(async ([key, val]: [string, OnchainMotionSyncType]) => {
		// the same treasury id might have several motions attached to it.
		// only the last motion should be added to the discussion db

		// update if needed with the highest motion id.

		// if this motion doesn't exist in the discussion DB
		if (!discussionMotions[key]) {
			// if this motion is associated to a treasury proposal
			if (val.treasuryProposalId || val.treasuryProposalId === 0) {
				const latestMotion = Math.max(...treasuryDeduplicatedMotionsMap[val.treasuryProposalId]);
				// and it's the latest motion associated to this treasury
				if (Number(key) === latestMotion) {
					await updateTreasuryProposalWithMotion({
						onchainMotionProposalId: Number(key),
						onchainTreasuryProposalId: val.treasuryProposalId
					});
				}
			} else {
				await addDiscussionPostAndMotion({
					onchainMotionProposalId: Number(key),
					proposer: val.author
				});
			}
		}
	}));
};

const syncProposals = async (onchainProposals: ObjectMap, discussionProposals: ObjectMap): Promise<void[]> => {
	return Promise.all(Object.entries(onchainProposals).map(async ([key, author]) => {
		// if this proposal doesn't exist in the discussion DB
		if (!discussionProposals[key]) {
			await addDiscussionPostAndProposal({ onchainProposalId: Number(key), proposer: author });
		}
	}));
};

const syncReferenda = async (onchainReferenda: ReferendumObjectMap, discussionReferenda: ObjectMap): Promise<void[]> => {
	return Promise.all(
		Object.keys(onchainReferenda).map(async (key) => {
			// If this referendum doesn't exist in the discussion DB
			if (!discussionReferenda[key]) {
				if (!onchainReferenda[key].blockCreationNumber) {
					throw new Error(`No block hash creation found for referendum id: ${key}`);
				}

				await addDiscussionReferendum({
					preimageHash: onchainReferenda[key].preimageHash,
					referendumCreationBlockNumber: onchainReferenda[key].blockCreationNumber,
					referendumId: Number(key)
				});
			}
		}));
};

const getTreasuryDeduplicatedMotionsMap = (motionObjectMap: MotionObjectMap): TreasuryDeduplicateMotionMap => {
	// this map will contain the treasury with the array of motions linked to it
	// eg: {
	// 14: [126, 128],
	// 15: [127, 129]
	// }

	const treasuryMap: TreasuryDeduplicateMotionMap = {};

	Object.entries(motionObjectMap).forEach(([key, value]) => {
		// we are only interrested in motions following a treasury
		if (value.treasuryProposalId || value.treasuryProposalId === 0) {
			const motionArray = treasuryMap[value.treasuryProposalId] || [];
			// add the motion to the deduplicated map
			treasuryMap[value.treasuryProposalId] = [...motionArray, Number(key)];
		}
	});

	return treasuryMap;
};

export const syncDBs = async (): Promise<void> => {
	try {
		const syncData = await getSyncData();
		const syncMaps = syncData && getMaps(syncData);

		syncMaps?.onchain?.proposals &&
		syncMaps?.discussion?.proposals &&
		await syncProposals(syncMaps.onchain.proposals, syncMaps.discussion.proposals);

		syncMaps?.onchain?.treasuryProposals &&
		syncMaps?.discussion?.treasuryProposals &&
		await syncTreasuryProposals(syncMaps.onchain.treasuryProposals, syncMaps.discussion.treasuryProposals);

		if (syncMaps?.onchain?.motions && syncMaps?.discussion?.motions) {
			const treasuryDeduplicatedMotionsMap = getTreasuryDeduplicatedMotionsMap(syncMaps.onchain.motions);
			await syncMotions(syncMaps.onchain.motions, syncMaps.discussion.motions, treasuryDeduplicatedMotionsMap);
		}

		syncMaps?.onchain?.referenda &&
		syncMaps?.discussion?.referenda &&
		await syncReferenda(syncMaps.onchain.referenda, syncMaps.discussion.referenda);

		console.log('✅ Syncing finished.');
	} catch (err) {
		console.error(chalk.red('syncDBs execution error'), err);
	}
};
