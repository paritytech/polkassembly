import chalk from 'chalk';
import { SyncData } from 'src/types';

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
		console.log('discussionProposals', discussionProposals);
		console.log('onChainProposals', onChainProposals);
		console.log('discussionReferenda', discussionReferenda);
		console.log('onChainReferenda', onchainReferenda);

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

export const syncDBs = () => {
	getSyncData().then(syncData => {
		const syncMaps = syncData && getMaps(syncData);

		syncMaps?.onchain?.proposals && Object.keys(syncMaps.onchain.proposals).map((key) => {
			console.log('key', key);
		});
	});
};
