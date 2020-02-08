import React from 'react';

import { useLatestDemocracyProposalPostsQuery } from '../../../generated/graphql';
import ProposalsListing from '../../../components/Listings/ProposalsListing';
import FilteredError from '../../../ui-components/FilteredError';
import Loader from '../../../ui-components/Loader';

interface Props {
	className?: string
}

const ProposalContainer = ({ className }:Props) => {

	const { data, error } = useLatestDemocracyProposalPostsQuery({ variables: { limit: 1 } });

	if (error) return <FilteredError text={error.message}/>;

	if (data) return <ProposalsListing className={className} data={data}/>;

	return <Loader/>;
};

export default ProposalContainer;