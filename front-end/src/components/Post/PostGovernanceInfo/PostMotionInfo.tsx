import * as React from 'react';
import { Grid } from 'semantic-ui-react';

import AddressComponent from '../../../ui-components/Address';
import OnchainInfoStyle from '../../../ui-components/OnchainInfoStyle';
import { OnchainLinkMotionFragment } from '../../../generated/graphql';

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
		<OnchainInfoStyle className={className}>
			<h4>On-Chain Info</h4>
			<Grid>
				<Grid.Column mobile={16} tablet={8} computer={8}>
					<h6>Proposer</h6>
					<AddressComponent className='' address={proposerAddress} accountName={'Proposer Address'}/>
				</Grid.Column>
				<Grid.Column mobile={16} tablet={8} computer={8}>
					<h6>Member Count</h6>
					{memberCount}
				</Grid.Column>
				<Grid.Column mobile={16} tablet={16} computer={16}>
					<h6>Motion hash</h6>
					{motionProposalHash}
				</Grid.Column>
				<Grid.Row>
					<Grid.Column mobile={16} tablet={8} computer={8}>
						<h6>Motion&apos;s Method</h6>
						{method}
					</Grid.Column>
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
								<h6>Method</h6>
								{preimageMethod}
							</Grid.Column>
							<Grid.Column mobile={16} tablet={8} computer={8}>
								{preimageArguments && preimageArguments.length
									? <>
										<h6>Arguments</h6>
										{preimageArguments.map((element, index) => {
											return <div className={'methodArguments'} key={index}>
												<span key={index}>{element.name}: {element.value}</span>
											</div>;
										})}
									</>
									: null}
							</Grid.Column>
						</Grid.Row>
					}
					<Grid.Column mobile={16} tablet={16} computer={16}>
						{ metaDescription &&
							<>
								<h6>Description</h6>
								{metaDescription}
							</>
						}
					</Grid.Column>
				</Grid.Row>}
			</Grid>
		</OnchainInfoStyle>
	);
};

export default PostMotionInfo;