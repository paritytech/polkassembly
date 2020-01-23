import React, { ReactNode } from 'react';
import { Label, SemanticICONS } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';

interface Props{
	children?: ReactNode,
	className?: string,
	content?: string,
	icon?: string,
	status?: string
}

const StatusTag = ({ children, className, content, status }: Props) => {
	let icon: SemanticICONS = 'circle';

	switch (status){
	case 'tabled':
		icon = 'circle';
		break;
	case 'passed':
		icon = 'check';
		break;
	case 'enacted':
		icon = 'check';
		break;
	case 'cancelled':
		icon = 'times';
		break;
	case 'vetoed':
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
        &.tabled {
            border-color: blue_primary;
            color: blue_primary;
        }
        &.passed, &.enacted {
            border-color: green_primary;
            color: green_primary;
        }
        &.cancelled, &.vetoed {
            border-color: red_primary;
            color: red_primary;
        }
        &.seconding {
            border-color: grey_primary;
            color: grey_primary;
        }
    }
`;