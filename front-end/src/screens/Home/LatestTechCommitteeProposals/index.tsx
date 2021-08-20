// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useEffect } from 'react';
import { post_type } from 'src/global/post_types';

import TechCommitteeProposalsListing from '../../../components/Listings/TechCommitteeProposalsListing';
import { useLatestTechCommitteeProposalPostsQuery } from '../../../generated/graphql';
import FilteredError from '../../../ui-components/FilteredError';
import Loader from '../../../ui-components/Loader';

interface Props {
	className?: string
}

const TechCommitteeProposalsContainer = ({ className }:Props) => {

	const { data, error, refetch } = useLatestTechCommitteeProposalPostsQuery({ variables: { limit: 2, postType: post_type.ON_CHAIN } });

	useEffect(() => {
		refetch();
	}, [refetch]);

	if (error?.message) return <FilteredError text={error.message}/>;

	if (data) return <TechCommitteeProposalsListing className={className} data={data}/>;

	return <Loader/>;
};

export default TechCommitteeProposalsContainer;
