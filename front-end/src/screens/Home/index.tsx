// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React, { useContext } from 'react';
import { Grid } from 'semantic-ui-react';
import DefaultAddressInfoBox from 'src/components/DefaultAddressInfoBox';

import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useRouter } from '../../hooks';
import Button from '../../ui-components/Button';
import BountyContainer from './LatestBounties';
import DiscussionContainer from './LatestDiscussions';
import MotionsContainer from './LatestMotions';
import ProposalContainer from './LatestProposals';
import ReferendaContainer from './LatestReferenda';
import TipContainer from './LatestTips';
import TreasuryContainer from './LatestTreasury';

interface Props {
  className?: string
}

const Home = ({ className }: Props) => {
	const { history } = useRouter();
	const currentUser = useContext(UserDetailsContext);
	const handleCreatePost = () => {
		history.push('/post/create');
	};

	return (
		<div className={className}>
			<h1>Latest activity</h1>
			<Grid stackable reversed='mobile tablet'>
				<Grid.Column mobile={16} tablet={16} computer={10}>
					<h3>Current referenda</h3>
					<ReferendaContainer className='referendumContainer' />
					<h3>Latest proposals</h3>
					<ProposalContainer className='proposalContainer' />
					<h3>Latest motions</h3>
					<MotionsContainer className='motionContainer' />
					<h3>Latest treasury proposals</h3>
					<TreasuryContainer className='treasuryContainer' />
					<h3>Latest tips</h3>
					<TipContainer className='tipContainer' />
					<h3>Latest Bounties</h3>
					<BountyContainer className='bountyContainer' />
					<h3>Latest discussions</h3>
					<DiscussionContainer className='discussionContainer'/>
				</Grid.Column>
				<Grid.Column mobile={16} tablet={16} computer={6}>
					{currentUser.id && <div className='mainButtonContainer'>
						<Button primary className={'newPostButton'} onClick={handleCreatePost}>New post</Button>
					</div>}
					{currentUser.id && currentUser.addresses?.length !== 0 && !currentUser.defaultAddress &&
						<DefaultAddressInfoBox />}
				</Grid.Column>
			</Grid>
		</div>
	);
};

export default styled(Home)`

	.referendumContainer, .proposalContainer, .discussionContainer, .motionContainer, .treasuryContainer, .tipContainer, .bountyContainer {
		margin-bottom: 3rem;
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

	@media only screen and (max-width: 992px) {
		.default-address-infobox {
			display: none;
		}
	}

	@media only screen and (max-width: 768px) {

		.mainButtonContainer {
			margin: 0rem;
		}
	}

	@media only screen and (max-width: 991px) and (min-width: 768px) {
		.ui[class*="tablet reversed"].grid {
			flex-direction: column-reverse;
		}

		.mainButtonContainer {
			margin-top: 1rem!important;
		}
	}

	@media only screen and (max-width: 576px) {

		.mainButtonContainer {
			align-items: stretch!important;
			margin: 1rem!important;

			.newPostButton {
				padding: 0.8rem 1rem;
				border-radius: 0.5rem;
			}
		}
	}

	li {
        list-style-type: none;
    }

	.mainButtonContainer {
		align-items: flex-start;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-bottom: 2rem;
	}
`;
