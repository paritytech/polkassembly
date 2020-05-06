// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useEffect } from 'react';

import TreasuryListing from '../../../components/Listings/TreasuryListing';
import { useLatestDemocracyTreasuryProposalPostsQuery } from '../../../generated/graphql';
import { post_topic } from '../../../global/post_topics';
import { post_type } from '../../../global/post_types';
import FilteredError from '../../../ui-components/FilteredError';
import Loader from '../../../ui-components/Loader';

interface Props {
	className?: string
}

const TreasuryProposalsContainer = ({ className }:Props) => {

	const { data, error, refetch } = useLatestDemocracyTreasuryProposalPostsQuery({ variables: {
		limit: 5,
		postTopic: post_topic.TREASURY,
		postType: post_type.ON_CHAIN
	} });

	useEffect(() => {
		refetch();
	}, [refetch]);

	if (error?.message) return <FilteredError text={error.message}/>;

	if (data) return <TreasuryListing className={className} data={data}/>;

	return <Loader/>;
};

export default TreasuryProposalsContainer;
