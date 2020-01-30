import * as React from 'react';
import styled from '@xstyled/styled-components';
import { OnchainLinkFragment } from '../../generated/graphql';

interface Props{
	className?: string
	isReferendum: boolean
	onchainLink: OnchainLinkFragment
}

const GovernancePostInfo = ({ className, isReferendum, onchainLink }: Props) => {
	if (!onchainLink) return null;

	const {
		onchain_proposal_id: proposalId,
		onchain_referendum_id: referendumId,
		onchain_proposal: onChainProposal,
		proposer_address: proposerAddress } = onchainLink;
	const preimage = onChainProposal?.preimage;
	const { depositAmount, metaDescription, method, preimageArguments } = preimage || {};
	console.log('preimageArguments',preimageArguments);
	return (
		<div className={className}>
			{proposerAddress && <>Proposer: {proposerAddress} <br/></>}
			Deposit: {depositAmount} KSM<br/>
			Description: {metaDescription}<br/>
			Method: {method}<br/>
			{preimageArguments && preimageArguments.length
				? <>Arguments:
					<div className={'methodArguments'}>
						{preimageArguments.map((element, index) => {
							return <span key={index}>{element.name}: {element.value}</span>;
						})}
					</div>
				</>
				: null}
		</div>
	);
};

export default styled(GovernancePostInfo)`
	border-width: 1px;
	border-style: solid;
	border-color: grey_light;
	padding: 1rem;
	.methodArguments {
		span {
			padding-left: 1rem;
			border-left-color: grey;
			border-left-width: 3px;
			border-left-style: solid;
		}
	}
	
`;