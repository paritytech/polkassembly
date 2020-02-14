import React from 'react';

import { useLatestMotionPostsQuery } from '../../../generated/graphql';
import MotionsListing from '../../../components/Listings/MotionsListing';
import FilteredError from '../../../ui-components/FilteredError';
import Loader from '../../../ui-components/Loader';
import { post_type } from 'src/global/post_types';
import { post_topic } from 'src/global/post_topics';

interface Props {
	className?: string
}

const MotionsContainer = ({ className }:Props) => {

	const { data, error } = useLatestMotionPostsQuery({ variables: { limit: 2, postTopic: post_topic.COUNCIL, postType: post_type.ON_CHAIN } });

	if (error) return <FilteredError text={error.message}/>;

	if (data) return <MotionsListing className={className} data={data}/>;

	return <Loader/>;
};

export default MotionsContainer;