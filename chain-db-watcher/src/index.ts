import { execute } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import chalk from 'chalk';
import dotenv from 'dotenv';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import ws from 'ws';

import {
	addDiscussionPostAndMotion,
	addDiscussionPostAndProposal,
	addDiscussionPostAndTreasuryProposal,
	addDiscussionReferendum,
	motionDiscussionExists,
	proposalDiscussionExists,
	treasuryProposalDiscussionExists,
	updateTreasuryProposalWithMotion
} from './graphql_helpers';
import { motionSubscription, proposalSubscription, referendumSubscription, treasurySpendProposalSubscription } from './queries';
import { syncDBs } from './sync';
import { getMotionTreasuryProposalId } from './sync/utils';

dotenv.config();

const subscriptionMutation = {
	Created: 'CREATED'
};
const eventStatus = {
	Started: 'Started'
};
const graphQLEndpoint = process.env.CHAIN_DB_GRAPHQL_URL;
const startBlock = Number(process.env.START_FROM) || 0;

async function main (): Promise<void> {
	console.log(`🔄 Syncing chain-db and discussion-db from block ${startBlock}...`);
	await syncDBs();

	const getWsClient = function (wsurl: string): SubscriptionClient {
		const client = new SubscriptionClient(wsurl, { reconnect: true }, ws);
		return client;
	};

	// wsurl: GraphQL endpoint
	// query: GraphQL query (use gql`` from the 'graphql-tag' library)
	// variables: Query variables object
	const createSubscriptionObservable = (
		wsurl: string,
		query: any,
		variables?: any
	) => {
		const link = new WebSocketLink(getWsClient(wsurl));
		return execute(link, { query: query, variables: variables });
	};
	if (!graphQLEndpoint) {
		console.error(
			chalk.red('GraphQL endpoint not set in environment variables!')
		);
		return;
	}

	const proposalSubscriptionClient = createSubscriptionObservable(
		graphQLEndpoint,
		proposalSubscription,
		{ startBlock }
	);

	const referendumSubscriptionClient = createSubscriptionObservable(
		graphQLEndpoint,
		referendumSubscription,
		{ startBlock }
	);

	const motionSubscriptionClient = createSubscriptionObservable(
		graphQLEndpoint,
		motionSubscription,
		{ startBlock }
	);

	const treasurySpendProposalSubscriptionClient = createSubscriptionObservable(
		graphQLEndpoint,
		treasurySpendProposalSubscription,
		{ startBlock }
	);

	console.log(`🚀 Chain-db watcher listening to ${graphQLEndpoint} from block ${startBlock}`);

	treasurySpendProposalSubscriptionClient.subscribe(
		({ data }): void => {
			if (data?.treasurySpendProposal.mutation === subscriptionMutation.Created) {
				const { treasuryProposalId, proposer } = data.treasurySpendProposal.node;
				treasuryProposalDiscussionExists(treasuryProposalId).then(alreadyExist => {
					if (!alreadyExist) {
						addDiscussionPostAndTreasuryProposal({ onchainTreasuryProposalId: Number(treasuryProposalId), proposer });
					} else {
						console.error(chalk.red(`✖︎ Treasury Proposal id ${treasuryProposalId.toString()} already exists in the discsussion db. Not inserted.`));
					}
				}).catch(error => console.error(chalk.red(error)));
			}
		},
		err => {
			console.error(chalk.red(err));
		}
	);

	motionSubscriptionClient.subscribe(
		({ data }): void => {
			if (data?.motion.mutation === subscriptionMutation.Created) {
				const { author, motionProposalId, motionProposalArguments, section } = data.motion.node;
				motionDiscussionExists(motionProposalId).then(alreadyExist => {
					if (!alreadyExist) {
						const treasuryProposalId = getMotionTreasuryProposalId(section, motionProposalArguments);
						const onchainMotionProposalId = Number(motionProposalId);

						if (treasuryProposalId || treasuryProposalId === 0) {
							// the motion comes from a treasury proposal
							updateTreasuryProposalWithMotion({ onchainMotionProposalId, onchainTreasuryProposalId: treasuryProposalId });
						} else {
							// the motion was created by a council member
							addDiscussionPostAndMotion({ onchainMotionProposalId, proposer: author });
						}
					} else {
						console.error(chalk.red(`✖︎ Motion id ${motionProposalId.toString()} already exists in the discsussion db. Not inserted.`));
					}
				}).catch(error => console.error(chalk.red(error)));
			}
		},
		err => {
			console.error(chalk.red(err));
		}
	);

	proposalSubscriptionClient.subscribe(
		({ data }): void => {
			if (data?.proposal.mutation === subscriptionMutation.Created) {
				const { proposalId, author } = data.proposal.node;
				proposalDiscussionExists(proposalId).then(alreadyExist => {
					if (!alreadyExist) {
						addDiscussionPostAndProposal({ onchainProposalId: Number(proposalId), proposer: author });
					} else {
						console.error(chalk.red(`✖︎ Proposal id ${proposalId.toString()} already exists in the discsussion db. Not inserted.`));
					}
				}).catch(error => console.error(chalk.red(error)));
			}
		},
		err => {
			console.error(chalk.red(err));
		}
	);

	referendumSubscriptionClient.subscribe(({ data }): void => {
		if (data?.referendum.mutation === subscriptionMutation.Created) {
			const {
				preimageHash,
				referendumId,
				referendumStatus
			} = data?.referendum?.node;

			// At referendum creation, there should be only
			// a "Started" status event.
			if (!(referendumStatus?.[0]?.status === eventStatus.Started)) {
				console.error(
					chalk.red(
						`Referendem with id ${referendumId.toString()} has an unexpected status. Expect "${eventStatus.Started}", got ${referendumStatus?.[0]?.status}."`
					)
				);
				return;
			}

			if (!preimageHash) {
				throw new Error(`Unexpect preimage hash, got ${preimageHash}`);
			}

			if (!referendumId && referendumId !== 0) {
				throw new Error(`Unexpect referendumId, got ${referendumId}`);
			}

			// FIXME This only takes care of motion and democracy proposals
			// it does not cater for tech committee proposals
			addDiscussionReferendum({
				preimageHash,
				referendumCreationBlockHash: referendumStatus?.[0]?.blockNumber?.hash,
				referendumId
			}).catch(e => {
				console.error(chalk.red(e));
			});
		}
	});
}

main().catch(error => console.error(chalk.red(error)));
