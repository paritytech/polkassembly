import React from 'react';

import { useLatestDiscussionPostQuery } from '../../../generated/graphql';
import LatestDiscussion from './LatestDiscussion';
import FilteredError from '../../../ui-components/FilteredError';
import Loader from '../../../ui-components/Loader';

interface Props {
	className?: string
}

const DiscussionContainer = ({ className }:Props) => {

	const { data, error } = useLatestDiscussionPostQuery();

	if (error) return <FilteredError text={error.message}/>;

	if (data) return <LatestDiscussion className={className} data={data}/>;

	return <Loader/>;
};

export default DiscussionContainer;