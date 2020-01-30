import React from 'react';

import { useLatestProposalPostsQuery } from '../../generated/graphql';
import OnchainGovenance from './OnchainGovenance';
import FilteredError from '../../ui-components/FilteredError';
import Loader from '../../ui-components/Loader';

const ProposalsContainer = () => {

	const { data, error } = useLatestProposalPostsQuery();

	if (error) return <FilteredError text={error.message}/>;

	if (data) return <OnchainGovenance data={data} />;

	return <Loader/>;
};

export default ProposalsContainer;