import React from 'react';
import { useParams } from 'react-router-dom';

import { useMotionPostAndCommentsQuery } from '../../generated/graphql';
import Post from '../../components/Post/Post';
import { useRedirectReferenda } from '../../hooks';
import FilteredError from '../../ui-components/FilteredError';
import Loader from '../../ui-components/Loader';

export default () => {
	const { id } = useParams();
	const idNumber = Number(id) || 0;
	const { data, error, refetch } = useMotionPostAndCommentsQuery({ variables: { 'id': idNumber } });

	useRedirectReferenda(data?.posts?.[0]?.onchain_link?.onchain_referendum_id);

	if (error) return <FilteredError text={error.message}/>;

	if (data) return <Post data={data} isMotion refetch={refetch} />;

	return <Loader/>;
};
