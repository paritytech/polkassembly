import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';

import AddressComponent from '../../components/Address';
import { OnchainLinkMotionFragment } from '../../generated/graphql';
import { chainProperties } from '../../global/chainProperties';

interface Props{
	className?: string
	onchainLink: OnchainLinkMotionFragment
}

const PostMotionInfo = ({ className, onchainLink }: Props) => {
	if (!onchainLink) return null;

	const {
		onchain_motion: onchainMotion,
		proposer_address: proposerAddress
	} = onchainLink;

	if (! onchainMotion?.[0]) {
		return null;
	}

	const { memberCount, method, motionProposalArguments, motionProposalHash, preimage } = onchainMotion[0];
	const { depositAmount, metaDescription, method: preimageMethod, preimageArguments } = preimage || {};

	return (
		<div className={className}>
			<h4>On-Chain Info</h4>
			<Grid>
				<Grid.Column mobile={16} tablet={8} computer={8}>
					<div className='info_group'>
						<h6>Proposer</h6>
						<AddressComponent className='' address={proposerAddress} accountName={'Proposer Address'}/>
					</div>
				</Grid.Column>
				<Grid.Column mobile={16} tablet={8} computer={8}>
					<div className='info_group'>
						<h6>Member Count</h6>
						{memberCount}
					</div>
				</Grid.Column>
				<Grid.Column mobile={16} tablet={16} computer={16}>
					<div className='info_group'>
						<h6>Motion hash</h6>
						{motionProposalHash}
					</div>
				</Grid.Column>
				<Grid.Row>
					<Grid.Column mobile={16} tablet={8} computer={8}>
						<div className='info_group'>
							<h6>Motion&apos;s Method</h6>
							{method}
						</div>
					</Grid.Column>
					<Grid.Column mobile={16} tablet={8} computer={8}>
						{motionProposalArguments && motionProposalArguments.length
							? <div className='info_group'>
								<h6>Arguments</h6>
								{motionProposalArguments.map((element, index) => {
									return <div className={'methodArguments'} key={index}>
										<span key={index}>{element.name}: {element.value}</span>
									</div>;
								})}
							</div>
							: null}
					</Grid.Column>
				</Grid.Row>
				{preimage && <Grid.Row className='preimage'>
					{depositAmount &&
						<Grid.Column mobile={16} tablet={8} computer={8}>
							<div className='info_group'>
								<h6>Deposit</h6>
								{parseInt(depositAmount) / Math.pow(10, chainProperties.kusama.tokenDecimals) + ' ' + chainProperties.kusama.tokenSymbol}
							</div>
						</Grid.Column>}
					{preimageMethod &&
						<Grid.Row>
							<Grid.Column mobile={16} tablet={8} computer={8}>
								<div className='info_group'>
									<h6>Method</h6>
									{preimageMethod}
								</div>
							</Grid.Column>
							<Grid.Column mobile={16} tablet={8} computer={8}>
								{preimageArguments && preimageArguments.length
									? <div className='info_group'>
										<h6>Arguments</h6>
										{preimageArguments.map((element, index) => {
											return <div className={'methodArguments'} key={index}>
												<span key={index}>{element.name}: {element.value}</span>
											</div>;
										})}
									</div>
									: null}
							</Grid.Column>
						</Grid.Row>
					}
					<Grid.Column mobile={16} tablet={16} computer={16}>
						{ metaDescription &&
							<div className='info_group'>
								<h6>Description</h6>
								{metaDescription}
							</div>
						}
					</Grid.Column>
				</Grid.Row>}
			</Grid>
		</div>
	);
};

export default styled(PostMotionInfo)`
	background-color: white;
	padding: 2rem 3rem 2rem 3rem;
	border-style: solid;
	border-width: 5px;
	border-color: grey_light;
	font-size: sm;
	overflow-wrap: break-word;
	margin-bottom: 1rem;
	font-family: 'Roboto Mono';

	h6 {
		font-family: 'Roboto Mono';
		font-size: sm;
	}

	h4 {
		font-size: lg;
		font-family: 'Roboto Mono';
		margin-bottom: 2rem;
	}

	.methodArguments {
		display: inline-block;
		overflow-x: auto;
		width: 100%;
		word-wrap: normal;
	}

	.preimage {
		background-color: grey_light;
	}

	@media only screen and (max-width: 576px) {
		padding: 2rem;
	}
`;
