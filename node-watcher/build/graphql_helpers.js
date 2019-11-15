"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("./util");
const graphql_request_1 = require("graphql-request");
const graphqlServerUrl = process.env.REACT_APP_HASURA_GRAPHQL_URL;
/**
 * Tell if there is already a proposal in the DB matching the
 * onchain proposal id passed as argument
 *
 * @param onchainId the onchain proposal id
 */
exports.proposalAlreadyExist = (onchainId) => __awaiter(void 0, void 0, void 0, function* () {
    const token = yield util_1.getToken();
    if (!graphqlServerUrl)
        throw new Error("Please specify an environment variable for the REACT_APP_HASURA_GRAPHQL_URL");
    if (!token)
        throw new Error("No authorization token found for the node-watcher");
    try {
        const client = new graphql_request_1.GraphQLClient(graphqlServerUrl, {
            headers: {
                "Authorization": "Bearer " + token
            },
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
            console.log('GraphQL response errors', err.response.errors);
            console.log('Response data if available', err.response.data);
            throw new Error(err);
        });
    }
    catch (e) {
        console.log('propAlreadyExist - graphql execurion error', e);
        throw new Error(e);
    }
});
exports.addPostAndProposal = ({ authorId, depositAmount, onchainId, methodName, methodArguments }) => __awaiter(void 0, void 0, void 0, function* () {
    const token = yield util_1.getToken();
    const proposalCategorieId = 3;
    const defaultProposalContent = "Post not yet edited by the proposal author";
    const defaultProposalTitle = "#" + onchainId + "on chain proposal";
    const affectedRows = 2;
    if (!graphqlServerUrl)
        throw new Error("Please specify an environment variable for the REACT_APP_SERVER_URL");
    if (!token)
        throw new Error("No authorization token found for the node-watcher");
    try {
        const client = new graphql_request_1.GraphQLClient(graphqlServerUrl, {
            headers: {
                "Authorization": "Bearer " + token
            },
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
            "authorId": authorId,
            "categoryId": proposalCategorieId,
            "content": defaultProposalContent,
            "title": defaultProposalTitle,
            "deposit": depositAmount,
            "methodArguments": methodArguments,
            "methodName": methodName,
            "onchainId": onchainId
        };
        return client.request(addPostAndProposalMutation, proposalAndPostVariables)
            .then(data => data["insert_proposals"] && data["insert_proposals"]["affected_rows"] && data["insert_proposals"]["affected_rows"] === affectedRows)
            .catch(err => {
            console.log('GraphQL response errors', err.response.errors);
            console.log('Response data if available', err.response.data);
            throw new Error(err);
        });
    }
    catch (e) {
        console.log('propAlreadyExist - graphql execurion error', e);
        throw new Error(e);
    }
});
