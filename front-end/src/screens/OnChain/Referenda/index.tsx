// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useEffect } from 'react';
import { post_type } from 'src/global/post_types';

import Referenda from '../../../components/Listings/ReferendaListing';
import { useLatestReferendaPostsQuery } from '../../../generated/graphql';
import FilteredError from '../../../ui-components/FilteredError';
import Loader from '../../../ui-components/Loader';

interface Props {
	className?: string
	limit: number
}

const ReferendaContainer = ({ className, limit }:Props) => {

	const { data, error, refetch } = useLatestReferendaPostsQuery({ variables: {
		limit,
		postType: post_type.ON_CHAIN
	} });

	useEffect(() => {
		refetch();
	}, [refetch]);

	if (error?.message) return <FilteredError text={error.message}/>;

	if (data) return <Referenda className={className} data={data}/>;

	return <Loader/>;
};

export default ReferendaContainer;
