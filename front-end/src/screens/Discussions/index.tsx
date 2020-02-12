import styled from '@xstyled/styled-components';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Grid } from 'semantic-ui-react';

import { UserDetailsContext } from '../../context/UserDetailsContext';
import DiscussionsContainer from './Discussions';
import Button from '../../ui-components/Button';
import InfoBox from '../../ui-components/InfoBox';

const Discussions = ({ className } : {className?: string}) => {
	const history = useHistory();
	const currentUser = useContext(UserDetailsContext);
	const handleCreatePost = () => {
		history.push('/post/create');
	};

	return (
		<Container className={className}>
			<Grid stackable reversed='mobile tablet'>
				<Grid.Column mobile={16} tablet={16} computer={10}>
					<h1>Latest Discussions</h1>
					<DiscussionsContainer/>
				</Grid.Column>
				<Grid.Column mobile={16} tablet={16} computer={6}>
					<InfoBox
						dismissable={true}
						content='This is the place to discuss all things Kusama. Anyone can start a new discussion.'
						name='discussionsInfo'
						title='About Discussions'
					/>
					<div className='mainButtonContainer'>
						{currentUser.id && <Button primary className={'newPostButton'} onClick={handleCreatePost}>New Post</Button>}
					</div>
				</Grid.Column>
			</Grid>
		</Container>
	);

};

export default styled(Discussions)`

	@media only screen and (max-width: 768px) {

		h1 {
			margin-left: 3rem;
		}

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
		h1, h2 {
			margin-left: 1.5rem;
		}

		h1 {
			font-size: 2.1rem;
		}

		.mainButtonContainer {
			align-items: stretch!important;
			margin: 1rem!important;

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
	}
`;