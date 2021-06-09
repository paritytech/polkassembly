// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useEffect } from 'react';

import TreasuryListing from '../../../components/Listings/TreasuryListing';
import { useTrackerDemocracyTreasuryProposalPostsQuery } from '../../../generated/graphql';
import { post_type } from '../../../global/post_types';
import FilteredError from '../../../ui-components/FilteredError';
import Loader from '../../../ui-components/Loader';

interface Props {
	className?: string
}

const TreasuryProposalsContainer = ({ className }:Props) => {
	let trackMap: any = {};

	try {
		trackMap = JSON.parse(global.window.localStorage.getItem('trackMap') || '{}');
	} catch (error) {
		console.error(error);
	}

	const onchainTreasuryProposalIds = Object.keys(trackMap.treasuryProposal || {}).map(key => Number(key));

	const { data, error, refetch } = useTrackerDemocracyTreasuryProposalPostsQuery({ variables: {
		onchainTreasuryProposalIds,
		postType: post_type.ON_CHAIN
	} });

	useEffect(() => {
		refetch();
	}, [refetch]);

	if (error?.message) return <FilteredError text={error.message}/>;

	if (data) return <TreasuryListing className={className} data={data}/>;

	return <Loader/>;
};

export default TreasuryProposalsContainer;
