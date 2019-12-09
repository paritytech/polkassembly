import React from 'react';

import { useLatestPostsQuery } from '../../generated/graphql';
import Discussions from './Discussions';

const DiscussionsContainer = () => {

	const { data, error } = useLatestPostsQuery();

	if (error) {
		return <div>{error}</div>;
	}

	if (data) return <Discussions data={data} />;

	return <div>Loading</div>

};

export default DiscussionsContainer;