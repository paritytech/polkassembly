import gql from 'graphql-tag';

// get the referenda with their block creation number
export const getOnchainReferenda = gql`
    query getOnchainReferenda($startBlock: Int!) {
        referendums (
			where: {
                referendumStatus_some: {
                    AND: [
                        { status: "Started" }
                        { blockNumber: { number_gte: $startBlock } }
                    ]
                }
			}
		){
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
    query getOnchainProposals($startBlock: Int!) {
        proposals (
			where: {
                proposalStatus_some: {
                    AND: [
                        { status: "Proposed" }
                        { blockNumber: { number_gte: $startBlock } }
                    ]
                }
			}
		){
            ...onchainProposal
        }
    }
    fragment onchainProposal on Proposal {
        author
        id
        proposalId
    }
`;

export const getOnchainMotions = gql`
    query getOnchainMotions($startBlock: Int!) {
        motions (
			where: {
                motionStatus_some: {
                    AND: [
                        { status: "Proposed" }
                        { blockNumber: { number_gte: $startBlock } }
                    ]
                }
			}
		){
            ...onchainMotion
        }
    }
    fragment onchainMotion on Motion {
        author
        id
        motionProposalId
        section
        motionProposalArguments{
            name
            value
        }
    }
`;

export const getOnchainTreasuryProposals = gql`
    query getOnchainTreasuryProposals($startBlock: Int!) {
        treasurySpendProposals (
			where: {
                treasuryStatus_some: {
                    AND: [
                        { status: "Proposed" }
                        { blockNumber: { number_gte: $startBlock } }
                    ]
                }
			}
		){
            ...onchainTreasuryProposal
        }
    }
    fragment onchainTreasuryProposal on TreasurySpendProposal {
        proposer
        id
        treasuryProposalId
    }
`;
