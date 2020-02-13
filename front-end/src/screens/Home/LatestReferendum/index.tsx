import React from 'react';

import { useLatestDemocracyReferendaPostsQuery } from '../../../generated/graphql';
import ReferendaListing from '../../../components/Listings/ReferendaListing';
import FilteredError from '../../../ui-components/FilteredError';
import Loader from '../../../ui-components/Loader';

interface Props {
	className?: string
}

const ReferendumContainer = ({ className }:Props) => {

	const { data, error } = useLatestDemocracyReferendaPostsQuery();

	if (error) return <FilteredError text={error.message}/>;

	if (data) return <ReferendaListing className={className} data={data}/>;

	return <Loader/>;
};

export default ReferendumContainer;