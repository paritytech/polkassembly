import React from 'react';

import { useLatestProposalPostsQuery } from '../../generated/graphql';
import Proposals from './Proposals';

const ProposalsContainer = () => {

	const { data, error } = useLatestProposalPostsQuery();

	if (error) {
		return <div>{error}</div>;
	}

	if (data) return <Proposals data={data} />;

	return <div>Loading...</div>;
};

export default ProposalsContainer;