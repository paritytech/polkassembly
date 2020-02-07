import styled from '@xstyled/styled-components';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Grid } from 'semantic-ui-react';

import { UserDetailsContext } from '../../context/UserDetailsContext';
import DiscussionsContainer from './Discussions';
import Button from '../../ui-components/Button';

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
					<div className='mainButtonContainer'>
						{currentUser.id && <Button primary className={'newPostButton'} onClick={handleCreatePost}>New Post</Button>}
					</div>
				</Grid.Column>
			</Grid>
		</Container>
	);

};

export default styled(Discussions)`

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