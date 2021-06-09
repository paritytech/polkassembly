// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import * as React from 'react';
import { Grid } from 'semantic-ui-react';

import { OnchainLinkProposalFragment } from '../../../generated/graphql';
import { chainProperties } from '../../../global/networkConstants';
import AddressComponent from '../../../ui-components/Address';
import OnchainInfoWrapper from '../../../ui-components/OnchainInfoWrapper';
import getNetwork from '../../../util/getNetwork';
import ExternalLinks from '../../ExternalLinks';

interface Props{
	onchainLink: OnchainLinkProposalFragment
}

const currentNetwork = getNetwork();

const PostProposalInfo = ({ onchainLink }: Props) => {
	if (!onchainLink) return null;

	const {
		onchain_proposal: onchainProposal,
		proposer_address: proposerAddress
	} = onchainLink;
	const preimage = onchainProposal?.[0]?.preimage;
	const depositAmount = onchainProposal?.[0]?.depositAmount;

	const { metaDescription, method, preimageArguments } = preimage || {};

	return (
		<OnchainInfoWrapper>
			<h4>On-chain info</h4>
			<Grid>
				<Grid.Column mobile={16} tablet={8} computer={8}>
					<h6>Proposer</h6>
					<AddressComponent address={proposerAddress}/>
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
									const isAccountArgument = element.name === 'account';
									return <div className={isAccountArgument ? '' : 'methodArguments'} key={index}>
										{isAccountArgument
											? <AddressComponent address={element.value} key={index}/>
											: <span key={index}>{element.name}: {element.value}</span>
										}
									</div>;
								})}
							</>
							: null}
					</Grid.Column>
				</Grid.Row>}
				<Grid.Row>
					<Grid.Column mobile={16} tablet={16} computer={16}>
						{ metaDescription &&
						<>
							<h6>Description</h6>
							{metaDescription}
						</>}
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column mobile={16} tablet={16} computer={16}>
						<ExternalLinks isProposal={true} onchainId={onchainLink.onchain_proposal_id} />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</OnchainInfoWrapper>
	);
};

export default PostProposalInfo;
