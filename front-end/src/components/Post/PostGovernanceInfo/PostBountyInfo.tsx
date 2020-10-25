// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import * as moment from 'moment';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import BlockCountdown from 'src/components/BlockCountdown';
import { tipStatus as tipStatuses } from 'src/global/statuses';

import { OnchainLinkBountyFragment } from '../../../generated/graphql';
import AddressComponent from '../../../ui-components/Address';
import OnchainInfoWrapper from '../../../ui-components/OnchainInfoWrapper';

interface Props {
	onchainLink: OnchainLinkBountyFragment
}

const PostBountyInfo = ({ onchainLink }: Props) => {
	if (!onchainLink) return null;

	const {
		onchain_bounty: onchainBountyProposal,
		proposer_address: proposerAddress
	} = onchainLink;

	const { closes, finder, hash, reason, who, bountyStatus  } = onchainBountyProposal?.[0] || { };
	const { blockNumber, status } = bountyStatus?.[0] || {};

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
				{closes &&
				<Grid.Column mobile={16} tablet={8} computer={8}>
					{status === tipStatuses.CLOSING
						?
						<>
							<h6>Closing</h6>
							<BlockCountdown endBlock={closes}/>
						</>
						:  status === tipStatuses.CLOSED
							?
							<>
								<h6>Closed</h6>
								<div>{moment.utc(blockNumber?.startDateTime).format('DD MMM YYYY, HH:mm:ss')}</div>
							</>
							: <span>#{closes}</span>
					}
				</Grid.Column>}
			</Grid>
		</OnchainInfoWrapper>
	);
};

export default PostBountyInfo;
