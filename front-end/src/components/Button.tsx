import { Button as SemanticButton } from 'semantic-ui-react'
import styled from 'styled-components';

export const Button = styled(SemanticButton).attrs({
	className: 'button'
})`
	
	&.ui.button {   
        font-family: 'Roboto Mono';
		font-size: 1.125rem;
		font-weight: 500;
		text-transform: uppercase;
		border-radius: 0.188rem;
		border: none;
		padding: 0.625rem 0.938rem;
		color: #fff;
    }

    &.ui.primary.button {   
        background-color: #EB5757;
    }

    &.ui.primary.button:hover, &.ui.primary.button:focus {
        background-color: #CC3D3D;
        outline: none;
    }

    &.secondary {
        background-color: #FFF;
        color: #EB5757;
        border: 2px solid #EB5757;
    }
    
    &.secondary:hover, &.secondary:focus {
        background-color: #CC3D3D;
        color: #FFF;
        border: 2px solid #CC3D3D;
    }

    &.active, &:active {
        background-color: #EB5757;
    }

    &.disabled, &:disabled {
        background-color: #D1A1A1;
    }
`;