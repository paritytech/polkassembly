import React from 'react';

import { useLatestDiscussionPostsQuery } from '../../generated/graphql';
import Discussions from './Discussions';

const DiscussionsContainer = () => {

	const { data, error } = useLatestDiscussionPostsQuery();

	if (error) {
		return <div>{error}</div>;
	}

	if (data) return <Discussions data={data} />;

	return <div>Loading</div>

};

export default DiscussionsContainer;