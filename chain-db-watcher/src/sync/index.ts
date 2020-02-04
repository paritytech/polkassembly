import chalk from 'chalk';

import { addPostAndProposal, getAssociatedProposalId } from '../graphql_helpers';
import { SyncData } from '../types';
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

export const syncDBs = (): void => {
	getSyncData().then(syncData => {
		const syncMaps = syncData && getMaps(syncData);
		console.log('syncMaps', JSON.stringify(syncMaps, null, 4));
		syncMaps?.onchain?.proposals && Object.entries(syncMaps.onchain.proposals).forEach(([id, author]) => {
			if (!syncMaps?.discussion?.proposals?.[id]) {
				addPostAndProposal({ onchainProposalId: Number(id), proposer: author }).then(
					(addedId) => {
						if (addedId || addedId === 0) {
							return console.log(`${chalk.green('✔︎')} Proposal ${id} added to the database.`);
						}
					}
				).catch(error => console.error(chalk.red(error)));
			}
		});

		syncMaps?.onchain.referenda && Object.keys(syncMaps.onchain.referenda).forEach((id) => {
			if (!syncMaps?.discussion?.referenda?.[id]) {
				if (!syncMaps?.onchain?.referenda?.[id]?.blockCreationHash) {
					throw new Error(`No block hash creation found for referendum id: ${id}`);
				}

				getAssociatedProposalId({
					preimageHash: syncMaps?.onchain?.referenda[id].preimageHash,
					referendumCreationBlockHash: syncMaps.onchain.referenda[id].blockCreationHash
				}).then(associatedProposalId => { console.log('associatedProposal', associatedProposalId); });
				// 	.then(associatedProposalId => {
				// 		// edge case, proposal id can be 0, which is falsy
				// 		if (!associatedProposalId && associatedProposalId !== 0) {
				// 			console.error(chalk.red(`No proposal Id found on chain-db for referendum id: ${referendumId}.`));
				// 		} else {
				// 			canUpdateDiscussionDB(associatedProposalId)
				// 				.then(canUpdate => {
				// 					if (canUpdate) {
				// 						addReferendumId({
				// 							onchainProposalId: associatedProposalId,
				// 							onchainReferendumId: referendumId
				// 						})
				// 							.then(() =>
				// 								console.log(`${chalk.green('✔︎')} Referendum id ${referendumId} added to the onchain_links with proposal id ${associatedProposalId}.`)
				// 							)
				// 							.catch((error: any) =>
				// 								console.error(chalk.red(`⚠︎ Error adding a new proposal: ${error}`))
				// 							);
				// 					} else {
				// 						console.error(chalk.red(
				// 							`✖︎ Proposal id ${associatedProposalId.toString()} related to referendum id ${referendumId} does not exist in the discussion db, or onchain_referendum_id is not null.`
				// 							)
				// 						);
				// 					}
				// 				})
				// 				.catch(error => console.error(chalk.red(error)));
				// 		}
				// 	})
				// 	.catch(e => {
				// 		console.error(chalk.red(e));
				// 	});
				// ).catch(error => console.error(chalk.red(error)));
			}
		});
	});
};
