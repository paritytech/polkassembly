// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';

import { usePollQuery } from '../../../generated/graphql';
import Card from '../../../ui-components/Card';
import FilteredError from '../../../ui-components/FilteredError';
import Poll from './Poll';

interface Props {
	postId: number
	canEdit: boolean
}

export default ({ postId, canEdit }: Props) => {
	const { data, error, refetch } = usePollQuery({ variables: { postId } });

	if (error?.message) return <Card><FilteredError text={error.message}/></Card>;

	if (!data?.poll?.[0]?.id || !data?.poll?.[0]?.block_end) {
		return null;
	}

	return (
		<>
			<Poll pollId={data?.poll?.[0]?.id} endBlock={data?.poll?.[0]?.block_end} canEdit={canEdit} pollRefetch={refetch} />
		</>
	);
};
