import React from 'react';
import { useParams } from 'react-router-dom';

import { useReferendumPostAndCommentsQuery } from '../../generated/graphql';
import Post from '../../components/Post/Post';
import FilteredError from '../../ui-components/FilteredError';
import Loader from '../../ui-components/Loader';

export default () => {
	const { id } = useParams();
	const idNumber = Number(id) || 0;
	const { data, error, refetch } = useReferendumPostAndCommentsQuery({ variables: { 'id': idNumber } });

	if (error) return <FilteredError text={error.message}/>;

	if (data) return <Post data={data} isReferendum refetch={refetch} />;

	return <Loader/>;
};