// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useContext } from 'react';

import { UserDetailsContext } from '../../../context/UserDetailsContext';
import { usePostVotesQuery } from '../../../generated/graphql';
import { Vote } from '../../../types';
import Card from '../../../ui-components/Card';
import FilteredError from '../../../ui-components/FilteredError';
import CouncilSignals from './CouncilSignals';
import OffChainSignals from './OffChainSignals';

interface Props {
	postId: number
}

const Poll = ({ postId }: Props) => {
	const { id } = useContext(UserDetailsContext);
	const { data, error, refetch } = usePostVotesQuery({ variables: { postId } });
	let ayes = 0;
	let nays = 0;
	let ownVote: Vote | null = null;

	data?.post_votes?.forEach(({ vote, voter }) => {
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
			<OffChainSignals
				ayes={ayes}
				nays={nays}
				ownVote={ownVote}
				postId={postId}
				refetch={refetch}
			/>
			<CouncilSignals data={data} />
		</>
	);
};

export default Poll;
