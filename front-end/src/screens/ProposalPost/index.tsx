// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import { useRouter } from 'src/hooks';

import Post from '../../components/Post/Post';
import { useProposalPostAndCommentsQuery } from '../../generated/graphql';
import FilteredError from '../../ui-components/FilteredError';
import Loader from '../../ui-components/Loader';

export default () => {
	const { query } = useRouter();
	const id = query['id'] as string;
	const idNumber = Number(id) || 0;
	const { data, error, refetch } = useProposalPostAndCommentsQuery({ variables: { 'id': idNumber } });

	if (error?.message) return <FilteredError text={error.message}/>;

	if (data) return <Post data={data} isProposal refetch={refetch} />;

	return <Loader/>;
};
