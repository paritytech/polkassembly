// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useEffect } from 'react';

import ReferendaListing from '../../../components/Listings/ReferendaListing';
import { useLatestReferendaPostsQuery } from '../../../generated/graphql';
import { post_type } from '../../../global/post_types';
import FilteredError from '../../../ui-components/FilteredError';
import Loader from '../../../ui-components/Loader';

interface Props {
	className?: string
}

const ReferendaContainer = ({ className }:Props) => {

	const { data, error, refetch } = useLatestReferendaPostsQuery({ variables: {
		limit: 2,
		postType: post_type.ON_CHAIN
	} });

	useEffect(() => {
		refetch();
	}, [refetch]);

	if (error?.message) return <FilteredError text={error.message}/>;

	if (data) return <ReferendaListing className={className} data={data}/>;

	return <Loader/>;
};

export default ReferendaContainer;
