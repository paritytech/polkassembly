// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useEffect } from 'react';

import ProposalsListing from '../../../components/Listings/ProposalsListing';
import { useTrackerDemocracyProposalPostsQuery } from '../../../generated/graphql';
import { post_type } from '../../../global/post_types';
import FilteredError from '../../../ui-components/FilteredError';
import Loader from '../../../ui-components/Loader';

interface Props {
	className?: string
}

const ProposalsContainer = ({ className }:Props) => {
	let trackMap: any = {};

	try {
		trackMap = JSON.parse(global.window.localStorage.getItem('trackMap') || '{}');
	} catch (error) {
		console.error(error);
	}

	const onchainProposalIds = Object.keys(trackMap.proposal || {}).map(key => Number(key));

	const { data, error, refetch } = useTrackerDemocracyProposalPostsQuery({ variables: {
		onchainProposalIds,
		postType: post_type.ON_CHAIN
	} });

	useEffect(() => {
		refetch();
	}, [refetch]);

	if (error?.message) return <FilteredError text={error.message}/>;

	if (data) return <ProposalsListing className={className} data={data}/>;

	return <Loader/>;
};

export default ProposalsContainer;
