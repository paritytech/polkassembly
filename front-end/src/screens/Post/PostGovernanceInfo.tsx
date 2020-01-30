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
		onchain_proposal: onchainProposal,
		onchain_referendum: onChainReferendum,
		proposer_address: proposerAddress
	} = onchainLink;
	const preimage = isReferendum ? onChainReferendum?.preimage : onchainProposal?.preimage;
	const { depositAmount, metaDescription, method, preimageArguments } = preimage || {};

	return (
		<div className={className}>
			{proposerAddress &&
				<>
					Proposer: {proposerAddress} <br/>
				</>
			}
			{depositAmount && method && preimageArguments && metaDescription &&
			<>
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
			</>}
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