import React, { ReactNode } from 'react';
import { Label, SemanticICONS } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';

interface Props{
	children?: ReactNode,
	className?: string,
	content?: string,
	icon?: string,
	status?: string | null
}

const StatusTag = ({ children, className, content, status }: Props) => {
	let icon: SemanticICONS = 'circle';

	switch (status){
	case 'Passed':
		icon = 'circle';
		break;
	case 'Started':
		icon = 'circle';
		break;
	case 'Proposed':
		icon = 'circle';
		break;
	case 'Enacted':
		icon = 'check';
		break;
	case 'NotPassed':
		icon = 'times';
		break;
	case 'Cancelled':
		icon = 'times';
		break;
	case 'Vetoed':
		icon = 'times';
		break;
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

export default styled(StatusTag).attrs(( { status }:Props ) => ({
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
        &.Proposed {
            border-color: blue_primary;
            color: blue_primary;
        }
        &.Enacted {
            border-color: green_primary;
            color: green_primary;
        }
        &Ccancelled, &.NotPassed, &.Vetoed {
            border-color: red_primary;
            color: red_primary;
        }
    }
`;