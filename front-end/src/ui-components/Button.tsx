import React from 'react';
import { Button as SUIButton, ButtonProps, SemanticICONS } from 'semantic-ui-react';
import styled from 'styled-components';

interface Props extends ButtonProps {
	iconName?: SemanticICONS;
}

const Button = (props : Props) => {
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
			background-color: #EB5757;
			&:hover, &:focus {
				background-color: #CC3D3D;
				color: #FFF;
				outline: none;
			}
		}
		&.ui.secondary.button {
			color: #EB5757;
			background-color: #FFF;
			border: 2px solid #EB5757;
			&:hover, &:focus {
				background-color: #CC3D3D;
				color: #FFF;
				border: 2px solid #CC3D3D;
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
