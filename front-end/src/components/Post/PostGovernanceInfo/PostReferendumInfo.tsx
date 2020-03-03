import * as React from 'react';
import { Grid } from 'semantic-ui-react';

import AddressComponent from '../../../ui-components/Address';
import OnchainInfoWrapper from '../../../ui-components/OnchainInfoWrapper';
import { OnchainLinkReferendumFragment } from '../../../generated/graphql';

interface Props{
	onchainLink: OnchainLinkReferendumFragment
}

const PostReferendumInfo = ({ onchainLink }: Props) => {
	if (!onchainLink) return null;

	const {
		onchain_referendum: onchainReferendum,
		proposer_address: proposerAddress
	} = onchainLink;

	if ( !onchainReferendum?.[0] ){
		return null;
	}

	const { delay, end, preimage, voteThreshold } = onchainReferendum?.[0];
	const { metaDescription, method, preimageArguments } = preimage || {};

	return (
		<OnchainInfoWrapper>
			<h4>On-Chain Info</h4>
			<Grid>
				<Grid.Column mobile={16} tablet={8} computer={8}>
					<h6>Proposer</h6>
					<AddressComponent className='' address={proposerAddress} accountName={'Proposer Address'}/>
				</Grid.Column>
				{delay &&
					<Grid.Column mobile={16} tablet={8} computer={8}>
						<h6>Delay</h6>
						{delay}
					</Grid.Column>}
				{end &&
					<Grid.Column mobile={16} tablet={8} computer={8}>
						<h6>End</h6>
						{end}
					</Grid.Column>}
				{voteThreshold &&
					<Grid.Column mobile={16} tablet={8} computer={8}>
						<h6>voteThreshold</h6>
						{voteThreshold}
					</Grid.Column>}
				{method &&
				<Grid.Row>
					<Grid.Column mobile={16} tablet={8} computer={8}>
						<h6>Method</h6>
						{method}
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
				</Grid.Row>}
				{metaDescription &&
				<Grid.Column mobile={16} tablet={16} computer={16}>
					<h6>Description</h6>
					{metaDescription}
				</Grid.Column>}
			</Grid>
		</OnchainInfoWrapper>
	);
};

export default PostReferendumInfo;