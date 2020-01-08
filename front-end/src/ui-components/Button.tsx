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
		&.ui.secondary.button {
			color: #FF5A47;
			background-color: ${props => props.theme.colors.white};
			border: 0.15rem solid ${props => props.theme.colors.main};
			&:hover, &:focus {
				background-color: #D94C3D;
				color: ${props => props.theme.colors.white};
				border: 0.15rem solid #D94C3D;
				outline: none;
			}
		}
		&.ui.social.button {
			background-color: ${props => props.theme.colors.white};
			color: #706D6D;
			font-size: 1.2rem;
			border: none;
			&:hover{
				background-color: ${props => props.theme.colors.grey01};
				border: none;
			}
		}
	}
`;
