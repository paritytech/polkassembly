/*****  Setup a GraphQL subscription observable  ******************************/

import { execute } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import dotenv from 'dotenv';
import gql from 'graphql-tag';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import  ws from 'ws';

dotenv.config();

const graphQLEndpoint = process.env.REACT_APP_HASURA_GRAPHQL_URL;
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

/*****************************************************************************/

/*********** Sample usage from your nodejs code ******************************/

// A subscription query to get changes for author with parametrised id
// using $id as a query variable
// const SUBSCRIBE_QUERY = gql`
//     subscription liveAuthor($id: Int!) {
//         author (where: {id: {_eq: $id}}) {
//             id
//             name
//         }
//     }
// `;

const SUBSCRIBE_QUERY = gql`
    subscription MySubscription {
        post_topics {
            name
        }
    }
`;

function main() {

	if (!graphQLEndpoint) {
		console.error('graphQL endpoint not set');
		return;
	}

	const subscriptionClient = createSubscriptionObservable(
		graphQLEndpoint, // GraphQL endpoint
		SUBSCRIBE_QUERY                                       // Subscription query
		// { id: 1 }                                              // Query variables
	);

	subscriptionClient.subscribe(eventData => {
		// Do something on receipt of the event
		console.log('Received event: ');
		console.log(JSON.stringify(eventData, null, 2));
	}, (err) => {
		console.log('Err');
		console.log(err);
	});
}

main();