// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React, { useContext, useEffect,useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { ApiContext } from 'src/context/ApiContext';
import { chainProperties } from 'src/global/networkConstants';
import { LoadingStatusType } from 'src/types';
import Card from 'src/ui-components/Card';
import Loader from 'src/ui-components/Loader';
import formatBnBalance from 'src/util/formatBnBalance';
import getNetwork from 'src/util/getNetwork';

interface Props {
	className?: string
	proposalId: number
}

const ProposalVoteInfo = ({ className, proposalId }:  Props) => {
	const [seconds, setSeconds] = useState(0);
	const [deposit, setDeposit] = useState('');
	const { api, apiReady } = useContext(ApiContext);
	const currentNetwork = getNetwork();
	const [loadingStatus, setLoadingStatus] = useState<LoadingStatusType>({ isLoading: true, message:'Loading proposal info' });

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
				if (proposal.index.toNumber() === proposalId && proposal.balance) {
					setSeconds(proposal.seconds.length);
					setDeposit(formatBnBalance(proposal.balance, { numberAfterComma: 2, withUnit: true }));
				}
			});
			setLoadingStatus({ isLoading: false, message: '' });
		})
			.then(unsub => {unsubscribe = unsub;})
			.catch(e => console.error(e));

		return () => unsubscribe && unsubscribe();

	}, [api, apiReady, proposalId]);

	return (
		<Card className={loadingStatus.isLoading ? `LoaderWrapper ${className}` : className}>
			{loadingStatus.isLoading
				?
				<Loader text={loadingStatus.message} timeout={30000} timeoutText={'Api is unresponsive'}/>
				:
				<>
					<h3>Overview</h3>
					<Grid columns={3} divided>
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
				</>
			}
		</Card>
	);
};

export default styled(ProposalVoteInfo)`
	margin-bottom: 1rem;

	.LoaderWrapper {
		height: 15rem;
		position: absolute;
		width: 100%;
	}
`;
