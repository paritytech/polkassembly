// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import DefaultAddressInfoBox from 'src/components/DefaultAddressInfoBox';
import getNetwork from 'src/util/getNetwork';

import { UserDetailsContext } from '../../context/UserDetailsContext';
import Button from '../../ui-components/Button';
import InfoBox from '../../ui-components/InfoBox';
import DiscussionsContainer from './Discussions';

const NETWORK = getNetwork();

const Discussions = ({ className } : {className?: string}) => {
	const history = useHistory();
	const currentUser = useContext(UserDetailsContext);
	const handleCreatePost = () => {
		history.push('/post/create');
	};

	return (
		<div className={className}>
			<h1>Latest Discussions</h1>
			<Grid stackable reversed='mobile tablet'>
				<Grid.Column mobile={16} tablet={16} computer={10}>
					<DiscussionsContainer/>
				</Grid.Column>
				<Grid.Column mobile={16} tablet={16} computer={6}>
					{currentUser.id &&
						<div className='mainButtonContainer'>
							<Button primary className={'newPostButton'} onClick={handleCreatePost}>New Post</Button>
						</div>}
					<InfoBox
						dismissable={true}
						content={`This is the place to discuss all things ${NETWORK}. Anyone can start a new discussion.`}
						name='discussionsInfo'
						title='About Discussions'
					/>
					{currentUser.id && currentUser.addresses?.length !== 0 && !currentUser.defaultAddress &&
						<DefaultAddressInfoBox />}
				</Grid.Column>
			</Grid>
		</div>
	);

};

export default styled(Discussions)`

	@media only screen and (max-width: 768px) {

		.mainButtonContainer {
			margin: 0rem;
		}
	}

	@media only screen and (max-width: 991px) and (min-width: 768px) {
		.ui[class*="tablet reversed"].grid {
			flex-direction: column-reverse;
		}

		h1 {
			padding: 0 1rem;
		}

		.mainButtonContainer {
			margin-top: 1rem!important;
		}
	}

	@media only screen and (max-width: 576px) {
		h1 {
			font-size: 2.1rem;
			margin: 3rem 1.5rem 1rem 1.5rem;
		}

		h2 {
			margin-left: 1.5rem;
		}

		.mainButtonContainer {
			align-items: stretch!important;
			margin: 0 1rem!important;

			.newPostButton {
				padding: 0.8rem 1rem;
				border-radius: 0.5rem;
			}
		}
	}

	.mainButtonContainer {
		align-items: flex-start;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-bottom: 2rem;
	}
`;