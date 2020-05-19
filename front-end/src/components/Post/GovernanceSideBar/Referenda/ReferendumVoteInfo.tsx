// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DeriveReferendumVote } from '@polkadot/api-derive/types';
import { ApiPromiseContext } from '@substrate/context';
import styled from '@xstyled/styled-components';
import BN from 'bn.js';
import React, { useContext, useEffect, useMemo,useState } from 'react';
import { Grid } from 'semantic-ui-react';
import { LoadingStatusType, VoteThreshold } from 'src/types';
import Card from 'src/ui-components/Card';
import Loader from 'src/ui-components/Loader';
import PassingInfo from 'src/ui-components/PassingInfo';
import VoteProgress from 'src/ui-components/VoteProgress';
import formatBnBalance from 'src/util/formatBnBalance';

import { getFailingThreshold, getPassingThreshold } from './utils';

interface Props {
	className?: string
	referendumId: number
	threshold?: VoteThreshold
}

const ZERO = new BN(0);

const ReferendumVoteInfo = ({ className, referendumId, threshold }: Props) => {
	const { api, isApiReady } = useContext(ApiPromiseContext);
	const [turnout, setTurnout] = useState(ZERO);
	const [totalIssuance, setTotalIssuance] = useState(ZERO);
	// const [passingThreshold, setPassingThreshold] = useState(ZERO);
	const [ayeVotes, setAyeVotes] = useState(ZERO);
	const [nayVotes, setNayVotes] = useState(ZERO);
	const [nayVotesWithoutConviction, setNayVotesWithoutConviction] = useState(ZERO);
	const [ayeVotesWithoutConviction, setAyeVotesWithoutConviction] = useState(ZERO);
	const [isPassing, setIsPassing] = useState<boolean | null>(null);
	const [loadingStatus, setLoadingStatus] = useState<LoadingStatusType>({ isLoading: true, message:'Loading votes' });

	const getThreshold = useMemo(
		() => {
			console.log('bim3');
			if (!threshold || isPassing === null) return ZERO;
			// if the referendum is passing, we're interresed in the failing threashold
			if (isPassing) {
				const res = getFailingThreshold({ ayes: ayeVotes, ayesWithoutConviction: ayeVotesWithoutConviction, threshold, totalIssuance });
				return res.isValid && res.faillingThreshold ? res.faillingThreshold : ZERO;
			} else {
				const res = getPassingThreshold({ nays: nayVotes, naysWithoutConviction: nayVotesWithoutConviction, threshold, totalIssuance });
				return res.isValid && res.passingThreshold ? res.passingThreshold : ZERO;
			}
		},
		[ayeVotes, ayeVotesWithoutConviction, isPassing, nayVotes, nayVotesWithoutConviction, threshold, totalIssuance]
	);

	console.log('boom');

	useEffect(() => {
		console.log('bim');
		if (!isApiReady) {
			return;
		}

		let unsubscribe: () => void;

		api.derive.democracy.referendums((ref) => {
			ref.forEach(re => {
				const totalAye: BN = re.allAye.reduce((acc: BN, curr: DeriveReferendumVote) => {
					return acc.add(new BN(curr.balance));
				}, ZERO);
				const totalNay: BN = re.allNay.reduce((acc: BN, curr: DeriveReferendumVote) => {
					return acc.add(new BN(curr.balance));
				}, ZERO);

				console.log('totalAye', totalAye.toString());
				console.log('totalNay', totalNay.toString());
				setNayVotesWithoutConviction(totalNay);
				setAyeVotesWithoutConviction(totalAye);
				setIsPassing(re.isPassing);
			});
		}).then( unsub => {unsubscribe = unsub;})
			.catch(console.error);

		return () => unsubscribe && unsubscribe();
	}, [api, isApiReady]);

	useEffect(() => {
		console.log('bim2');
		if (!isApiReady) {
			return;
		}

		let unsubscribe: () => void;

		// api.query.democracy.referendumInfoOf(referendumId, (info) => {
		api.query.democracy.referendumInfoOf(53, (info) => {
			const _info = info.unwrapOr(null);

			if (_info?.isOngoing){
				setAyeVotes(_info?.asOngoing.tally.ayes);
				setNayVotes(_info?.asOngoing.tally.nays);
				setTurnout(_info?.asOngoing.tally.turnout);
			}

			setLoadingStatus({ isLoading: false, message: '' });
		})
			.then( unsub => {unsubscribe = unsub;})
			.catch(console.error);

		return () => unsubscribe && unsubscribe();
	}, [api, isApiReady, referendumId]);

	useEffect(() => {
		console.log('bim4');
		if (!isApiReady) {
			return;
		}

		let unsubscribe: () => void;

		api.query.balances.totalIssuance((result) => {
			setTotalIssuance(result);
		})
			.then( unsub => {unsubscribe = unsub;})
			.catch(console.error);

		return () => unsubscribe && unsubscribe();
	},[api, isApiReady]);

	return (
		<Card className={loadingStatus.isLoading ? `LoaderWrapper ${className}` : className}>
			{loadingStatus.isLoading
				?
				<Loader text={loadingStatus.message} timeout={30000} timeoutText='Api is unresponsive.'/>
				:
				<>
					<PassingInfo isPassing={isPassing}/>
					{isPassing === null
						? <Loader text={'Loading vote progress'} timeout={30000} timeoutText='Vote calculation failed'/>
						: <VoteProgress
							ayeVotes={ayeVotes}
							className='vote-progress'
							isPassing={isPassing}
							threshold={getThreshold}
							nayVotes={nayVotes}
						/>}
					<Grid columns={3} divided>
						<Grid.Row>
							<Grid.Column>
								<h6>Turnout</h6>
								<div>{formatBnBalance(turnout, { numberAfterComma: 2 })}</div>
							</Grid.Column>
							<Grid.Column width={5}>
								<h6>Aye</h6>
								<div>{formatBnBalance(ayeVotes, { numberAfterComma: 2 })}</div>
							</Grid.Column>
							<Grid.Column width={5}>
								<h6>Nay</h6>
								<div>{formatBnBalance(nayVotes, { numberAfterComma: 2 })}</div>
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</>
			}
		</Card>
	);
};

export default styled(ReferendumVoteInfo)`
	margin-bottom: 1rem;

	.vote-progress {
		margin-bottom: 5rem;
	}

	.LoaderWrapper {
		height: 15rem;
		position: absolute;
		width: 100%;
	}
`;