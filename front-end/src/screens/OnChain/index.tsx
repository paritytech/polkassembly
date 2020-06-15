// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Icon } from 'semantic-ui-react';

import InfoBox from '../../ui-components/InfoBox';
import MotionContainer from './Motions';
import ProposalContainer from './Proposals';
import ReferendaContainer from './Referenda';
import TreasuryContainer from './Treasury';

const OnchainPostsContainer = ({ className } : {className?: string}) => {

	return (
		<div className={className}>
			<h1>Latest On Chain Activity</h1>
			<Grid stackable reversed='mobile tablet'>
				<Grid.Column mobile={16} tablet={16} computer={10}>
					<h3>Referenda</h3>
					<ReferendaContainer className='referendaContainer' limit={5} />
					<Link className='full-listing-link' to='referenda'><Icon name='arrow right'/>See all referenda</Link>
					<h3>Proposals</h3>
					<ProposalContainer className='proposalContainer' limit={5} />
					<Link className='full-listing-link' to='proposals'><Icon name='arrow right'/>See all proposals</Link>
					<h3>Motions</h3>
					<MotionContainer className='motionContainer' limit={5} />
					<Link className='full-listing-link' to='motions'><Icon name='arrow right'/>See all motions</Link>
					<h3>Treasury</h3>
					<TreasuryContainer className='treasuryContainer' limit={5} />
					<Link className='full-listing-link' to='treasury-proposals'><Icon name='arrow right'/>See all treasury proposals</Link>
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
		</div>
	);

};

export default styled(OnchainPostsContainer)`

	.referendaContainer, .proposalContainer, .motionContainer, .treasuryContainer {
		margin-bottom: 2rem;
	}

	h1 {
		@media only screen and (max-width: 576px) {
			margin: 3rem 1rem 1rem 1rem;
		}

		@media only screen and (max-width: 768px) and (min-width: 576px) {
			margin-left: 1rem;
		}

		@media only screen and (max-width: 991px) and (min-width: 768px) {
			margin-left: 1rem;
		}
	}

	@media only screen and (max-width: 991px) and (min-width: 768px) {
		.ui[class*="tablet reversed"].grid {
			flex-direction: column-reverse;
		}
	}

	.full-listing-link {
		display: flex;
		color: black_text;
		font-weight: 500;
		margin-bottom: 4rem;
	}
`;
