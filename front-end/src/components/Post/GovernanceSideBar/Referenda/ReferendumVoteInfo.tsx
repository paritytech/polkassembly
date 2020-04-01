// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import formatBalance from '@polkadot/util/format/formatBalance';
import styled from '@xstyled/styled-components';
import BN from 'bn.js';
import React, { useContext, useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react';

import { ApiContext } from 'src/context/ApiContext';
import { VoteThreshold } from 'src/types';
import VoteProgress from 'src/ui-components/VoteProgress';
import { getPassingThreshold } from 'src/util/getPassingThreshold';

interface Props {
	className?: string
	referendumId: number
	threshold?: string
}

const ReferendumVoteInfo = ({ className, referendumId, threshold }: Props) => {
	const ZERO = new BN(0);
	const { api, apiReady } = useContext(ApiContext);
	const [totalVotes, setTotalVotes] = useState(new BN(3000000000000));
	const [electorate, setElectorate] = useState(new BN(200000000000000));
	const [passingThreshold, setPassingThreshold] = useState(ZERO);
	const [ayeVotes, setAyeVotes] = useState(new BN(2000000000000));
	const [nayVotes, setNayVotes] = useState(new BN(100000000000));

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

		api.query.democracy.referendumInfoOf(referendumId, (info) => {
			const _info = info.unwrapOr(null);

			if (_info?.isOngoing){
				setAyeVotes(_info?.asOngoing.tally.ayes);
				setNayVotes(_info?.asOngoing.tally.nays);
				setTotalVotes(_info?.asOngoing.tally.turnout);
			}
		})
			.then( unsub => {unsubscribe = unsub;})
			.catch(console.error);

		return () => unsubscribe && unsubscribe();
	}, [api, apiReady, referendumId]);

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

		api.query.balances.totalIssuance((result) => {
			setElectorate(result);
		})
			.then( unsub => {unsubscribe = unsub;})
			.catch(console.error);

		return () => unsubscribe && unsubscribe();
	},[api, apiReady]);

	useEffect(() => {
		const x = getPassingThreshold(nayVotes, electorate);
		// const x = getPassingThreshold(new BN(450), new BN(1500));
		console.log('x',x.toString());
		setPassingThreshold(x);
	}, [electorate, nayVotes]);

	return (
		<Grid className={className} columns={3} divided>
			<VoteProgress
				ayeVotes={ayeVotes}
				passingThreshold={passingThreshold}
				nayVotes={nayVotes}
				totalVotes={totalVotes}
			/>
			<Grid.Row>
				<Grid.Column>
					<h6>Total Votes</h6>
					<div>{formatBalance(totalVotes, { withSi: false, withUnit: true })}</div>
				</Grid.Column>
				<Grid.Column width={5}>
					<h6>Aye</h6>
					<div>{formatBalance(ayeVotes, { withSi: false, withUnit: true })}</div>
				</Grid.Column>
				<Grid.Column width={5}>
					<h6>Nay</h6>
					<div>{formatBalance(nayVotes, { withSi: false, withUnit: true })}</div>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default styled(ReferendumVoteInfo)`
	margin-bottom: 1rem;
`;
