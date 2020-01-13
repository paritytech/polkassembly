import { getToken } from './util';
import { GraphQLClient } from 'graphql-request';
import { PostAndProposalType } from '../types';

const graphqlServerUrl = process.env.REACT_APP_HASURA_GRAPHQL_URL;
const ProposalPostTypeId = process.env.HASURA_PROPOSAL_POST_TYPE_ID;
/**
 * Tell if there is already a proposal in the DB matching the
 * onchain proposal id passed as argument
 *
 * @param onchainId the onchain proposal id
 */
export const proposalAlreadyExist = async (onchainId: number) => {
	const token = await getToken();

	if (!graphqlServerUrl) throw new Error ('Please specify an environment variable for the REACT_APP_HASURA_GRAPHQL_URL');
	if (!token) throw new Error ('No authorization token found for the node-watcher');

	try {
		const client = new GraphQLClient(graphqlServerUrl, {
			headers: {
				'Authorization': 'Bearer ' + token
			}
		});

		const getProposal = `
            query Proposals($onchain_id: Int!) {
            proposals(where: {onchain_id: {_eq: $onchain_id}}) {
                id
            }
        }
       `;

		return client.request(getProposal, { onchain_id: onchainId })
			.then(data => data.proposals && !!data.proposals.length)
			.catch(err => {
				console.log('GraphQL response errors',err.response.errors);
				console.log('Response data if available',err.response.data);
				throw new Error(err);
			});

	} catch (e){
		console.log('propAlreadyExist - graphql execurion error',e);
		throw new Error(e);
	}
};

export const addPostAndProposal = async ({ authorId, depositAmount, onchainId, methodName, methodArguments }:PostAndProposalType) => {
	const token = await getToken();
	const proposalCategorieId = ProposalPostTypeId;
	const defaultProposalContent = 'Post not yet edited by the proposal author';
	const defaultProposalTitle = `#${onchainId} on chain proposal`;
	const affectedRows = 2;

	if (!graphqlServerUrl) throw new Error ('Please specify an environment variable for the REACT_APP_SERVER_URL.');
	if (!token) throw new Error ('No authorization token found for the node-watcher.');

	try {
		const client = new GraphQLClient(graphqlServerUrl, {
			headers: {
				'Authorization': 'Bearer ' + token
			}
		});

		const addPostAndProposalMutation = `
            mutation MyMutation($authorId: Int!, $categoryId: Int!, $content: String!, $title: String!, $deposit: float8!, $methodArguments: String, $methodName: String!, $onchainId: Int!) {
                __typename
                insert_proposals(objects: {
                    deposit: $deposit,
                    method_arguments: $methodArguments,
                    method_name: $methodName,
                    onchain_id: $onchainId,
                    post: {
                        data: {
                            author_id: $authorId,
                            category_id: $categoryId,
                            content: $content,
                            title: $title
                        }
                    }
                }) {
                    affected_rows
                }
            }
       `;
		const proposalAndPostVariables = {
			'authorId': authorId,
			'deposit': depositAmount,
			'categoryId': proposalCategorieId,
			'content': defaultProposalContent,
			'methodArguments': methodArguments,
			'methodName': methodName,
			'onchainId': onchainId,
			'title': defaultProposalTitle
		};

		return client.request(addPostAndProposalMutation, proposalAndPostVariables)
			.then(data => data['insert_proposals'] && data['insert_proposals']['affected_rows'] && data['insert_proposals']['affected_rows']===affectedRows)
			.catch(err => {
				console.log('GraphQL response errors',err.response.errors);
				console.log('Response data if available',err.response.data);
				throw new Error(err);
			});

	} catch (e){
		console.log('addPostAndProposal - graphql execution error',e);
		throw new Error(e);
	}
};
