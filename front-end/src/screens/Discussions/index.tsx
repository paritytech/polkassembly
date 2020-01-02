import React from 'react';

import { useLatestDiscussionPostsQuery } from '../../generated/graphql';
import Discussions from './Discussions';
import Loader from '../../ui-components/Loader';

const DiscussionsContainer = () => {

	const { data, error } = useLatestDiscussionPostsQuery();

	if (error) {
		return <div>{error}</div>;
	}

	if (data) return <Discussions data={data} />;

	return <Loader/>;

};

export default DiscussionsContainer;