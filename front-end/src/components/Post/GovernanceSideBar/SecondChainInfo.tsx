// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useContext, useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';
import { formatBalance } from '@polkadot/util';

import { chainProperties } from '../../../global/networkConstants';
import { ApiContext } from '../../../context/ApiContext';
import getNetwork from '../../../util/getNetwork';

interface Props {
	className?: string
	proposalId: number
}

const SecondChainInfo = ({ className, proposalId }:  Props) => {
	const [seconds, setSeconds] = useState(0);
	const [deposit, setDeposit] = useState('');
	const { api, apiReady } = useContext(ApiContext);
	const currentNetwork = getNetwork();

	useEffect(() => {
		async function getSeconds() {
			if (!api) {
				console.error('polkadot/api not set');
				return;
			}

			if (!apiReady) {
				console.error('api not ready');
				return;
			}

			const proposals = await api.derive.democracy.proposals();
			proposals.forEach((proposal) => {
				if (proposal.index.toNumber() === proposalId) {
					setSeconds(proposal.seconds.length);
					setDeposit(formatBalance(proposal.balance));
				}
			});
		}

		getSeconds().catch(console.error);
	}, [api, apiReady, proposalId]);

	return (
		<Grid className={className} columns={3} divided>
			<Grid.Row>
				<Grid.Column>
					<h6>Deposit amount</h6>
					<div>{deposit}</div>
				</Grid.Column>
				<Grid.Column>
					<h6>Seconded by</h6>
					{seconds ? <div>{seconds} Addresses</div> : null}
				</Grid.Column>
				<Grid.Column>
					<h6>Locked {chainProperties[currentNetwork].tokenSymbol}</h6>
					<div>{seconds * parseInt(deposit.split(' ')[0])}</div>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default styled(SecondChainInfo)`
	margin-bottom: 1rem;
`;
