import React from 'react';
import { Button as SUIButton, ButtonProps } from 'semantic-ui-react';
import styled from 'styled-components';

const Button = (props : ButtonProps) => {
	return <SUIButton {...props} />;
};

export default styled(Button)`
	&.ui.button, &.active, &:active  {   
		font-family: 'Roboto Mono';
		font-size: ${props => props.theme.fontSizes.medium};
		font-weight: 500;
		text-transform: uppercase;
		border-radius: 0.3rem;
		border: none;
		padding: 0.6rem 1.2rem;
		&.ui.primary.button {
			color: ${props => props.theme.colors.white};
			background-color: ${props => props.theme.colors.main};
			&:hover, &:focus {
				background-color: #D94C3D;
				color: ${props => props.theme.colors.white};
				outline: none;
			}
		}
		&.ui.primary.negative.button {
			background-color: ${props => props.theme.colors.white};
			color: ${props => props.theme.colors.main};
			border: 0.1rem solid ${props => props.theme.colors.main};
			&:hover, &:focus {
				background-color: #FFF1F0;
				color: #D94C3D;
				border: 0.1rem solid #D94C3D;
				outline: none;
			}
		}
		&.ui.secondary.button {
			color: ${props => props.theme.colors.main};
			background-color: ${props => props.theme.colors.white};
			border: 0.15rem solid ${props => props.theme.colors.main};
			&:hover, &:focus {
				background-color: #FFF1F0;
				color: #D94C3D;
				border: 0.1rem solid #D94C3D;
				outline: none;
			}
		}
		&.ui.secondary.negative.button {
			background-color: #FFF;
			color: #E65140;
			border: 0.1rem solid #E65140;
			&:hover, &:focus {
				background-color: #E66557;
				color: #FFF;
				border: 0.15rem solid #E66557;
				outline: none;
			}	
		}
		&.ui.social.button {
			background-color: ${props => props.theme.colors.white};
			color: #706D6D;
			font-size: 1.2rem;
			border: none;
			padding: 0.7rem 0.7rem;
			&:hover{
				background-color: ${props => props.theme.colors.grey01};
				border: none;
			}
		}
		&.ui.button>.icon:not(.button) {
			opacity: 1;
		}
	}
`;