// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React, { useEffect } from 'react';

import DiscussionsListing from '../../components/Listings/DiscussionsListing';
import { useLatestDiscussionPostsQuery } from '../../generated/graphql';
import useRouter from '../../hooks/useRouter';
import FilteredError from '../../ui-components/FilteredError';
import Loader from '../../ui-components/Loader';

const LoadMoreCard = styled.div`
	padding: 2rem 3rem 1.5rem 3rem;
	background-color: white;
	border-radius: 3px;
	box-shadow: box_shadow_card;
	transition: box-shadow .1s ease-in-out;
	font-family: font_default;
	font-size: md;
	font-weight: bold;
	color: grey_primary;
	margin-bottom: 0.3rem;
	text-align: center;

	&:hover {
		box-shadow: box_shadow_card_hover;
		text-decoration: none;
		cursor: pointer;
	}

	@media only screen and (max-width: 576px) {
		& {
			padding: 1.2rem 1.5rem;
		}
	}
`;

const LIMIT = 10;

const DiscussionsContainer = () => {
	const { query, pathname, history } = useRouter();
	const page = parseInt(query.page, 10) || 0;

	const { data, error, refetch } = useLatestDiscussionPostsQuery({ variables: { limit: LIMIT, offset: page * LIMIT } });

	useEffect(() => {
		refetch();
	}, [refetch]);

	if (error?.message) {
		return <FilteredError text={error.message}/>;
	}

	const navigateNext = () => {
		history.push(`${pathname}?page=${page + 1}`);
	};

	if (data) {
		return <>
			<DiscussionsListing data={data} />
			{data?.posts?.length === LIMIT && <LoadMoreCard onClick={navigateNext}>Load more</LoadMoreCard>}
		</>;
	}

	return <Loader/>;

};

export default DiscussionsContainer;
