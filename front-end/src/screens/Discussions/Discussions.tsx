// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useEffect, useState } from 'react';

import DiscussionsListing from '../../components/Listings/DiscussionsListing';
import { useDiscussionPostsIdAscQuery, useDiscussionPostsIdDescQuery, useLatestDiscussionPostsQuery } from '../../generated/graphql';
import { sortValues } from '../../global/sortOptions';
import FilteredError from '../../ui-components/FilteredError';
import Loader from '../../ui-components/Loader';
import LoadMore from '../../ui-components/LoadMore';

const LIMIT = 20;

interface Props {
	sortBy?: string
}

const DiscussionsContainer = ({ sortBy }: Props) => {
	const [page, setPage] = useState(1);
	let postsQuery: any;

	if (sortBy === sortValues.NEWEST)
		postsQuery = useDiscussionPostsIdDescQuery;
	else if (sortBy === sortValues.OLDEST) {
		postsQuery = useDiscussionPostsIdAscQuery;
	} else {
		postsQuery = useLatestDiscussionPostsQuery;
	}

	const { data, error, loading, refetch } = postsQuery({ variables: { limit: LIMIT * page } });

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
			<DiscussionsListing data={data} />
			{(loading || (data.posts.length === LIMIT * page)) && <LoadMore onClick={loadMore} loading={loading} />}
		</>;
	}

	return <Loader/>;

};

export default DiscussionsContainer;
