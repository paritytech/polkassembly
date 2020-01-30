import * as React from 'react';
import { Icon, Grid } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';
import CreationLabel from '../ui-components/CreationLabel';
import StatusTag from '../ui-components/StatusTag';

interface DiscussionProps {
    className?: string
    comments?: string
    created_at: Date
    displayname?: string | null
    onchainId?: number | null
    status?: string | null
	title: string
	topic: string
    username: string
}

const Discussion = function ({
	className,
	comments,
	created_at,
	displayname,
	onchainId,
	status,
	title,
	username
}:DiscussionProps) {

	return (
		<div className={className}>
			<Grid>
				<Grid.Column width={1}>
					<h2>#{onchainId}</h2>
				</Grid.Column>
				<Grid.Column width={11}>
					<h4 className={'proposalTitle'}>{title}</h4>
					<CreationLabel
						created_at={created_at}
						displayname={displayname}
						username={username}
					/>
					<ul>
						<li><Icon name='comment' /> {comments} comments</li>
					</ul>
				</Grid.Column>
				<Grid.Column className={'statusTag'} width={4}>
					<StatusTag status={status}></StatusTag>
				</Grid.Column>
			</Grid>
		</div>
	);
};

export default styled(Discussion)`
    padding: 1.2rem 1.5rem;
    background-color: white;
	border: 1px solid #EEE;
	&:hover {
		border-style: solid;
		border-width: 1px;
		border-color: grey_secondary;
		text-decoration: none;
	}
    .statusTag {
        text-align: right;
    }
    h4 {
        color: black_primary;
        display: block;
        font-weight: 500;
        font-size: lg;
		margin-bottom: 0.3rem; 
        margin-bottom: 0.3rem; 
		margin-bottom: 0.3rem; 
	}
	.creationlabel {
		display: block;
	}
    ul {
        color: grey_secondary;
        font-size: xs;
        font-weight: 500;
        margin-top: 0.8rem;
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
