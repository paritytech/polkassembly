import gql from 'graphql-tag';

export const getOnchainReferenda = gql`
    query getOnchainReferenda {
        referendums {
            ...onchainReferendum
        }
    }
    fragment onchainReferendum on Referendum {
        id
        referendumId
    }
`;

// {
//     "data": {
//       "referendums": [
//         {
//           "id": 75
//           "referendumId": 1
//         }
//       ]
//     }
//   }

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

// {
//     "data": {
//       "proposals": [
//         {
//           "id": 75,
//           "proposalId": 2
//         }
//       ]
//     }
//   }
