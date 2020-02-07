import React from 'react';

import { useLatestDiscussionPostsQuery } from '../../generated/graphql';
import Discussions from '../../components/Listings/DiscussionsListing';
import FilteredError from '../../ui-components/FilteredError';
import Loader from '../../ui-components/Loader';

const DiscussionsContainer = () => {

	const { data, error } = useLatestDiscussionPostsQuery({ variables: { limit: 20 } });

	if (error) {
		return <FilteredError text={error.message}/>;
	}

	if (data) return <Discussions data={data} />;

	return <Loader/>;

};

export default DiscussionsContainer;