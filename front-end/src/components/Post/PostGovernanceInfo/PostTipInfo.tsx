// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import * as React from 'react';
import { Grid } from 'semantic-ui-react';

import { OnchainLinkTipFragment } from '../../../generated/graphql';
import { chainProperties } from '../../../global/networkConstants';
import AddressComponent from '../../../ui-components/Address';
import OnchainInfoWrapper from '../../../ui-components/OnchainInfoWrapper';
import getNetwork from '../../../util/getNetwork';

interface Props{
	onchainLink: OnchainLinkTipFragment
}

const currentNetwork = getNetwork();

const PostTipInfo = ({ onchainLink }: Props) => {
	if (!onchainLink) return null;

	const {
		onchain_tip: onchainTipProposal,
		proposer_address: proposerAddress
	} = onchainLink;

	const hash = onchainTipProposal?.[0]?.hash;
	const reason = onchainTipProposal?.[0]?.reason;
	const who = onchainTipProposal?.[0]?.who;
	const finder = onchainTipProposal?.[0]?.finder;
	const finderFee = onchainTipProposal?.[0]?.finderFee;
	const closes = onchainTipProposal?.[0]?.closes;

	return (
		<OnchainInfoWrapper>
			<h4>On-chain info</h4>
			<Grid>
				<Grid.Column mobile={16} tablet={8} computer={8}>
					<h6>Proposer</h6>
					<AddressComponent address={proposerAddress}/>
				</Grid.Column>
				{hash &&
				<Grid.Column mobile={16} tablet={8} computer={8}>
					<h6>Hash</h6>
					{hash}
				</Grid.Column>}
				{reason &&
				<Grid.Column mobile={16} tablet={8} computer={8}>
					<h6>Reason</h6>
					{reason}
				</Grid.Column>}
				{who &&
				<Grid.Column mobile={16} tablet={8} computer={8}>
					<h6>Receiver</h6>
					<AddressComponent address={who}/>
				</Grid.Column>}
				{finder &&
				<Grid.Column mobile={16} tablet={8} computer={8}>
					<h6>Finder</h6>
					<AddressComponent address={finder}/>
				</Grid.Column>}
				{finderFee && currentNetwork &&
				<Grid.Column mobile={16} tablet={8} computer={8}>
					<h6>Finder Fee</h6>
					{parseInt(finderFee) / Math.pow(10, chainProperties[currentNetwork].tokenDecimals) + ' ' + chainProperties[currentNetwork].tokenSymbol}
				</Grid.Column>}
				{closes &&
				<Grid.Column mobile={16} tablet={8} computer={8}>
					<h6>Time to block</h6>
					{closes}
				</Grid.Column>}
			</Grid>
		</OnchainInfoWrapper>
	);
};

export default PostTipInfo;
