import React from 'react';
import { Button as SUIButton, ButtonProps } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';

const Button = (props : ButtonProps) => {
	return <SUIButton {...props} />;
};

export default styled(Button)`
	&.ui.button, &.active, &:active  {   
		font-family: 'Roboto Mono';
		font-size: md;
		font-weight: 500;
		text-transform: uppercase;
		border-radius: 0.3rem;
		border: none;
		padding: 0.7rem 1rem;
		&.ui.primary.button {
			background-color: red_primary;
			color: white;
			&:hover, &:focus {
				background-color: red_secondary;
				color: white;
				outline: none;
			}
		}
		&.ui.primary.negative.button {
			background-color: white;
			color: red_primary;
			border: 0.1rem solid #FF5A47;
			&:hover, &:focus {
				background-color: red_light;
				color: red_secondary;
				border: 0.1rem solid #D94C3D;
				outline: none;
			}
		}
		&.ui.secondary.button {
			background-color: white;
			color: red_primary;
			border: 0.1rem solid #FF5A47;
			&:hover, &:focus {
				background-color: red_light;
				color: red_secondary;
				border: 0.1rem solid #D94C3D;
				outline: none;
			}
		}
		&.ui.secondary.negative.button {
			background-color: white;
			color: #E65140;
			border: 0.1rem solid #E65140;
			&:hover, &:focus {
				background-color: #E66557;
				color: white;
				border: 0.1rem solid #E66557;
				outline: none;
			}	
		}
		&.ui.social.button {
			background-color: white;
			color: grey_primary;
			font-size: sm;
			border: none;
			padding: 0.7rem 0.7rem;
			&:hover{
				background-color: grey_light;
				border: none;
			}
		}
		&.ui.button>.icon:not(.button) {
			opacity: 1;
		}
		&.ui.social.negative.button {
				background-color: white;
				color: red_primary;
				font-size: sm;
				border: none;
				padding: 0.7rem 0.7rem;
			&:hover {
				background-color: red_light;
				border: none;
			}
		}
	}
`;