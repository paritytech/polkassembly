import chalk from 'chalk';

import { addDiscussionPostAndMotion, addDiscussionPostAndProposal, addDiscussionPostAndTreasuryProposal, addDiscussionReferendum, updateTreasuryProposalWithMotion } from '../graphql_helpers';
import { motionObjectMap, objectMap, OnchainMotionSyncType, referendumObjectMap, SyncData } from '../types';
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
			onchain: {
				motions: onChainMotions,
				proposals: onChainProposals,
				referenda: onchainReferenda,
				treasuryProposals: onChainTreasuryProposals
			},
			discussion: {
				motions: discussionMotions,
				proposals: discussionProposals,
				referenda: discussionReferenda,
				treasuryProposals: discussionTreasuryProposals
			}
		};
	} catch (err) {
		console.error(chalk.red('getSyncData execution error'), err);
	}
};

const syncTreasuryProposals = async (onchainTreasuryProposals: objectMap, discussionTreasuryProposals: objectMap): Promise<void[]> => {
	return Promise.all(Object.entries(onchainTreasuryProposals).map(async ([key, author]) => {
		// if this treasuryproposal doesn't exist in the discussion DB
		if (!discussionTreasuryProposals[key]) {
			await addDiscussionPostAndTreasuryProposal({ onchainTreasuryProposalId: Number(key), proposer: author });
		}
	}));
};

const syncMotions = async (onchainMotions: motionObjectMap, discussionMotions: objectMap): Promise<void[]> => {
	return Promise.all(Object.entries(onchainMotions).map(async ([key, val]: [string, OnchainMotionSyncType]) => {
		// if this motion doesn't exist in the discussion DB
		if (!discussionMotions[key]) {
			if (val.treasuryProposalId || val.treasuryProposalId === 0) {
				await updateTreasuryProposalWithMotion({
					onchainMotionProposalId: Number(key),
					onchainTreasuryProposalId: val.treasuryProposalId
				});
			} else {
				await addDiscussionPostAndMotion({
					onchainMotionProposalId: Number(key),
					proposer: val.author
				});
			}
		}
	}));
};

const syncProposals = async (onchainProposals: objectMap, discussionProposals: objectMap): Promise<void[]> => {
	return Promise.all(Object.entries(onchainProposals).map(async ([key, author]) => {
		// if this proposal doesn't exist in the discussion DB
		if (!discussionProposals[key]) {
			await addDiscussionPostAndProposal({ onchainProposalId: Number(key), proposer: author });
		}
	}));
};

const syncReferenda = async (onchainReferenda: referendumObjectMap, discussionReferenda: objectMap): Promise<void[]> => {
	return Promise.all(
		Object.keys(onchainReferenda).map(async (key) => {
			// If this referendum doesn't exist in the discussion DB
			if (!discussionReferenda[key]) {
				if (!onchainReferenda[key].blockCreationHash) {
					throw new Error(`No block hash creation found for referendum id: ${key}`);
				}

				await addDiscussionReferendum({
					preimageHash: onchainReferenda[key].preimageHash,
					referendumCreationBlockHash: onchainReferenda[key].blockCreationHash,
					referendumId: Number(key)
				});
			}
		}));
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

		syncMaps?.onchain?.motions &&
		syncMaps?.discussion?.motions &&
		await syncMotions(syncMaps.onchain.motions, syncMaps.discussion.motions);

		syncMaps?.onchain?.referenda &&
		syncMaps?.discussion?.referenda &&
		await syncReferenda(syncMaps.onchain.referenda, syncMaps.discussion.referenda);
	} catch (err) {
		console.error(chalk.red('syncDBs execution error'), err);
	}
};
