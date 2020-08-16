// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useEffect, useState } from 'react';
import { post_type } from 'src/global/post_types';

import Referenda from '../../../components/Listings/ReferendaListing';
import { useAllReferendaPostsQuery } from '../../../generated/graphql';
import FilteredError from '../../../ui-components/FilteredError';
import Loader from '../../../ui-components/Loader';
import LoadMore from '../../../ui-components/LoadMore';

interface Props {
	className?: string
	limit: number
}

const ReferendaContainer = ({ className, limit }:Props) => {
	const [page, setPage] = useState(1);

	const { data, error, loading, refetch } = useAllReferendaPostsQuery({ variables: {
		limit: limit * page,
		postType: post_type.ON_CHAIN
	} });

	useEffect(() => {
		refetch();
	}, [refetch]);

	const loadMore = () => {
		setPage(page + 1);
	};

	if (error?.message) return <FilteredError text={error.message}/>;

	if (data) return (
		<>
			<Referenda className={className} data={data}/>
			{(loading || (data.posts.length === limit * page)) && <LoadMore onClick={loadMore} loading={loading} />}
		</>
	);

	return <Loader/>;
};

export default ReferendaContainer;
