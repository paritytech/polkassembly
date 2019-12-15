import * as React from 'react';
import { useParams } from 'react-router-dom';
import { usePostAndCommentsQuery } from '../../generated/graphql';
import Post from './Post';

export default () => {
	const { id } = useParams();
	// cast id as a number or 0
	const idNumber = Number(id) || 0;
	const { data, error, loading } = usePostAndCommentsQuery({ variables: { 'id': idNumber } });

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) return <div> Error: {error.message}</div>;

	if (data) return <Post data={data} />;

	return <div>Loading...</div>
};