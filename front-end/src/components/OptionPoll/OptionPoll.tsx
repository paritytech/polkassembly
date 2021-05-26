// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React, { useCallback, useContext, useState } from 'react';
import { Progress } from 'semantic-ui-react';

import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useAddOptionPollVoteMutation, useDeleteOptionPollVoteMutation, useOptionPollVotesQuery } from '../../generated/graphql';
import Card from '../../ui-components/Card';
import FilteredError from '../../ui-components/FilteredError';
import HelperTooltip from '../../ui-components/HelperTooltip';

interface Props {
	className?: string
	optionPollId: number
	question: string
	options: string
	endAt?: number | null | undefined
	canEdit: boolean
}

const OptionPoll = ({ className, optionPollId, question, options, endAt }: Props) => {
	const [err, setErr] = useState<Error | null>(null);
	const { id } = useContext(UserDetailsContext);
	const { data, error, refetch } = useOptionPollVotesQuery({ variables: { optionPollId } });
	const [addOptionPollVoteMutation] = useAddOptionPollVoteMutation();
	const [deleteOptionPollVoteMutation] = useDeleteOptionPollVoteMutation();

	let totalVotes = 0;
	const optionMap: any = {};
	let parsedOptions: string[] = [];

	data?.option_poll_votes?.forEach(({ option }) => {
		optionMap[option] = (optionMap[option] || 0) + 1;
		totalVotes++;
	});

	const castVote = useCallback(async (option: string) => {
		if (!id) {
			return;
		}

		try {
			await deleteOptionPollVoteMutation({
				variables: {
					optionPollId,
					userId: id
				}
			});
		} catch (error) {
			setErr(error);
		}

		try {
			await addOptionPollVoteMutation({
				variables: {
					option,
					optionPollId,
					userId: id
				}
			});

			refetch();
		} catch (error) {
			setErr(error);
		}
	}, [id, addOptionPollVoteMutation, deleteOptionPollVoteMutation, optionPollId, refetch]);

	if (error?.message) return <Card><FilteredError text={error.message}/></Card>;

	try {
		parsedOptions = JSON.parse(options);
	} catch (error) {
		console.error(error);
	}

	return (
		<Card className={className}>
			<div>
				{err?.message && <FilteredError className='info' text={err.message}/>}
				{error?.message && <FilteredError className='info' text={error.message}/>}
			</div>
			<h3>Poll: {question}? <HelperTooltip content='Click on option to vote' /></h3>
			<div>
				{parsedOptions.map(option => (
					<Progress
						className='progress'
						key={option}
						percent={totalVotes && Math.round((optionMap[option] || 0)*100/totalVotes)}
						color='blue'
						progress
						onClick={() => castVote(option)}
					>
						{option}
					</Progress>
				))}
			</div>
			<div>
				<span>{totalVotes} votes.</span>
				<span>{endAt && Math.round(Date.now()/1000) > endAt ? 'Poll Ended': ''}</span>
			</div>
		</Card>
	);
};

export default styled(OptionPoll)`
	.progress {
		cursor: pointer;
	}

	.errorText {
		color: red_secondary;
	}
`;
