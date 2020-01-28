import * as React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';
import CreationLabel from '../ui-components/CreationLabel';

interface DiscussionProps {
    className?: string
    created_at: Date
    displayname?: string | null
    comments?: string
	title: string
	topic?: string | null
    username: string
}

const Discussion = function ({
	className,
	created_at,
	displayname,
	comments,
	title,
	topic,
	username
}:DiscussionProps) {

	return (
		<div className={className}>
			<h4>{title}</h4>
			<CreationLabel
				created_at={created_at}
				displayname={displayname}
				username={username}
			/>
			<ul>
				<li><Icon name='comment' /> {comments} comments - {topic || ''}</li>
			</ul>
		</div>
	);
};

export default styled(Discussion)`
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
