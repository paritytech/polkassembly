import React from 'react';

import { useLatestPostsQuery } from '../../generated/graphql';
import HomeContent from './HomeContent';
import FilteredError from '../../ui-components/FilteredError';
import Loader from '../../ui-components/Loader';

const Home = () => {
	const { data, error } = useLatestPostsQuery();

	if (error) {
		return <FilteredError text={error.message}/>;
	}

	if (data) return <HomeContent data={data} />;

	return <Loader/>;
};

export default Home;