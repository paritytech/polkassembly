import chalk from 'chalk';

import { addDiscussionPostAndProposal, addDiscussionReferendum } from '../graphql_helpers';
import { objectMap, referendumObjectMap, SyncData } from '../types';
import {
	getDiscussionProposals,
	getDiscussionReferenda,
	getOnChainProposals,
	getOnchainReferenda
} from './getter';
import { getMaps } from './utils';

const getSyncData = async (): Promise<SyncData | undefined> => {
	try {
		const discussionProposals = await getDiscussionProposals();
		const discussionReferenda = await getDiscussionReferenda();

		const onChainProposals = await getOnChainProposals();
		const onchainReferenda = await getOnchainReferenda();

		return {
			onchain: {
				proposals: onChainProposals,
				referenda: onchainReferenda
			},
			discussion: {
				proposals: discussionProposals,
				referenda: discussionReferenda
			}
		};
	} catch (err) {
		console.error(chalk.red('getSyncData execution error'), err);
	}
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

		syncMaps?.onchain?.referenda &&
		syncMaps?.discussion?.referenda &&
		await syncReferenda(syncMaps.onchain.referenda, syncMaps.discussion.referenda);
	} catch (err) {
		console.error(chalk.red('syncDBs execution error'), err);
	}
};
