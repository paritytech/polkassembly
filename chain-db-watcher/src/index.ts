// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { execute } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import chalk from 'chalk';
import dotenv from 'dotenv';
import http from 'http';
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
	if (!graphQLEndpoint) {
		console.error(
			chalk.red('GraphQL endpoint not set in environment variables!')
		);
		return;
	}

	const syncMessage = `🔄 Syncing chain-db and discussion-db using ${graphQLEndpoint}, from block ${startBlock}...`;

	console.log(syncMessage);
	await syncDBs();

	const client = new SubscriptionClient(
		graphQLEndpoint,
		{
			connectionCallback: (error): void => { if (error) console.error('connectionCallback', error); },
			reconnect: true,
			timeout: 30000
		},
		ws);

	client.onConnecting(() => { console.log('---> Connecting...'); });
	client.onConnected(() => { console.log('---> Connected'); });
	client.onError((error) => { console.error('---> WS Client error', error); });
	client.onDisconnected(() => { console.log('---> Disconnected'); });
	client.onReconnecting(() => { console.log('---> Reconnecting...'); });
	client.onReconnected(() => {
		console.log('---> Reconnected');
		console.log(syncMessage);
		syncDBs();
	});

	// leave next, error, complete in this order
	/* eslint-disable sort-keys */
	const link = new WebSocketLink(client);

	console.log(`🚀 Chain-db watcher listening to ${graphQLEndpoint} from block ${startBlock}`);

	execute(link, {
		query: treasurySpendProposalSubscription,
		variables: { startBlock }
	}).subscribe({
		next: ({ data }): void => {
			console.log('Treasury data received', JSON.stringify(data, null, 2));

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
		error: error => { throw new Error(`Subscription (treasury) error: ${error}`); },
		complete: () => {
			console.log('Subscription (treasury) completed');
			process.exit(1);
		}
	});

	execute(link, {
		query: motionSubscription,
		variables: { startBlock }
	}).subscribe({
		next: ({ data }): void => {
			console.log('Motion data received', JSON.stringify(data, null, 2));

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
		error: error => { throw new Error(`Subscription (motion) error: ${error}`); },
		complete: () => {
			console.log('Subscription (motion) completed');
			process.exit(1);
		}
	});

	execute(link, {
		query: proposalSubscription,
		variables: { startBlock }
	}).subscribe({
		next: ({ data }): void => {
			console.log('Proposal data received', JSON.stringify(data, null, 2));

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
		error: error => { throw new Error(`Subscription (proposal) error: ${error}`); },
		complete: () => {
			console.log('Subscription (proposal) completed');
			process.exit(1);
		}
	});

	execute(link, {
		query: referendumSubscription,
		variables: { startBlock }
	}).subscribe({
		next: ({ data }): void => {
			console.log('Referendum data received', JSON.stringify(data, null, 2));

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
					referendumCreationBlockNumber: referendumStatus?.[0]?.blockNumber?.number,
					referendumId
				}).catch(e => {
					console.error(chalk.red(e));
				});
			}
		},
		error: error => { throw new Error(`Subscription (proposal) error: ${error}`); },
		complete: () => {
			console.log('Subscription (proposal) completed');
			process.exit(1);
		}
	});

	const hostname = '0.0.0.0';
	const port = Number(process.env.HEALTH_PORT) || 8019;

	const server = http.createServer((req, res) => {
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.end('ok');
	});

	server.listen(port, () => {
		console.log(`[+] Health endpoint available at http://${hostname}:${port}/`);
	});
}

function verifyEnvVariables (): void {
	// HEALTH_PORT and START_FROM are optional, therefor not mentionned here.
	const envs = [
		'REACT_APP_HASURA_GRAPHQL_URL',
		'TREASURY_TOPIC_ID',
		'DEMOCRACY_TOPIC_ID',
		'HASURA_PROPOSAL_POST_TYPE_ID',
		'PROPOSAL_BOT_USER_ID',
		'PROPOSAL_BOT_USERNAME',
		'PROPOSAL_BOT_PASSWORD',
		'CHAIN_DB_GRAPHQL_URL',
		'COUNCIL_TOPIC_ID'
	];

	envs.forEach(env => {
		if (!process.env[env]) {
			console.error(chalk.red(`✖︎ Environment variable ${env} not set.`));
		}
	});
}

verifyEnvVariables();
main().catch(error => console.error(chalk.red(error)));
