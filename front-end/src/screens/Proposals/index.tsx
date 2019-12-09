import React from 'react';

import { useLatestPostsQuery } from '../../generated/graphql';
import Proposals from './Proposals';

const ProposalsContainer = () => {

	const { data, error } = useLatestPostsQuery();

	if (error) {
		return <div>{error}</div>;
	}

	if (data) return <Proposals data={data} />;

	return <div>Loading...</div>;
};

export default ProposalsContainer;