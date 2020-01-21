import * as React from 'react';
import { Icon, Grid } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';
import CreationLabel from '../ui-components/CreationLabel';

const ProposalCard = styled.div`
    padding: 2rem 3rem 1.5rem 3rem;
    background-color: white;
    border: 1px solid #EEE;
    h4 {
        color: black_primary;
        font-weight: 500;
        font-size: 1.8rem;
        margin-bottom: 0.3rem; 
    }
    ul {
        color: grey_secondary;
        font-size: 1rem;
        font-family: 'Roboto Mono';
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
			<Grid>
				<Grid.Column width={2}>
					<h4>#{proposal_onchain_id}</h4>
				</Grid.Column>
				<Grid.Column width={14}>
					<h4>{title}</h4>
					<CreationLabel
						created_at={created_at}
						username={authorUsername}
					/>
					<ul>
						<li><Icon name='comment' /> {comments} comments</li>
						<li><Icon name='certificate' /> {comments} KSM deposited</li>
					</ul>
				</Grid.Column>
			</Grid>
		</ProposalCard>
	);
}