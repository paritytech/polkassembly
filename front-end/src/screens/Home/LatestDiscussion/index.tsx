import React from 'react';

import { useLatestDiscussionPostsQuery } from '../../../generated/graphql';
import Discussions from '../../../components/Listings/DiscussionsListing';
import FilteredError from '../../../ui-components/FilteredError';
import Loader from '../../../ui-components/Loader';

interface Props {
	className?: string
}

const DiscussionContainer = ({ className }:Props) => {

	const { data, error } = useLatestDiscussionPostsQuery({ variables: { limit: 1 } });

	if (error) return <FilteredError text={error.message}/>;

	if (data) return <Discussions className={className} data={data}/>;

	return <Loader/>;
};

export default DiscussionContainer;