import React from 'react';

import { useLatestProposalPostsQuery } from '../../generated/graphql';
import Proposals from './Proposals';
import Loader from '../../ui-components/Loader';

const ProposalsContainer = () => {

	const { data, error } = useLatestProposalPostsQuery();

	if (error) {
		return <div>{error}</div>;
	}

	if (data) return <Proposals data={data} />;

	return <Loader/>
};

export default ProposalsContainer;