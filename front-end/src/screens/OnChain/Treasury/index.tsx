import React from 'react';

import { useLatestDemocracyProposalPostsQuery } from '../../../generated/graphql';
import TreasuryListing from '../../../components/Listings/TreasuryListing';
import { post_topic } from '../../../global/post_topics';
import { post_type } from '../../../global/post_types';
import FilteredError from '../../../ui-components/FilteredError';
import Loader from '../../../ui-components/Loader';

interface Props {
	className?: string
}

const TreasuryProposalsContainer = ({ className }:Props) => {

	const { data, error } = useLatestDemocracyProposalPostsQuery({ variables: {
		limit: 10,
		postTopic: post_topic.TREASURY,
		postType: post_type.ON_CHAIN
	} });

	if (error) return <FilteredError text={error.message}/>;

	if (data) return <TreasuryListing className={className} data={data}/>;

	return <Loader/>;
};

export default TreasuryProposalsContainer;
