import React from 'react';

import Loader from '../../ui-components/Loader';
import { useLatestPostsQuery } from '../../generated/graphql';
import HomeContent from './HomeContent';

const Home = () => {
	const { data, error } = useLatestPostsQuery();

	if (error) {
		return <div>{error.message}</div>;
	}

	if (data) return <HomeContent data={data} />;

	return <Loader/>;
};

export default Home;