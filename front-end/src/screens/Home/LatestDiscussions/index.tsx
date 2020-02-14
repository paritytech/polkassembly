import React from 'react';

import { useLatestDiscussionPostsQuery } from '../../../generated/graphql';
import DiscussionsListing from '../../../components/Listings/DiscussionsListing';
import FilteredError from '../../../ui-components/FilteredError';
import Loader from '../../../ui-components/Loader';

interface Props {
	className?: string
}

const DiscussionContainer = ({ className }:Props) => {

	const { data, error } = useLatestDiscussionPostsQuery({ variables: { limit: 5 } });

	if (error) return <FilteredError text={error.message}/>;

	if (data) return <DiscussionsListing className={className} data={data}/>;

	return <Loader/>;
};

export default DiscussionContainer;