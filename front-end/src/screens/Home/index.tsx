import React from 'react';

import { useLatestPostsQuery } from '../../generated/graphql';
import HomeContent from './HomeContent';

const Home = () => {
	const { data, error, loading } = useLatestPostsQuery();

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error || !data) {
		return <div>ERROR</div>;
	}

	return <HomeContent data={data} />;
};

export default Home;