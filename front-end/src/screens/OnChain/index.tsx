import styled from '@xstyled/styled-components';
import React from 'react';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid';

import ProposalContainer from './DemocracyProposals';
import ReferendaContainer from './DemocracyReferenda';

const OnchainPostsContainer = ({ className } : {className?: string}) => {

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
		h1 {
			margin-left: 3rem;
		}
	}

	@media only screen and (max-width: 576px) {
		h1 {
			margin-left: 1.5rem;
		}
	}
`;