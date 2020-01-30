import React from 'react';

import { useLatestDemocracyProposalPostsQuery } from '../../../generated/graphql';
import Proposals from './Proposals';
import FilteredError from '../../../ui-components/FilteredError';
import Loader from '../../../ui-components/Loader';

const ProposalsContainer = () => {

	const { data, error } = useLatestDemocracyProposalPostsQuery();

	if (error) return <FilteredError text={error.message}/>;

	if (data) return <Proposals data={data}/>;

	return <Loader/>;
};

export default ProposalsContainer;