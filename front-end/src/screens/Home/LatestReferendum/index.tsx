import React from 'react';

import { useLatestDemocracyReferendaPostsQuery } from '../../../generated/graphql';
import Referendum from './LatestReferendum';
import FilteredError from '../../../ui-components/FilteredError';
import Loader from '../../../ui-components/Loader';

interface Props {
	className?: string
}

const ReferendumContainer = ({ className }:Props) => {

	const { data, error } = useLatestDemocracyReferendaPostsQuery();

	if (error) return <FilteredError text={error.message}/>;

	if (data) return <Referendum className={className} data={data}/>;

	return <Loader/>;
};

export default ReferendumContainer;