import React from 'react';
import { Grid } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';

import AddressComponent from '../../../ui-components/Address';

interface Props {
	children?: React.ReactNode
	className?: string
	delay?: number
	end?: number
	deposit?: string
	description?: string
	memberCount?: number
	method?: string
	motionProposalHash?: string
	preimageArguments?: [] /* (Pick<PreimageArgument, 'id' | 'name' | 'value'>)[] */ /* )[] | null | undefined */ /* PreimageArgument[] */
	proposer: string
	voteThreshold?: string
}

const OnChainInfo = ({ children, className, delay, deposit, description, end, memberCount, method, motionProposalHash, proposer, voteThreshold }: Props) => {

	return (
		<div className={className}>
			<h4>On-Chain Info</h4>
			<Grid>
				{proposer &&
					<Grid.Column mobile={16} tablet={8} computer={8}>
						<h6>Proposer</h6>
						<AddressComponent className='' address={proposer} accountName={'Proposer Address'}/>
					</Grid.Column>}
				{deposit &&
					<Grid.Column mobile={16} tablet={8} computer={8}>
						<h6>Deposit</h6>
						{deposit}
					</Grid.Column>}
				{delay &&
					<Grid.Column mobile={16} tablet={8} computer={8}>
						<div className='info_group'>
							<h6>Delay</h6>
							{delay}
						</div>
					</Grid.Column>}
				{end &&
					<Grid.Column mobile={16} tablet={8} computer={8}>
						<div className='info_group'>
							<h6>End</h6>
							{end}
						</div>
					</Grid.Column>}
				{voteThreshold &&
					<Grid.Column mobile={16} tablet={8} computer={8}>
						<div className='info_group'>
							<h6>voteThreshold</h6>
							{voteThreshold}
						</div>
					</Grid.Column>}
				{memberCount &&
					<Grid.Column mobile={16} tablet={8} computer={8}>
						<div className='info_group'>
							<h6>Member Count</h6>
							{memberCount}
						</div>
					</Grid.Column>}
				{motionProposalHash &&
					<Grid.Column mobile={16} tablet={16} computer={16}>
						<div className='info_group'>
							<h6>Motion hash</h6>
							{motionProposalHash}
						</div>
					</Grid.Column>
				}
				{method &&
					<Grid.Column mobile={16} tablet={8} computer={8}>
						<h6>Method</h6>
						{method}
					</Grid.Column>
				}
				<Grid.Column mobile={16} tablet={8} computer={8}>
					{children}
					{/* 					{preimageArguments && preimageArguments.length
						?
						<>
							<h6>Arguments</h6>
							{preimageArguments.map((element:any, index:any) => {
								return <div className={'methodArguments'} key={index}>
									<span key={index}>{element.name}: {element.value}</span>
								</div>;
							})}
						</>
						: null
					} */}
				</Grid.Column>
				{description &&
					<Grid.Column mobile={16} tablet={16} computer={16}>
						<h6>Description</h6>
						{description}
					</Grid.Column>
				}
			</Grid>
		</div>
	);
};

export default styled(OnChainInfo)`
	background-color: white;
	padding: 2rem 3rem 2rem 3rem;
	border-style: solid;
	border-width: 5px;
	border-color: grey_light;
	font-size: sm;
	overflow-wrap: break-word;
	margin-bottom: 1rem;
	font-family: font_mono;

	h4 {
		font-size: lg;
		font-family: font_mono;
		margin-bottom: 2rem;
	}

	h6 {
		font-family: font_mono;
		font-size: sm;
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