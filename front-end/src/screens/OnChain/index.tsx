import styled from '@xstyled/styled-components';
import React from 'react';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid';

import ProposalContainer from './Proposals';
import ReferendaContainer from './Referenda';
import InfoBox from '../../ui-components/InfoBox';

const OnchainPostsContainer = ({ className } : {className?: string}) => {

	return (
		<Container className={className}>
			<Grid stackable reversed='mobile tablet'>
				<Grid.Column mobile={16} tablet={16} computer={10}>
					<h1>Latest On Chain Activity</h1>
					<h2>Referenda</h2>
					<ReferendaContainer className='referendaContainer'/>
					<h2>Proposals</h2>
					<ProposalContainer className='proposalContainer'/>
				</Grid.Column>
				<Grid.Column mobile={16} tablet={16} computer={6}>
					<InfoBox
						dismissable={true}
						content='This is the place to discuss on-chain proposals, motions and referenda.
						On-chain posts are automatically generated as soon as they are created on the chain.
						Only the proposer is able to edit them.'
						name='onchainInfo'
						title='About On-chain Posts'
					/>
				</Grid.Column>
			</Grid>
		</Container>
	);

};

export default styled(OnchainPostsContainer)`

	.referendaContainer, .proposalContainer {
		margin-bottom: 3rem;
	}

	@media only screen and (max-width: 768px) {
		h1 {
			margin-left: 3rem;
		}
	}

	@media only screen and (max-width: 576px) {
		h1, h2 {
			margin-left: 1.5rem;
		}

		h1 {
			font-size: 2.1rem;
		}
	}
`;