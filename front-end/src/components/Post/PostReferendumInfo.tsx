import * as React from 'react';
import styled from '@xstyled/styled-components';

import { OnchainLinkReferendumFragment } from '../../generated/graphql';
import { chainProperties } from '../../global/chainProperties';

interface Props{
	className?: string
	onchainLink: OnchainLinkReferendumFragment
}

const PostReferendumInfo = ({ className, onchainLink }: Props) => {
	if (!onchainLink) return null;

	const {
		onchain_referendum: onchainReferendum,
		proposer_address: proposerAddress
	} = onchainLink;

	const preimage = onchainReferendum?.[0]?.preimage;
	const { depositAmount, metaDescription, method, preimageArguments } = preimage || {};

	return (
		<div className={className}>
			<h4>On-Chain Info</h4>
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

export default styled(PostReferendumInfo)`
	background-color: white;
	padding: 2rem 3rem 2rem 3rem;
	border-style: solid;
	border-width: 1px;
	border-color: grey_light;
	font-size: md;
	overflow-wrap: break-word;
	margin-bottom: 1rem;

	h4 {
		font-size: lg;
		font-family: 'Roboto Mono';
		margin-bottom: 2rem;
	}

	.info_group {
		margin-bottom: 1.6rem;
	}

	.methodArguments {
		display: inline-block;
	}
`;