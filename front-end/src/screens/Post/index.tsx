import React from 'react';
import { useParams } from 'react-router-dom';

import { usePostAndCommentsQuery } from '../../generated/graphql';
import Post from './Post';
import Loader from '../../ui-components/Loader';

export default () => {
	const { id } = useParams();
	const idNumber = Number(id) || 0;
	const { data, error, refetch } = usePostAndCommentsQuery({ variables: { 'id': idNumber } });

	if (error) return <div> Error: {error.message}</div>;

	if (data) return <Post data={data} refetch={refetch} />;

	return <Loader/>
};