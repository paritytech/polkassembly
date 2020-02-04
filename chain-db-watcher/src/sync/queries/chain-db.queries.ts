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

// retrurns
// "data": {
//     "referendums": [
//       {
//         "preimageHash": "0xbefe734153bba814dfa1ba2ee4ab93c4c28e547ea04c81633e4a03441cf54389",
//         "id": 76,
//         "referendumId": 0,
//         "referendumStatus": [
//           {
//             "id": "ck66m17md00q20744k38o9euj",
//             "status": "Started",
//             "blockNumber": {
//               "id": "ck66m17kj00ps0744i2iw660h",
//               "number": 60
//             }
//           }
//         ]
//       },
//       ...

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
