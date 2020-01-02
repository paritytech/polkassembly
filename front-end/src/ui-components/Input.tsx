import React from 'react';
import { Form as SUIForm, FormInputProps as SUIFormInputProps } from 'semantic-ui-react';
import styled from 'styled-components';

function Input (props : SUIFormInputProps){
	return <SUIForm.Input {...props}/>;
}

export default styled(Input)`
    font-family: 'Roboto';
    font-size: 1.2rem;
    color: #282828;
    border: 1 px solid #EEE;
    border-radius: 0rem;
    padding: 0.625rem 0 0.5rem 0;
    &:focus {
        outline: 0;
        border-color: #EEE;
    }	
`;
