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
		letter-spacing: 0.06rem;
		border-radius: button_radius;
		border: none;
		padding: 0.8rem 1.6rem;
		&.ui.tiny.button {
			font-size: sm;
			padding: 0.6rem 1.2rem;
		}
		&.ui.small.button {
			font-size: md;
			padding: 0.6rem 1.2rem;
		}
		&.ui.medium.button {
			font-size: md;
			padding: 0.8rem 1.6rem;
		}
		&.ui.primary.button {
			background-color: red_primary;
			color: black_primary;
			&:hover, &:focus {
				background-color: red_secondary;
				outline: none;
			}
		}
		&.ui.primary.negative.button {
			background-color: white;
			color: red_primary;
			border-style: solid;
			border-color: red_primary;
			border-width: 0.1rem;
			&:hover, &:focus {
				background-color: red_light;
				color: red_secondary;
				border-style: solid;
				border-color: red_secondary;
				border-width: 0.1rem;
				outline: none;
			}
		}
		&.ui.secondary.button {
			background-color: white;
			color: grey_primary;
			border-style: solid;
			border-color: grey_secondary;
			border-width: 0.1rem;
			&:hover, &:focus {
				color: text;
				background-color: grey_light;
				border-style: solid;
				border-color: grey_primary;
				border-width: 0.1rem;
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
				border-style: solid;
				border-color: #E66557;
				border-width: 0.1rem;
				outline: none;
			}	
		}
		&.ui.social.button {
			background-color: white;
			color: grey_primary;
			font-size: sm;
			border: none;
			padding: 0.7rem 0.7rem;
			text-transform: none;
			letter-spacing: 0rem;
			border-radius: 0.2rem;
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
			text-transform: none;
			letter-spacing: 0rem;
			&:hover {
				background-color: red_light;
				border: none;
			}
		}
	}
`;