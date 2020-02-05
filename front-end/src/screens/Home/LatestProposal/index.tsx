import React from 'react';

import { useLatestDemocracyProposalPostQuery } from '../../../generated/graphql';
import Proposals from './LatestProposal';
import FilteredError from '../../../ui-components/FilteredError';
import Loader from '../../../ui-components/Loader';

interface Props {
	className?: string
}

const ProposalContainer = ({ className }:Props) => {

	const { data, error } = useLatestDemocracyProposalPostQuery();

	if (error) return <FilteredError text={error.message}/>;

	if (data) return <Proposals className={className} data={data}/>;

	return <Loader/>;
};

export default ProposalContainer;