// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import * as React from 'react';
import { Icon, Segment } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';
import StatusTag from '../ui-components/StatusTag';

interface DiscussionProps {
    className?: string
    comments?: string
    created_at?: Date
    displayname?: string | null
    onchainId?: number | null
    status?: string | null
	title: string
	topic: string
    username?: string
}

const GovernanceAction = function ({
	className,
	comments,
	onchainId,
	status,
	title
}:DiscussionProps) {

	return (
		<div className={className}>
			<Segment.Group horizontal>
				<Segment className='onchain_id'>
					<h5>#{onchainId}</h5>
				</Segment>
				<Segment>
					<h4 className={'proposalTitle'}>{title}</h4>
					<ul>
						<li><Icon name='comment' /> {comments} comments</li>
					</ul>
				</Segment>
				{status &&
					<Segment className='statusSegment'>
						<StatusTag className='statusTag' status={status}/>
					</Segment>
				}
			</Segment.Group>
		</div>
	);
};

export default styled(GovernanceAction)`
	padding: 2rem 3rem 1.5rem 3rem;
    background-color: white;
	border-style: solid;
    border-width: 1px;
	border-color: grey_border;
	border-radius: 3px;
	
	&:hover {
		background-color: white_transparent;
        border-style: solid;
        border-width: 1px;
        text-decoration: none;
	}
	overflow-wrap: break-word;

	.ui.horizontal.segments {
		box-shadow: none;
		border: none;
		margin: 0.5rem 0;
		background-color: rgba(0,0,0,0);
	}
	.ui.segment {
		padding: 0;
	}
	.ui.horizontal.segments>.segment {
		border-left: none;
	}

	.onchain_id {
		min-width: 4rem!important;
		max-width: 6rem;
	}

	.statusSegment {
		min-width: 10rem!important;
		max-width: 11rem;
	}

    .statusTag{
		position: absolute;
		top: 0;
		right: 0;
	}
	
    h4, h5 {
        font-family: font_default;
        display: block;
		margin-bottom: 0.3rem; 
	}

	h4 {
		font-size: lg;
	}

	h5 {
		font-size: md;
		line-height: 1.4;
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
		
		h4 {
			font-size: md;
		}

		h5 {
			font-size: sm;
			line-height: 1.2;
		}

		.statusTag {
			padding: 0.2rem 0.4rem !important;
			font-size: 1rem!important;
		}
    }
`;
