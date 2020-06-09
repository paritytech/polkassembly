// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useContext } from 'react';

import { UserDetailsContext } from '../../../context/UserDetailsContext';
import { usePollVotesQuery } from '../../../generated/graphql';
import { Vote } from '../../../types';
import Card from '../../../ui-components/Card';
import FilteredError from '../../../ui-components/FilteredError';
import CouncilSignals from './CouncilSignals';
import GeneralSignals from './GeneralSignals';

interface Props {
	pollId: number
	endBlock: number
}

const Poll = ({ pollId, endBlock }: Props) => {
	const { id } = useContext(UserDetailsContext);
	const { data, error, refetch } = usePollVotesQuery({ variables: { pollId } });
	let ayes = 0;
	let nays = 0;
	let ownVote: Vote | null = null;

	data?.poll_votes?.forEach(({ vote, voter }) => {
		if (voter?.id === id) {
			ownVote = vote;
		}
		if (vote === Vote.AYE) {
			ayes++;
		}
		if (vote === Vote.NAY) {
			nays++;
		}
	});

	if (error?.message) return <Card><FilteredError text={error.message}/></Card>;

	return (
		<>
			<GeneralSignals
				ayes={ayes}
				nays={nays}
				ownVote={ownVote}
				pollId={pollId}
				refetch={refetch}
			/>
			<CouncilSignals data={data} endBlock={endBlock} />
		</>
	);
};

export default Poll;
