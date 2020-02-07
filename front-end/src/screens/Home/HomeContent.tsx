import React, { useContext } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import styled from 'styled-components';

import { UserDetailsContext } from '../../context/UserDetailsContext';
/* import { LatestPostsQuery } from '../../generated/graphql'; */
import { LatestProposalPostsQuery } from '../../generated/graphql';
import { useRouter } from '../../hooks';
import Button from '../../ui-components/Button';
import DiscussionContainer from './LatestDiscussion';
import ProposalContainer from './LatestProposal';
import ReferendumContainer from './LatestReferendum';

interface Props {
  className?: string
  data: LatestProposalPostsQuery
}

const HomeContent = ({ className }: Props) => {
	const { history } = useRouter();
	const currentUser = useContext(UserDetailsContext);
	const handleCreatePost = () => {
		history.push('/post/create');
	};

	return (
		<Container className={className}>
			<Grid stackable reversed='mobile tablet'>
				<Grid.Column mobile={16} tablet={16} computer={10}>
					<h1>Latest Activity</h1>
					<h2>Current Referendum</h2>
					<ReferendumContainer className='referendumContainer'/>
					<h2>Latest Proposal</h2>
					<ProposalContainer className='proposalContainer'/>
					<h2>Latest Discussion</h2>
					<DiscussionContainer className='discussionContainer'/>
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

export default styled(HomeContent)`

	.referendumContainer, .proposalContainer, .discussionContainer {
		margin-bottom: 3rem;
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
		h1, h2 {
			margin-left: 1.5rem!important;
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

	li {
        list-style-type: none;
    }

	.mainButtonContainer {
		align-items: flex-start;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
`;