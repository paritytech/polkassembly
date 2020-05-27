// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import { ApolloQueryResult } from 'apollo-client';
import React, { useCallback, useContext, useState } from 'react';
import HelperTooltip from 'src/ui-components/HelperTooltip';

import { UserDetailsContext } from '../../../context/UserDetailsContext';
import { PostVotesQuery, PostVotesQueryVariables, useAddPostVoteMutation, useDeleteVoteMutation } from '../../../generated/graphql';
import { Vote } from '../../../types';
import AyeNayButtons from '../../../ui-components/AyeNayButtons';
import Card from '../../../ui-components/Card';
import FilteredError from '../../../ui-components/FilteredError';
import { Form } from '../../../ui-components/Form';
import GeneralChainSignalBar from '../../../ui-components/GeneralChainSignalBar';

interface Props {
	ayes: number,
	className?: string,
	ownVote?: Vote | null,
	nays: number,
	postId: number
	refetch: (variables?: PostVotesQueryVariables | undefined) => Promise<ApolloQueryResult<PostVotesQuery>>
}

const CouncilSignals = ({ className, ayes, ownVote, nays, postId, refetch }: Props) => {
	const { id } = useContext(UserDetailsContext);
	const [error, setErr] = useState<Error | null>(null);
	const [addPostVoteMutation] = useAddPostVoteMutation();
	const [deleteVoteMutation] = useDeleteVoteMutation();

	const cancelVote = useCallback(async () => {
		if (!id) {
			return;
		}

		try {
			await deleteVoteMutation({
				variables: {
					postId,
					userId: id
				}
			});

			refetch();
		} catch (error) {
			setErr(error);
		}
	}, [id, deleteVoteMutation, postId, refetch]);

	const castVote = useCallback(async (vote: Vote) => {
		if (!id) {
			return;
		}

		try {
			await addPostVoteMutation({
				variables: {
					postId,
					userId: id,
					vote
				}
			}).catch(console.error);

			refetch();
		} catch (error) {
			setErr(error);
		}
	}, [id, addPostVoteMutation, postId, refetch]);

	return (
		<Card className={className}>
			<h3>Poll Signals <HelperTooltip content='This represents the off-chain votes of Polkassembly users including council members' /></h3>
			<GeneralChainSignalBar
				ayeSignals={ayes}
				naySignals={nays}
			/>
			<div>
				{error?.message && <FilteredError className='info' text={error.message}/>}
			</div>
			{id && (ownVote
				?
				<Form standalone={false}>
					<AyeNayButtons
						className='signal-btns'
						disabledAye={ownVote === 'NAY'}
						disabledNay={ownVote === 'AYE'}
						hasVoted={true}
						onClickAye={() => {}}
						onClickNay={() => {}}
					/>
					<div className='info text-muted'><a onClick={cancelVote}>Cancel {ownVote.toLowerCase()} vote</a></div>
				</Form>
				: <Form standalone={false}>
					<AyeNayButtons
						className='signal-btns'
						disabledAye={false}
						disabledNay={false}
						onClickAye={() => castVote(Vote.AYE)}
						onClickNay={() => castVote(Vote.NAY)}
					/>
				</Form>
			)}
		</Card>
	);
};

export default styled(CouncilSignals)`
	.info {
		margin: 1em 0;
	}

	.errorText {
		color: red_secondary;
	}

	.signal-btns {
		margin-top: 2rem !important;
	}
`;
