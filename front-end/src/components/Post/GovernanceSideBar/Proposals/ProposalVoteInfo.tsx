// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import { chainProperties } from 'src/global/networkConstants';
import { LoadingStatusType } from 'src/types';
import Card from 'src/ui-components/Card';
import Loader from 'src/ui-components/Loader';
import getNetwork from 'src/util/getNetwork';

interface Props {
	className?: string
	deposit: string
	loadingStatus: LoadingStatusType
	seconds: number
}

const ProposalVoteInfo = ({ className, deposit, loadingStatus, seconds }:  Props) => {
	const currentNetwork = getNetwork();

	return (
		<Card className={loadingStatus.isLoading ? `LoaderWrapper ${className}` : className}>
			{loadingStatus.isLoading
				?
				<Loader text={loadingStatus.message} timeout={30000} timeoutText={'Api is unresponsive'}/>
				:
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
