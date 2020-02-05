import * as React from 'react';
import styled from '@xstyled/styled-components';

import { OnchainLinkProposalFragment } from '../../generated/graphql';
import { chainProperties } from '../../global/chainProperties';

interface Props{
	className?: string
	onchainLink: OnchainLinkProposalFragment
}

const PostProposalInfo = ({ className, onchainLink }: Props) => {
	if (!onchainLink) return null;

	const {
		onchain_proposal: onchainProposal,
		proposer_address: proposerAddress
	} = onchainLink;
	const preimage = onchainProposal?.[0]?.preimage;
	const { depositAmount, metaDescription, method, preimageArguments } = preimage || {};

	return (
		<div className={className}>
			{proposerAddress &&
				<div className='info_group'>
					<h6>Proposer</h6>
					{proposerAddress}
				</div>
			}
			{depositAmount && method && preimageArguments && metaDescription &&
			<>
				<div className='info_group'>
					<h6>Deposit</h6>
					{parseInt(depositAmount) / Math.pow(10, chainProperties.kusama.tokenDecimals) + ' ' + chainProperties.kusama.tokenSymbol}
				</div>
				<div className='info_group'>
					<h6>Description</h6>
					{metaDescription}
				</div>
				<div className='info_group'>
					<h6>Method</h6>
					<code>{method}</code>
				</div>
				{preimageArguments && preimageArguments.length
					? <div className='info_group'>
						<h6>Arguments</h6>
						{preimageArguments.map((element, index) => {
							return <div className={'methodArguments'} key={index}>
								<code><span key={index}>{element.name}: {element.value}</span> </code>
							</div>;
						})}
					</div>
					: null}
			</>}
		</div>
	);
};

export default styled(PostProposalInfo)`
	border-top-width: 1px;
	border-top-style: solid;
	border-color: grey_light;
	margin-top: 2rem;
	padding-top: 2rem;
	font-size: md;
	overflow-wrap: break-word;

	.info_group {
		margin-bottom: 1.6rem;
	}

	code {
		padding: 0.4rem;
	}

	.methodArguments {
		display: block;
		margin-bottom: 0.4rem;
	}
	
`;