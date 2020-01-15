/*****  Setup a GraphQL subscription observable  ******************************/

import { execute } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import dotenv from 'dotenv';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import  ws from 'ws';

import { proposalAlreadyExists, addPostAndProposal } from './graphql_helpers';
import { proposalsSubscription } from './queries';

dotenv.config();

const graphQLEndpoint = process.env.CHAIN_DB_GRAPHQL_URL;
const getWsClient = function(wsurl: string) {
	const client = new SubscriptionClient(
		wsurl, { reconnect: true }, ws
	);
	return client;
};

// wsurl: GraphQL endpoint
// query: GraphQL query (use gql`` from the 'graphql-tag' library)
// variables: Query variables object
const createSubscriptionObservable = (wsurl: string, query: any, variables?: any) => {
	const link = new WebSocketLink(getWsClient(wsurl));
	return execute(link, { query: query, variables: variables });
};

async function main() {
	// try{
	// 	const token = await getToken();
	// 	console.log('----> token', token);
	// } catch(e){
	// 	console.log('ooopw', e);
	// }

	if (!graphQLEndpoint) {
		console.error('GraphQL endpoint not set in environment variables!');
		return;
	}

	const subscriptionClient = createSubscriptionObservable(
		graphQLEndpoint,
		proposalsSubscription
		// { id: 1 }                                              // Query variables
	);

	console.log(`🚀 Chain-db watcher listening to ${graphQLEndpoint}`);

	subscriptionClient.subscribe(({ data }) => {
		console.log('Received event: ');
		console.log(JSON.stringify(data, null, 2));

		if (data?.proposal.mutation === 'CREATED'){
			const { proposalId, proposer } = data.proposal.node;

			proposalAlreadyExists(proposalId)
				.then((alreadyExist) => {
					if (!alreadyExist) {
						addPostAndProposal({
							onchainId: proposalId,
							proposer
						})
							.then( () => console.log(`✅ Proposal ${proposalId.toString()} added to the database.`))
							.catch( error => console.error(`Error adding a new proposal: ${error}`));
					} else {
						console.error(`🔴 proposal id ${proposalId.toString()} already exists in the database. Not inserted.`);
					}
				})
				.catch(error => console.error(error));
		}
	}, (err) => {
		console.log('Err');
		console.log(err);
	});
}

main().catch(error => console.error(error));