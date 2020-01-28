import * as React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';
import CreationLabel from '../ui-components/CreationLabel';

const DiscussionCard = styled.div`
    padding: 2rem 3rem 1.5rem 3rem;
    background-color: white;
    border-style: solid;
    border-width: 1px;
    border-color: grey_light;
    h4 {
        color: black_primary;
        font-weight: 500;
        font-size: 1.6rem;
        margin-bottom: 0.3rem; 
    }
    ul {
        color: grey_secondary;
        font-size: 1rem;
        font-family: 'Roboto';
        font-weight: 500;
        li {
            display: inline;
            margin-right: 1.5rem;
        }
    }

    @media only screen and (max-width: 576px) {
        & {
            padding: 1.2rem 1.5rem;       
        }
    }
`;

export interface DiscussionProps {
  /* authorUsername: string */
  created_at: Date
  displayname?: string
  comments?: string
  title: string
  username: string
}

export default function Discussion ({
	/* authorUsername, */
	created_at,
	displayname,
	comments,
	title,
	username
}:DiscussionProps) {

	return (
		<DiscussionCard>
			<h4>{title}</h4>
			<CreationLabel
				created_at={created_at}
				displayname={ displayname ? displayname : undefined }
				username={username }
				/* username={authorUsername} */
			/>
			<ul>
				<li><Icon name='comment' /> {comments} comments</li>
			</ul>
		</DiscussionCard>
	);
}