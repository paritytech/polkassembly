import React from 'react';

import { useLatestDiscussionPostsQuery } from '../../generated/graphql';
import Discussions from './Discussions';
import FilteredError from '../../ui-components/FilteredError';
import Loader from '../../ui-components/Loader';

const DiscussionsContainer = () => {

	const { data, error } = useLatestDiscussionPostsQuery();

	if (error) {
		return <FilteredError text={error.message}/>;
	}

	if (data) return <Discussions data={data} />;

	return <Loader/>;

};

export default DiscussionsContainer;