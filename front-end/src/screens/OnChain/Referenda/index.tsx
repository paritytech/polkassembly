import React from 'react';

import { useLatestDemocracyReferendaPostsQuery } from '../../../generated/graphql';
import Referenda from './Referenda';
import FilteredError from '../../../ui-components/FilteredError';
import Loader from '../../../ui-components/Loader';

interface Props {
	className?: string
}

const ReferendaContainer = ({ className }:Props) => {

	const { data, error } = useLatestDemocracyReferendaPostsQuery();

	if (error) return <FilteredError text={error.message}/>;

	if (data) return <Referenda className={className} data={data}/>;

	return <Loader/>;
};

export default ReferendaContainer;