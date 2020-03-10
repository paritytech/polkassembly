// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';

import { useLatestReferendaPostsQuery } from '../../../generated/graphql';
import Referenda from '../../../components/Listings/ReferendaListing';
import { post_type } from 'src/global/post_types';
import FilteredError from '../../../ui-components/FilteredError';
import Loader from '../../../ui-components/Loader';

interface Props {
	className?: string
}

const ReferendaContainer = ({ className }:Props) => {

	const { data, error } = useLatestReferendaPostsQuery({ variables: {
		limit: 5,
		postType: post_type.ON_CHAIN
	} });

	if (error) return <FilteredError text={error.message}/>;

	if (data) return <Referenda className={className} data={data}/>;

	return <Loader/>;
};

export default ReferendaContainer;