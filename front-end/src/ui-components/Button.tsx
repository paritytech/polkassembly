import React from 'react';
import { Button as SemanticButton, ButtonProps as SUIButtonProps } from 'semantic-ui-react';
import styled from 'styled-components';

type ButtonProps = SUIButtonProps;

const PrimaryButton = styled(SemanticButton).attrs({
	className: 'primary'
})`
	&.ui.button, &.ui.primary.button, &.active, &:active  {   
        font-family: 'Roboto Mono';
		font-size: 1.45rem;
		font-weight: 500;
		text-transform: uppercase;
		border-radius: 0.3rem;
		border: none;
		padding: 0.7rem 1rem;
        color: #fff;
        background-color: #EB5757;
    }

    &:hover, &:focus, &.ui.primary.button:hover, &.ui.primary.button:focus {
        background-color: #CC3D3D;
        color: #FFF;
        outline: none;
    }
`;

const SecondaryButton = styled(SemanticButton).attrs({
	className: 'secondary'
})`
    &.ui.button, &.active, &:active {   
        font-family: 'Roboto Mono';
        font-size: 1.45rem;
        font-weight: 500;
        text-transform: uppercase;
        border-radius: 0.3rem;
        border: 2px solid #EB5757;
        padding: 0.7rem 1rem;
		color: #EB5757;
		background-color: #FFF;
    }

    &:hover, &:focus, &.ui.secondary.button:hover, &.ui.secondary.button:focus {
        background-color: #CC3D3D;
        color: #FFF;
        border: 2px solid #CC3D3D;
        outline: none;
    }
`;

export default function Button (props: ButtonProps): React.ReactElement {
	return (
		props.primary ? <PrimaryButton {...props} /> : <SecondaryButton {...props} />
	)
}