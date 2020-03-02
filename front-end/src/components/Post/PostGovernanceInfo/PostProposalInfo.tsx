import * as React from 'react';
import { Grid } from 'semantic-ui-react';

import AddressComponent from '../../../ui-components/Address';
import OnchainInfoStyle from '../../../ui-components/OnchainInfoStyle';
import { OnchainLinkProposalFragment } from '../../../generated/graphql';
import { chainProperties } from '../../../global/networkConstants';
import getNetwork from '../../../util/getNetwork';

interface Props{
	className?: string
	onchainLink: OnchainLinkProposalFragment
}

const currentNetwork = getNetwork();

const PostProposalInfo = ({ className, onchainLink }: Props) => {
	if (!onchainLink) return null;

	const {
		onchain_proposal: onchainProposal,
		proposer_address: proposerAddress
	} = onchainLink;
	const preimage = onchainProposal?.[0]?.preimage;
	const depositAmount = onchainProposal?.[0]?.depositAmount;

	const { metaDescription, method, preimageArguments } = preimage || {};

	return (
		<OnchainInfoStyle className={className}>
			<h4>On-Chain Info</h4>
			<Grid>
				<Grid.Column mobile={16} tablet={8} computer={8}>
					<h6>Proposer</h6>
					<AddressComponent className='' address={proposerAddress} accountName={'Proposer Address'} />
				</Grid.Column>
				{depositAmount && currentNetwork &&
				<Grid.Column mobile={16} tablet={8} computer={8}>
					<h6>Deposit</h6>
					{parseInt(depositAmount) / Math.pow(10, chainProperties[currentNetwork].tokenDecimals) + ' ' + chainProperties[currentNetwork].tokenSymbol}
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
				<Grid.Column mobile={16} tablet={16} computer={16}>
					{ metaDescription &&
					<>
						<h6>Description</h6>
						{metaDescription}
					</>}
				</Grid.Column>
			</Grid>
		</OnchainInfoStyle>
	);
};

export default PostProposalInfo;