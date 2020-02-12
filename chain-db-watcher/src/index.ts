import { execute } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import chalk from 'chalk';
import dotenv from 'dotenv';
// import { GraphQLClient } from 'graphql-request';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import ws from 'ws';

// import { getSdk as getOnchainSdk, ProposalSubscriptionSubscription } from './generated/chain-db-graphql';
import {
	addDiscussionPostAndMotion,
	addDiscussionPostAndProposal,
	addDiscussionReferendum,
	motionDiscussionExists,
	proposalDiscussionExists
} from './graphql_helpers';
import { proposalSubscription, referendumSubscription } from './queries';
import { motionSubscription } from './queries/chain-db.queries';
import { syncDBs } from './sync';

dotenv.config();

const subscriptionMutation = {
	Created: 'CREATED'
};
const eventStatus = {
	Started: 'Started'
};
const graphQLEndpoint = process.env.CHAIN_DB_GRAPHQL_URL;

async function main (): Promise<void> {
	console.log('🔄 Syncing chain-db and discussion-db...');
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
		proposalSubscription
	);

	const referendumSubscriptionClient = createSubscriptionObservable(
		graphQLEndpoint,
		referendumSubscription
	);

	const motionSubscriptionClient = createSubscriptionObservable(
		graphQLEndpoint,
		motionSubscription
	);

	console.log(`🚀 Chain-db watcher listening to ${graphQLEndpoint}`);

	// const client = new SubscriptionClient(graphQLEndpoint, { reconnect: true }, ws);
	// const client = new GraphQLClient(graphQLEndpoint);
	// const onchainSdk = getOnchainSdk(client);
	// onchainSdk.proposalSubscription().then(data => console.log('Got data:', JSON.stringify(data, null, 4))).catch(e => console.log('Hophophop', e));

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
				preimage,
				referendumId,
				referendumStatus
			} = data.referendum.node;

			// At referendum creation, there should be only
			// a "Started" status event.
			if (!(referendumStatus[0].status === eventStatus.Started)) {
				console.error(
					chalk.red(
						`Referendem with id ${referendumId.toString()} has an unexpected status. Expect "${eventStatus.Started}", got ${referendumStatus[0].status}."`
					)
				);
				return;
			}
			const referendumCreationBlockHash = referendumStatus[0].blockNumber.hash;
			// FIXME This only takes care of democracy proposals going from proposal -> referendum
			// it does not cater for any other proposal/motion that are externally tabled
			addDiscussionReferendum({
				preimageHash: preimage?.hash,
				referendumCreationBlockHash,
				referendumId
			}).catch(e => {
				console.error(chalk.red(e));
			});
		}
	});

	// "motion": {
	//     "mutation": "CREATED",
	//     "node": {
	//         "motionProposalId": 0,
	//         "preimage": {
	//             "hash": "0x24f65d1cc0dcbf025a12c7fb969f7251b576155c9bff24b6e638c21ab3b3897b"
	//         },
	//         "id": 6,
	//         "status": [
	//             {
	//                 "blockNumber": {
	//                     "hash": "0xf54c4d8f46b9a9e770e1f595ea5ac545fdfe5b9cc485ff425dc72464bf2815f0"
	//                 },
	//                 "status": "Proposed"
	//             }
	//         ],
	//         "motionProposalHash": "0x4d4dd65ab6f3495525bda9574c58796c3fbda87848074dee6fcc858dad755a2a"
	//     }
	// }

	motionSubscriptionClient.subscribe(
		({ data }): void => {
			console.log('we got data', JSON.stringify(data, null, 4));
			if (data?.motion.mutation === subscriptionMutation.Created) {
				const { motionProposalId, author } = data.motion.node;
				motionDiscussionExists(motionProposalId).then(alreadyExist => {
					if (!alreadyExist) {
						addDiscussionPostAndMotion({ onchainMotionProposalId: Number(motionProposalId), proposer: author });
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
}

main().catch(error => console.error(chalk.red(error)));
