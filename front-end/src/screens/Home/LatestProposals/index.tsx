// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';

import ProposalsListing from '../../../components/Listings/ProposalsListing';
import { useLatestDemocracyProposalPostsQuery } from '../../../generated/graphql';
import { post_topic } from '../../../global/post_topics';
import { post_type } from '../../../global/post_types';
import FilteredError from '../../../ui-components/FilteredError';
import Loader from '../../../ui-components/Loader';

interface Props {
	className?: string
}

const ProposalContainer = ({ className }:Props) => {

	const { data, error } = useLatestDemocracyProposalPostsQuery({ variables: {
		limit: 2,
		postTopic: post_topic.DEMOCRACY,
		postType: post_type.ON_CHAIN
	} });

	if (error?.message) return <FilteredError text={error.message}/>;

	if (data) return <ProposalsListing className={className} data={data}/>;

	return <Loader/>;
};

export default ProposalContainer;