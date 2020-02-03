export const getDiscussionProposalNumberQuery = `
        query getDiscussionProposalNumberQuery {
            onchain_links_aggregate(where: {onchain_proposal_id: {_is_null: false}}) {
                aggregate {
                    count(columns: id)
                }
            }
        }
`;

// {
//     "data": {
//       "onchain_links_aggregate": {
//         "aggregate": {
//           "count": 1
//         }
//       }
//     }
//   }

export const getDiscussionReferendumNumberQuery = `
        query getDiscussionReferendumNumberQuery {
            onchain_links_aggregate(where: {onchain_referendum_id: {_is_null: false}}) {
                aggregate {
                    count(columns: id)
                }
            }
        }
`;

// {
//     "data": {
//       "onchain_links_aggregate": {
//         "aggregate": {
//           "count": 1
//         }
//       }
//     }
//   }

// {
//     "data": {
//       "onchain_links_aggregate": {
//         "aggregate": {
//           "count": 1
//         }
//       }
//     }
//   }

export const getOnchainReferendumNumberQuery = `
    query getReferendums {
        referendums {
            id
        }
    }
`;

// {
//     "data": {
//       "referendums": [
//         {
//           "id": 75
//         }
//       ]
//     }
//   }

export const getOnchainProposalNumberQuery = `
    query getReferendums {
        proposals {
            id
        }
    }
`;

// {
//     "data": {
//       "proposals": []
//     }
//   }
