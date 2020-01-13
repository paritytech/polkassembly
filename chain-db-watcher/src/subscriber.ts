/*****  Setup a GraphQL subscription observable  ******************************/

import { execute } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import BN from 'bn.js';
import dotenv from 'dotenv';
import gql from 'graphql-tag';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import  ws from 'ws';

import { proposalAlreadyExist, addPostAndProposal } from './graphql_helpers';

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

const PROPOSAL_SUBSCRIPTION = gql`
	subscription ProposalsSubscription{
		proposal {
			mutation
				node {
					depositAmount
					method
					proposalId
					proposer
					proposalArguments {
						name
						value
					}
					section
				}
		}
    }
`;
// e.g returns
// {
// 	"data": {
// 	  "proposal": {
// 		"mutation": "CREATED",
// 		"node": {
// 		  "method": "remark",
// 		  "metaDescription": "[ Make some on-chain remark.]",
// 		  "proposalId": 0,
// 		  "section": "system",
// 		  "depositAmount": "123000000000000",
// 		  "proposalArguments": [
// 			{
// 			  "name": "_remark",
// 			  "value": "0x00"
// 			}
// 		  ],
// 		  "proposer": "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"
// 		}
// 	  }
// 	}
//   }

function main() {

	if (!graphQLEndpoint) {
		console.error('GraphQL endpoint not set in environment variables!');
		return;
	}

	const subscriptionClient = createSubscriptionObservable(
		graphQLEndpoint,
		PROPOSAL_SUBSCRIPTION
		// { id: 1 }                                              // Query variables
	);

	subscriptionClient.subscribe(({ data }) => {
		console.log('Received event: ');
		console.log(JSON.stringify(data, null, 2));

		if (data?.proposal.mutation === 'CREATED'){
			const { depositAmount, method, proposalId, proposer, section } = data.proposal.node;

			proposalAlreadyExist(proposalId)
				.then(async (alreadyExist) => {
					if (!alreadyExist) {
						// authorId, depositAmount, onchainId, methodName, methodArguments
						addPostAndProposal({ authorId: proposer, depositAmount: new BN(depositAmount), onchainId: proposalId, methodName: `${section}.${method}` });
						console.log(`✅ Proposal ${proposalId.toString()} added to the database.`);
					} else {
						throw new Error(`🔴 proposal id ${proposalId.toString()} already exists in the database. Not inserted.`);
					}
				})
				.catch(e => { throw new Error(e); });
		}
	}, (err) => {
		console.log('Err');
		console.log(err);
	});
}

main();