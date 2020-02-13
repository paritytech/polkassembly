import React from 'react';

import { useLatestReferendaPostsQuery } from '../../../generated/graphql';
import ReferendaListing from '../../../components/Listings/ReferendaListing';
import FilteredError from '../../../ui-components/FilteredError';
import Loader from '../../../ui-components/Loader';

interface Props {
	className?: string
}

const ReferendaContainer = ({ className }:Props) => {

	const { data, error } = useLatestReferendaPostsQuery({ variables: { limit: 2 } });

	if (error) return <FilteredError text={error.message}/>;

	if (data) return <ReferendaListing className={className} data={data}/>;

	return <Loader/>;
};

export default ReferendaContainer;