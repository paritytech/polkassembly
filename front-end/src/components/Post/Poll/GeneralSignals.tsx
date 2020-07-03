// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import { ApolloQueryResult } from 'apollo-client';
import React, { useCallback, useContext, useState } from 'react';
import BlockCountdown from 'src/components/BlockCountdown';
import useCurrentBlock from 'src/hooks/useCurrentBlock';
import ButtonLink from 'src/ui-components/ButtonLink';
import HelperTooltip from 'src/ui-components/HelperTooltip';

import { UserDetailsContext } from '../../../context/UserDetailsContext';
import { PollVotesQuery, PollVotesQueryVariables, useAddPollVoteMutation, useDeleteVoteMutation } from '../../../generated/graphql';
import { Vote } from '../../../types';
import AyeNayButtons from '../../../ui-components/AyeNayButtons';
import Card from '../../../ui-components/Card';
import FilteredError from '../../../ui-components/FilteredError';
import { Form } from '../../../ui-components/Form';
import GeneralChainSignalBar from '../../../ui-components/GeneralChainSignalBar';

interface Props {
	ayes: number,
	className?: string,
	endBlock: number
	nays: number,
	ownVote?: Vote | null,
	pollId: number
	refetch: (variables?: PollVotesQueryVariables | undefined) => Promise<ApolloQueryResult<PollVotesQuery>>
}

const CouncilSignals = ({ ayes, className, endBlock, nays, ownVote, pollId, refetch }: Props) => {
	const { id } = useContext(UserDetailsContext);
	const [error, setErr] = useState<Error | null>(null);
	const [addPollVoteMutation] = useAddPollVoteMutation();
	const [deleteVoteMutation] = useDeleteVoteMutation();
	const currentBlockNumber = useCurrentBlock()?.toNumber() || 0;
	const canVote =  endBlock > currentBlockNumber;

	const cancelVote = useCallback(async () => {
		if (!id) {
			return;
		}

		try {
			await deleteVoteMutation({
				variables: {
					pollId,
					userId: id
				}
			});

			refetch();
		} catch (error) {
			setErr(error);
		}
	}, [id, deleteVoteMutation, pollId, refetch]);

	const castVote = useCallback(async (vote: Vote) => {
		if (!id) {
			return;
		}

		try {
			await addPollVoteMutation({
				variables: {
					pollId,
					userId: id,
					vote
				}
			}).catch(console.error);

			refetch();
		} catch (error) {
			setErr(error);
		}
	}, [id, addPollVoteMutation, pollId, refetch]);

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
			<Form standalone={false}>
				<AyeNayButtons
					className={`signal-btns ${ownVote}`}
					disabled={!id || !!ownVote || !canVote}
					onClickAye={() => castVote(Vote.AYE)}
					onClickNay={() => castVote(Vote.NAY)}
				/>
				<div className='cancelEnd'>
					{ownVote && canVote &&
						<>
							<ButtonLink className='info text-muted cancelVoteLink' onClick={cancelVote}>
							Cancel {ownVote.toLowerCase()} vote
							</ButtonLink>
							•
						</>
					}
					{canVote
						? <span className='pollEndTime'>Poll ends in <BlockCountdown endBlock={endBlock}/></span>
						: <span>Poll ended.</span>
					}
				</div>
			</Form>
		</Card>
	);
};

export default styled(CouncilSignals)`
	.cancelEnd{
		.cancelVoteLink {
			margin-right: 1rem;
		}
		.pollEndTime {
			margin-left: 1rem;
		}
	}

	.blockCountdown {
		display: inline;
		font-weight: bold;
	}

	.info {
		margin: 1em 0;
	}

	.errorText {
		color: red_secondary;
	}

	.signal-btns {
		margin-top: 2rem !important;
	}

	.AYE {
		.ui.button.ui.primary.positive.button {
			background-color: green_secondary !important;
			opacity: 1 !important;
		}
	}

	.NAY {
		.ui.button.ui.primary.negative.button{
			background-color: red_secondary !important;
			opacity: 1 !important;
		}
	}
`;
