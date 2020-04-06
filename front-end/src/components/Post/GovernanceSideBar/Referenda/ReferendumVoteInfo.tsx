// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import formatBalance from '@polkadot/util/format/formatBalance';
import styled from '@xstyled/styled-components';
import BN from 'bn.js';
import React, { useContext, useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react';

import { ApiContext } from '../../../../context/ApiContext';

interface Props {
	className?: string
	referendumId: number
}

const ReferendumVoteInfo = ({ className, referendumId }: Props) => {
	const ZERO = new BN(0);
	const { api, apiReady } = useContext(ApiContext);
	const [totalVotes, setTotalVotes] = useState<BN>(ZERO);
	const [yesVotes, setYesVotes] = useState<BN>(ZERO);
	const [noVotes, setNoVotes] = useState<BN>(ZERO);

	useEffect(() => {
		async function getVotes() {
			if (!api) {
				console.error('polkadot/api not set');
				return;
			}

			if (!apiReady) {
				console.error('api not ready');
				return;
			}

			let unsubscribe: () => void;

			api.query.democracy.referendumInfoOf(referendumId, (info) => {
				const _info = info.unwrapOr(null);

				if (_info?.isOngoing){
					setYesVotes(_info?.asOngoing.tally.ayes);
					setNoVotes(_info?.asOngoing.tally.ayes);
					setTotalVotes(_info?.asOngoing.tally.turnout);
				}
			})
				.then( unsub => {unsubscribe = unsub;})
				.catch(console.error);

			return () => unsubscribe && unsubscribe();
		}

		getVotes().catch(console.error);
	}, [api, apiReady, referendumId]);

	return (
		<Grid className={className} columns={3} divided>
			<Grid.Row>
				<Grid.Column>
					<h6>Total Votes</h6>
					<div>{formatBalance(totalVotes, { withSi: false, withUnit: true })}</div>
				</Grid.Column>
				<Grid.Column width={5}>
					<h6>Aye</h6>
					<div>{formatBalance(yesVotes, { withSi: false, withUnit: true })}</div>
				</Grid.Column>
				<Grid.Column width={5}>
					<h6>Nay</h6>
					<div>{formatBalance(noVotes, { withSi: false, withUnit: true })}</div>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default styled(ReferendumVoteInfo)`
	margin-bottom: 1rem;
`;
