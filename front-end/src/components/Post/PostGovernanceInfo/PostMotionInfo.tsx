import * as React from 'react';
import { Grid } from 'semantic-ui-react';
/* import styled from '@xstyled/styled-components'; */

import { OnchainLinkMotionFragment } from '../../../generated/graphql';
import PostOnChainInfo from './PostOnChainInfo';

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
	const { metaDescription, method: preimageMethod, preimageArguments } = preimage || {};

	return (
		<PostOnChainInfo
			className={className}
			description={metaDescription}
			memberCount={memberCount}
			method={method}
			motionProposalHash={motionProposalHash}
			proposer={proposerAddress}
		>
			<>
				<Grid.Row>
					<Grid.Column mobile={16} tablet={8} computer={8}>
						{motionProposalArguments && motionProposalArguments.length
							? <>
								<h6>Arguments</h6>
								{motionProposalArguments.map((element, index) => {
									return <div className={'methodArguments'} key={index}>
										<span key={index}>{element.name}: {element.value}</span>
									</div>;
								})}
							</>
							: null}
					</Grid.Column>
				</Grid.Row>
				{preimage && <Grid.Row className='preimage'>
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
				</Grid.Row>}
			</>
		</PostOnChainInfo>
	);
};

export default PostMotionInfo;
