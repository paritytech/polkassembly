import React from 'react';
import { Button as SUIButton, ButtonProps } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';

const Button = (props : ButtonProps) => {
	return <SUIButton {...props} />;
};

export default styled(Button)`
	&.ui.button, &.active, &:active  {   
		font-family: font_mono;
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
		&.ui.primary.negative.button, &.ui.basic.negative.button {
			background-color: white;
			color: red_primary!important;
			box-shadow: 0 0 0 1px inset !important;
			&:hover, &:focus {
				background-color: red_light!important;
				color: red_secondary!important;
				outline: none;
				box-shadow: 0 0 0 1px inset !important;
			}
		}
		&.ui.secondary.button {
			background-color: white;
			color: grey_primary;
			box-shadow: 0 0 0 1px #B5AEAE inset !important;
			&:hover, &:focus {
				color: black_text;
				background-color: grey_light;
				box-shadow: 0 0 0 1px #706D6D inset !important;
				outline: none;
			}
		}
		&.ui.secondary.negative.button {
			background-color: white;
			color: red_secondary;
			box-shadow: 0 0 0 1px inset !important;
			&:hover, &:focus {
				background-color: red_secondary;
				color: white;
				box-shadow: 0 0 0 1px #A6ACB3 inset !important;
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