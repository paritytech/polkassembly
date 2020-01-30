import React from 'react';

// import { useLatestProposalPostsQuery } from '../../generated/graphql';
// import OnchainGovenance from './OnchainGovenance';
// import FilteredError from '../../ui-components/FilteredError';
// import Loader from '../../ui-components/Loader';
import ProposalContainer from './DemocracyProposals';
import ReferendaContainer from './DemocracyReferenda';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid';
import styled from '@xstyled/styled-components';

const OnchainPostsContainer = ({ className } : {className?: string}) => {

	// const { data, error } = useLatestProposalPostsQuery();

	// if (error) return <FilteredError text={error.message}/>;

	// if (data) return <OnchainGovenance data={data} />;

	return (
		<Container className={className}>
			<h1>Latest On Chain Activity</h1>
			<Grid stackable reversed='mobile tablet'>
				<Grid.Column mobile={16} tablet={16} computer={10}>
					<h2>Referenda</h2>
					<ReferendaContainer/>
					<h2>Proposals</h2>
					<ProposalContainer/>
				</Grid.Column>
				<Grid.Column mobile={16} tablet={16} computer={6}/>
			</Grid>
		</Container>
	);

};

export default styled(OnchainPostsContainer)`
	@media only screen and (max-width: 768px) {
		h3 {
			margin-left: 3rem;
		}
	}

	@media only screen and (max-width: 576px) {
		h3 {
			margin-left: 1.5rem;
		}
	}
`;