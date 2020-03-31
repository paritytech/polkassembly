// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import formatBalance from '@polkadot/util/format/formatBalance';
import { bnSqrt } from '@polkadot/util';
import styled from '@xstyled/styled-components';
import BN from 'bn.js';
import React, { useContext, useEffect, useState } from 'react';
import { Grid } from 'semantic-ui-react';

import { ApiContext } from 'src/context/ApiContext';
import { VoteThreshold } from 'src/types';
import VoteProgress from 'src/ui-components/VoteProgress';

interface Props {
	className?: string
	referendumId: number
	threshold?: string
}

// export function getPercentages (n1: BN, d1: BN, n2: BN, d2: BN): boolean {
// 	// eslint-disable-next-line no-constant-condition
// 	while (true) {
// 		const q1 = n1.div(d1);
// 		const q2 = n2.div(d2);

// 		if (q1.lt(q2)) {
// 			return true;
// 		} else if (q2.lt(q1)) {
// 			return false;
// 		}

// 		const r1 = n1.mod(d1);
// 		const r2 = n2.mod(d2);

// 		if (r2.isZero()) {
// 			return false;
// 		} else if (r1.isZero()) {
// 			return true;
// 		}

// 		n1 = d2;
// 		n2 = d1;
// 		d1 = r2;
// 		d2 = r1;
// 	}
// }

function getQuotienAndRest(n1: BN, d1: BN): {q: BN, r: BN}{
	return {
		q: (n1.div(d1)),
		r: (n1.mod(d1))
	};
}
export function getPercentages (n1: BN, d1: BN): number {
	//  n1: 3, d1: 2
	// q1 = 1
	// r1 = 1

	// r1*10 / d1
	// q2 = 5
	//
	const TEN = new BN(10);
	const ZERO = new BN(0);
	const decimalNumer = 2;
	let result = ZERO;

	for (let i=0; i<decimalNumer; i++){
		const { q, r } = getQuotienAndRest(n1,d1);
		console.log(`getQuotienAndRest(n1:${n1.toString()},d1:${d1.toString()}): {q:${q.toString()},r:${r.toString()}}`);
		result = result.add(q.div(TEN.pow(new BN(i))));
		console.log(`result ${i}: +=${q.toString()}/(10**${i}) = ${result.toString()}`);
		n1 = r.mul(TEN);
	}

	const finalResult = result.div(TEN.pow(TEN)).toNumber();
	console.log(`${result.toString()}/(10**10)= ${finalResult}`);

	return finalResult;

}

const ReferendumVoteInfo = ({ className, referendumId, threshold }: Props) => {
	const ZERO = new BN(0);
	const { api, apiReady } = useContext(ApiContext);
	const [totalVotes, setTotalVotes] = useState<BN>(ZERO);
	const [isPassing, setIsPassing] = useState(false);
	const [sqrtElectorate, setSqrtElectorate] = useState<BN>(ZERO);
	const [ayePercentage, setAyePercentage] = useState(0);
	const [passingThreshold, setPassingThreshold] = useState(0);
	const [ayeVotes, setAyeVotes] = useState<BN>(ZERO);
	const [nayVotes, setNayVotes] = useState<BN>(ZERO);

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

		api.derive.democracy.sqrtElectorate( (result) => {
			setSqrtElectorate(result);
		})
			.then( unsub => {unsubscribe = unsub;})
			.catch(console.error);

		return () => unsubscribe && unsubscribe();
	},[api, apiReady]);

	useEffect(() => {
		const sqrtVoters = bnSqrt(totalVotes);
		console.log('sqrtVoters', sqrtVoters.toString());
		console.log('sqrtElectorate',sqrtElectorate.toString());
		// console.log('sqrtElectorate.isZero()',sqrtElectorate.isZero());
		// console.log('sqrtVoters.isZero()', sqrtVoters.isZero());

		if (sqrtVoters.isZero() || sqrtElectorate.isZero()){
			console.warn('sqrtVoters or sqrtElectorate not set yet...');
			return;
		}

		if (!threshold){
			console.warn('threshold not set yet...');
			return;
		}

		if (threshold === VoteThreshold.Simplemajority){
			setAyePercentage(getPercentages(ayeVotes, totalVotes));
			setPassingThreshold(50);
		} else if (threshold === VoteThreshold.Supermajorityapproval) {
			console.log('super majority');
			console.log('ayeVotes',ayeVotes.toString());
			const _ayePercentage = getPercentages(ayeVotes, sqrtElectorate);
			console.log('_ayePercentage',_ayePercentage);
			setAyePercentage(_ayePercentage);

			console.log('nayVotes',nayVotes.toString());
			const _passingPercentage = getPercentages(nayVotes, sqrtVoters);
			console.log('_passingPercentage', _passingPercentage);
			setPassingThreshold(_passingPercentage);
			// compareRationals(nayVotes, sqrtVoters, ayeVotes, sqrtElectorate)
		} else {
			setAyePercentage(getPercentages(ayeVotes, sqrtVoters));
			setPassingThreshold(getPercentages(nayVotes, sqrtElectorate));
			// compareRationals(nayVotes, sqrtElectorate, ayeVotes, sqrtVoters);
		}

		setIsPassing(ayePercentage > passingThreshold);
	}, [ayePercentage, ayeVotes, nayVotes, passingThreshold, sqrtElectorate, threshold, totalVotes]);

	return (
		<Grid className={className} columns={3} divided>
			<VoteProgress ayePercent={ayePercentage} passingThreshold={passingThreshold} isPassing={isPassing}/>
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
