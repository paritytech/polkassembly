import React from 'react';

import { useLatestDemocracyProposalPostsQuery } from '../../../generated/graphql';
import Proposals from './Proposals';
import FilteredError from '../../../ui-components/FilteredError';
import Loader from '../../../ui-components/Loader';

interface Props {
	className?: string
}

const ProposalsContainer = ({ className }:Props) => {

	const { data, error } = useLatestDemocracyProposalPostsQuery();

	if (error) return <FilteredError text={error.message}/>;

	if (data) return <Proposals className={className} data={data}/>;

	return <Loader/>;
};

export default ProposalsContainer;