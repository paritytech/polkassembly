import React from 'react';

import { useLatestPostsQuery } from '../../generated/graphql';
import HomeContent from './HomeContent';

const Home = () => {
	const { data, error } = useLatestPostsQuery();

	if (error) {
		return <div>{error.message}</div>;
	}

	if (data) return <HomeContent data={data} />;

	return <div>Loading</div>
};

export default Home;