// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';

import { useOptionPollQuery } from '../../generated/graphql';
import Card from '../../ui-components/Card';
import FilteredError from '../../ui-components/FilteredError';
import OptionPoll from './OptionPoll';

interface Props {
	postId: number
	canEdit: boolean
}

export default ({ postId, canEdit }: Props) => {
	const { data, error } = useOptionPollQuery({ variables: { postId } });

	if (error?.message) return <Card><FilteredError text={error.message}/></Card>;

	if (!data?.option_poll?.length) {
		return null;
	}

	return <>
		{data?.option_poll.map(poll => (
			<OptionPoll
				key={poll.id}
				optionPollId={poll.id}
				question={poll.question}
				options={poll.options}
				endAt={poll.end_at}
				canEdit={canEdit}
			/>
		))}
	</>;
};
