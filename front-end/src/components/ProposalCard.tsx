import * as React from 'react';
import { Icon, Segment } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';
import CreationLabel from '../ui-components/CreationLabel';
import VotingBar from '../ui-components/VotingBar';
import StatusTag from '../ui-components/StatusTag';

const ProposalCard = styled.div`
    padding: 2rem 3rem 1.5rem 3rem;
    background-color: white;
	border: 1px solid #EEE;

	&:hover {
		border-style: solid;
		border-width: 1px;
		border-color: grey_secondary;
		text-decoration: none;
	}

	.ui.horizontal.segments {
		box-shadow: none;
		border: none;
		margin: 0.5rem 0;
	}

	.ui.segment {
		padding: 0;
	}

	.ui.horizontal.segments>.segment {
		border-left: none;
	}

	.onchain_id {
		max-width: 7rem;
	}

    h4 {
        color: black_primary;
        font-weight: 500;
        font-size: lg;
		margin-bottom: 0.3rem; 
		display: inline-block;
	}

	.titel {
		display: inline-block;
		float: left;
	}

	.status_tag {
		float: right;
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

export interface ProposalProps {
  authorUsername: string
  created_at: Date
  comments?: string
  proposal_onchain_id: string
  title: string
}

export default function Proposal ({
	authorUsername,
	created_at,
	comments,
	proposal_onchain_id,
	title
}:ProposalProps) {

	return (
		<ProposalCard>
			<Segment.Group horizontal>
				<Segment className='onchain_id'>
					<h4>#{proposal_onchain_id}</h4>
				</Segment>
				<Segment>
					<h4 className='title'>{title}</h4>
					<StatusTag className='status_tag' status='cancelled'></StatusTag>
					<CreationLabel
						created_at={created_at}
						username={authorUsername}
					/>
					<VotingBar
						percent='42'
						threshold='72'
						/*value='Yes Votes' */
					/>
					<ul>
						<li><Icon name='comment' /> {comments} comments</li>
						<li><Icon name='certificate' /> {comments} KSM deposited</li>
					</ul>
				</Segment>
			</Segment.Group>
		</ProposalCard>
	);
}