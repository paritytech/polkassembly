// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';

import { usePostVotesQuery } from '../../../generated/graphql';
import Card from '../../../ui-components/Card';
import FilteredError from '../../../ui-components/FilteredError';
import CouncilSignals from './CouncilSignals';
import OffChainSignals from './OffChainSignals';
import { AYE, NAY } from './votes';

interface Props {
	postId: number
}

const Poll = ({ postId }: Props) => {
	const { data, error, refetch } = usePostVotesQuery({ variables: { postId } });
	let ayes = 0;
	let nays = 0;

	data?.post_votes?.forEach(vote => {
		if (vote.vote === AYE) {
			ayes++;
		}
		if (vote.vote === NAY) {
			nays++;
		}
	});

	if (error?.message) return <Card><FilteredError text={error.message}/></Card>;

	return (
		<>
			<OffChainSignals
				ayes={ayes}
				nays={nays}
				postId={postId}
				refetch={refetch}
			/>
			<CouncilSignals data={data} />
		</>
	);
};

export default Poll;
