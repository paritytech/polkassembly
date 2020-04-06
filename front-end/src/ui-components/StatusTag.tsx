// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { ReactNode } from 'react';
import { Label, SemanticICONS } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';

import { motionStatus, proposalStatus, referendumStatus } from 'src/global/statuses';

interface Props{
	children?: ReactNode,
	className?: string,
	content?: string,
	icon?: string,
	status: string
}

const StatusTag = ({ children, className, content, status }: Props) => {

	let icon: SemanticICONS = 'circle';

	if ([referendumStatus.PASSED,
		referendumStatus.STARTED,
		proposalStatus.PROPOSED,
		motionStatus.PROPOSED,
		motionStatus.APPROVED
	].includes(status)){
		icon = 'circle';
	}

	if ([referendumStatus.CANCELLED,
		referendumStatus.NOTPASSED,
		referendumStatus.VETOED,
		motionStatus.DISAPPROVED
	].includes(status)){
		icon = 'times';
	}

	if ([referendumStatus.EXECUTED,
		motionStatus.EXECUTED
	].includes(status)){
		icon = 'check';
	}

	return (
		<Label
			className={className}
			icon={icon}
			content={content}
			status={status}
		>
			{children}
		</Label>

	);
};

export default styled(StatusTag).attrs(( { status }: Props) => ({
	className: status,
	content: status
}))`
	&.ui.label {
		font-size: xs;
		font-weight: 500;
		background-color: white;
		color: grey_primary;
		border-style: solid;
		border-width: 1px;
		border-radius: 0.2rem;
		letter-spacing: 0.05rem;
		text-transform: capitalize;
		padding: 0.5rem 1rem;
		&.${referendumStatus.STARTED},
		&.${proposalStatus.PROPOSED},
		&.${motionStatus.PROPOSED} {
			border-color: blue_primary;
			color: blue_primary;
			background-color: blue_primary_transparent;
		}
		&.${referendumStatus.PASSED},
		&.${referendumStatus.EXECUTED},
		&.${motionStatus.EXECUTED} {
			border-color: green_primary;
			color: green_primary;
			background-color: green_primary_transparent;
		}
		&.${referendumStatus.CANCELLED},
		&.${referendumStatus.NOTPASSED},
		&.${referendumStatus.VETOED},
		&.${motionStatus.DISAPPROVED} {
			border-color: red_primary;
			color: red_primary;
			background-color: red_primary_transparent;
		}
	}
`;