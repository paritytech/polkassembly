import React from 'react';
import { Button as SUIButton, ButtonProps } from 'semantic-ui-react';
import styled from 'styled-components';

const Button = (props : ButtonProps) => {
	return <SUIButton {...props} />
}

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
			color: #fff;
			background-color: #FF5A47;
			&:hover, &:focus {
				background-color: #D94C3D;
				color: #FFF;
				outline: none;
			}
		}
		&.ui.secondary.button {
			color: #FF5A47;
			background-color: #FFF;
			border: 0.15rem solid #FF5A47;
			&:hover, &:focus {
				background-color: #D94C3D;
				color: #FFF;
				border: 0.15rem solid #D94C3D;
				outline: none;
			}
		}
		&.ui.social.button {
			background-color: #FFF;
			color: #706D6D;
			font-size: 1.2rem;
			border: none;
			&:hover{
				background-color: #EEE;
				border: none;
			}
		}
	}
`;
