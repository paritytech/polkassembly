// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useEffect, useState } from 'react';

import DiscussionsListing from '../../components/Listings/DiscussionsListing';
import { useLatestDiscussionPostsQuery } from '../../generated/graphql';
import FilteredError from '../../ui-components/FilteredError';
import Loader from '../../ui-components/Loader';
import LoadMore from '../../ui-components/LoadMore';

const LIMIT = 20;

interface Props {
	showOwnProposals?: boolean
}

const DiscussionsContainer = ({ showOwnProposals }: Props) => {
	const [page, setPage] = useState(1);

	const { data, error, loading, refetch } = useLatestDiscussionPostsQuery({ variables: { limit: LIMIT * page } });

	useEffect(() => {
		refetch();
	}, [refetch]);

	if (error?.message) {
		return <FilteredError text={error.message}/>;
	}

	const loadMore = () => {
		setPage(page + 1);
	};

	if (data) {
		return <>
			<DiscussionsListing data={data} showOwnProposals={showOwnProposals} />
			{(loading || (data.posts.length === LIMIT * page)) && <LoadMore onClick={loadMore} loading={loading} />}
		</>;
	}

	return <Loader/>;

};

export default DiscussionsContainer;
