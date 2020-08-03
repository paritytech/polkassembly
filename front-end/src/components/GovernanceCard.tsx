// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import * as React from 'react';
import { Icon, Responsive, Segment } from 'semantic-ui-react';
import BlockCountdown from 'src/components/BlockCountdown';
import { noTitle } from 'src/global/noTitle';
import useCurrentBlock from 'src/hooks/useCurrentBlock';

import OnchainCreationLabel from '../ui-components/OnchainCreationLabel';
import StatusTag from '../ui-components/StatusTag';

interface GovernanceProps {
	address: string
	className?: string
	comments?: string
	created_at?: Date
	end?: number
	method?: string
	onchainId?: string | number | null
	status?: string | null
	tipReason?: string
	title?: string | null
	topic: string
}

const GovernanceCard = function ({
	address,
	className,
	comments,
	end,
	method,
	onchainId,
	status,
	tipReason,
	title,
	topic
}:GovernanceProps) {
	const mainTitle = <h4 className={tipReason ? 'tipTitle' : ''}><div>{method || tipReason ||  title || noTitle}</div></h4>;
	const subTitle = title && tipReason && method && <h5>{title}</h5>;
	const currentBlock = useCurrentBlock() || 0;
	end = end || 0;

	return (
		<div className={className}>
			<Segment.Group horizontal>
				{
					!tipReason && (
						<Segment className='onchain_id'>
							<h5>#{onchainId}</h5>
						</Segment>
					)
				}
				<Segment>
					<Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
						<div className='title-wrapper'>
							{mainTitle}
							{subTitle}
						</div>
						<OnchainCreationLabel
							address={address}
							topic={topic}
						/>
						{status && <StatusTag className='statusTag' status={status}/>}
					</Responsive>
					<Responsive minWidth={Responsive.onlyTablet.minWidth}>
						<div className='title-wrapper'>
							{mainTitle}
							<OnchainCreationLabel
								address={address}
								topic={topic}
							/>
						</div>
						{status && <StatusTag className='statusTag' status={status}/>}
						{subTitle}
					</Responsive>
					<ul>
						{end > currentBlock && <li><Icon name='clock'/><BlockCountdown endBlock={end}/> remaining</li>}
						<li><Icon name='comment' /> {comments} comments</li>
					</ul>
				</Segment>
			</Segment.Group>
		</div>
	);
};

export default styled(GovernanceCard)`
	padding: 2rem 3rem 1.5rem 3rem;
	background-color: white;
	border-radius: 3px;
	box-shadow: box_shadow_card;
	transition: box-shadow .1s ease-in-out;

	&:hover {
		box-shadow: box_shadow_card_hover;
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

	.statusTag{
		position: absolute;
		top: 0;
		right: 0;
	}

	.title-wrapper {
		max-width: calc(100% - 10rem);
	}

	h4, h5 {
		font-family: font_default;
		display: block;
		margin-bottom: 0.6rem;
	}

	h4 {
		font-size: lg;
		display: inline-flex;
		margin-right: 0.6rem;
		line-height: 1.2;
	}

	h4.tipTitle {
		max-width: 55%;

		& > div {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}

	h5 {
		font-size: md;
		line-height: 1.4;
	}

	.originLabel {
		display: inline-flex;
		font-size: sm;
		color: black_text;
	}

	.address, .topic {
		margin-left: 0.6rem;
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

		h4.tipTitle {
			max-width: 100%;
		}

		h5 {
			font-size: sm;
			line-height: 1.2;
		}

		.statusTag {
			padding: 0.2rem 0.4rem !important;
			font-size: 1rem!important;
		}

		.title-wrapper {
			max-width: calc(100% - 9rem);
		}
	}
`;
