// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useContext, useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';
import { formatBalance } from '@polkadot/util';

import { chainProperties } from '../../../../global/networkConstants';
import { ApiContext } from '../../../../context/ApiContext';
import getNetwork from '../../../../util/getNetwork';

interface Props {
	className?: string
	proposalId: number
}

const ProposalVoteInfo = ({ className, proposalId }:  Props) => {
	const [seconds, setSeconds] = useState(0);
	const [deposit, setDeposit] = useState('');
	const { api, apiReady } = useContext(ApiContext);
	const currentNetwork = getNetwork();

	useEffect(() => {
		if (!api) {
			console.error('polkadot/api not set');
			return;
		}

		if (!apiReady) {
			console.error('api not ready');
			return;
		}

		let unsubscribe: () => void;

		api.derive.democracy.proposals( proposals => {
			proposals.forEach((proposal) => {
				if (proposal.index.toNumber() === proposalId) {
					setSeconds(proposal.seconds.length);
					setDeposit(formatBalance(proposal.balance, { withSi: false, withUnit: true }));
				}
			});
		})
			.then(unsub => {unsubscribe = unsub;})
			.catch(e => console.error(e));

		return () => unsubscribe && unsubscribe();

	}, [api, apiReady, proposalId]);

	return (
		<Grid className={className} columns={3} divided>
			<Grid.Row>
				<Grid.Column>
					<h6>Deposit</h6>
					<div>{deposit}</div>
				</Grid.Column>
				<Grid.Column>
					<h6>Seconded by</h6>
					{seconds ? <div>{seconds} addresses</div> : null}
				</Grid.Column>
				<Grid.Column>
					<h6>Locked {chainProperties[currentNetwork].tokenSymbol}</h6>
					<div>{seconds * parseInt(deposit.split(' ')[0]) || 0}</div>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default styled(ProposalVoteInfo)`
	margin-bottom: 1rem;
`;
