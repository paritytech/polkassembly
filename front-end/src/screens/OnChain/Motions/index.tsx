// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';

import { useLatestMotionPostsQuery } from '../../../generated/graphql';
import MotionsListing from '../../../components/Listings/MotionsListing';
import FilteredError from '../../../ui-components/FilteredError';
import Loader from '../../../ui-components/Loader';
import { post_type } from '../../../global/post_types';

interface Props {
	className?: string
}

const MotionsContainer = ({ className }:Props) => {

	const { data, error } = useLatestMotionPostsQuery({ variables: {
		limit: 5,
		postType: post_type.ON_CHAIN
	} });

	if (error) return <FilteredError text={error.message}/>;

	if (data) return <MotionsListing className={className} data={data}/>;

	return <Loader/>;
};

export default MotionsContainer;