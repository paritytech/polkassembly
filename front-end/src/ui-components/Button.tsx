import React from 'react';
import { Button as SUIButton, ButtonProps } from 'semantic-ui-react';
import styled from 'styled-components';

const Button = (props : ButtonProps) => {
	return <SUIButton {...props} />;
};

export default styled(Button)`
	&.ui.button, &.active, &:active  {   
		font-family: 'Roboto Mono';
		font-size: 1.45rem;
		font-weight: 500;
		text-transform: uppercase;
		border-radius: 0.3rem;
		border: none;
		padding: 0.7rem 1rem;
		&.ui.primary.button {
			background-color: #FF5A47;
			color: #FFF;
			&:hover, &:focus {
				background-color: #D94C3D;
				color: #FFF;
				outline: none;
			}
		}
		&.ui.primary.negative.button {
			background-color: #FFF;
			color: #FF5A47;
			border: 0.1rem solid #FF5A47;
			&:hover, &:focus {
				background-color: #FFF1F0;
				color: #D94C3D;
				border: 0.1rem solid #D94C3D;
				outline: none;
			}
		}
		&.ui.secondary.button {
			background-color: #FFF;
			color: #FF5A47;
			border: 0.1rem solid #FF5A47;
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
			background-color: #FFF;
			color: #706D6D;
			font-size: 1.2rem;
			border: none;
			padding: 0.7rem 0.7rem;
			&:hover{
				background-color: #EEE;
				border: none;
			}
		}
		&.ui.button>.icon:not(.button) {
			opacity: 1;
		}
	}
`;