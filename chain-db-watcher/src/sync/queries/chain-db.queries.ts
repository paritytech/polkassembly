import gql from 'graphql-tag';

// get the referenda with their block creation number
export const getOnchainReferenda = gql`
    query getOnchainReferenda {
        referendums {
            ...onchainReferendum
        }
    }
    fragment onchainReferendum on Referendum {
        preimageHash
        id
        referendumId
        referendumStatus(where: {
            status: "Started"
        }) {
            id
            status
            blockNumber {
                id
                hash
            }
        }
    }
`;

export const getOnchainProposals = gql`
    query getOnchainProposals {
        proposals {
            ...onchainProposal
        }
    }
    fragment onchainProposal on Proposal {
        author
        id
        proposalId
    }
`;
