import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';

import AddressComponent from '../../../ui-components/Address';
import { OnchainLinkTreasuryProposalFragment } from '../../../generated/graphql';
import { chainProperties } from '../../../global/networkConstants';
import getNetwork from '../../../util/getNetwork';

interface Props{
	className?: string
	onchainLink: OnchainLinkTreasuryProposalFragment
}

const currentNetwork = getNetwork();

const PostTreasuryInfo = ({ className, onchainLink }: Props) => {
	if (!onchainLink) return null;

	const {
		onchain_treasury_spend_proposal: onchainTreasuryProposal,
		proposer_address: proposerAddress
	} = onchainLink;
	const beneficiary = onchainTreasuryProposal?.[0]?.beneficiary;
	const value = onchainTreasuryProposal?.[0]?.value;
	const bond = onchainTreasuryProposal?.[0]?.bond;

	return (
		<div className={className}>
			<h4>On-Chain Info</h4>
			<Grid>
				<Grid.Column mobile={16} tablet={8} computer={8}>
					<div className='info_group'>
						<h6>Proposer</h6>
						<AddressComponent className='' address={proposerAddress} accountName={'Proposer Address'} />
					</div>
				</Grid.Column>
				{bond && currentNetwork &&
				<Grid.Column mobile={16} tablet={8} computer={8}>
					<div className='info_group'>
						<h6>Bond</h6>
						{parseInt(bond) / Math.pow(10, chainProperties[currentNetwork].tokenDecimals) + ' ' + chainProperties[currentNetwork].tokenSymbol}
					</div>
				</Grid.Column>}
				{beneficiary &&
				<Grid.Column mobile={16} tablet={8} computer={8}>
					<div className='info_group'>
						<h6>Beneficiary</h6>
						<AddressComponent className='' address={beneficiary} accountName={'Beneficiary Address'} />
					</div>
				</Grid.Column>}
				{value && currentNetwork &&
				<Grid.Column mobile={16} tablet={8} computer={8}>
					<div className='info_group'>
						<h6>Value</h6>
						{parseInt(value) / Math.pow(10, chainProperties[currentNetwork].tokenDecimals) + ' ' + chainProperties[currentNetwork].tokenSymbol}
					</div>
				</Grid.Column>}
			</Grid>
		</div>
	);
};

export default styled(PostTreasuryInfo)`
	background-color: white;
	padding: 2rem 3rem 2rem 3rem;
	border-style: solid;
	border-width: 5px;
	border-color: grey_light;
	font-size: sm;
	overflow-wrap: break-word;
	margin-bottom: 1rem;
	font-family: font_mono;

	h6 {
		font-family: font_mono;
		font-size: sm;
	}

	h4 {
		font-size: lg;
		font-family: font_mono;
		margin-bottom: 2rem;
	}

	@media only screen and (max-width: 576px) {
		padding: 2rem;
	}
`;
