import React from 'react';
import { Form as SUIForm, FormProps as SUIFormProps } from 'semantic-ui-react';
import styled from 'styled-components';

type FormProps = SUIFormProps;

const StyledForm = styled(SUIForm)`
    background-color: #FFF;
    padding: 2rem 3rem 3rem 3rem;
    margin-top: 4rem;
    border: 1px solid #EEE;

    h3 {
        margin-bottom: 3rem;
    }
    
    .field {
        label {
            font-weight: 500;
        }
    }

    &.ui.form {
        .field {
            > label {
                font-size: 1.2rem;
                font-weight: 500;
            }
        }

        .fields {
            margin-bottom: 1.875rem;

            @media only screen and (max-width: 767px) {
                margin-bottom: 1.25rem;
            }
        }

        input:not([type]), input[type=date], input[type=datetime-local], input[type=email], 
        input[type=file], input[type=number], input[type=password], input[type=search], input[type=tel], 
        input[type=text], input[type=time], input[type=url] {
            font-family: 'Roboto';
            font-size: 1.2rem;
            color: #282828;
            border: 1 px solid #EEE;
            border-color: #EEE;
            border-radius: 0rem;
            text-indent: 0rem;
            padding: 0.625rem 0.625 0.5rem 0.625;
            &:focus {
                font-family: 'Roboto';
                font-size: 1.2rem;
                color: #282828;
                border: 1 px solid #EEE;
                border-radius: 0rem;
		    }
        }

        textarea {
            font-family: 'Roboto';
            font-size: 1.4rem;
            color: #282828;
            border-color: #EEE;
            border-radius: 0rem;
            text-indent: 0rem;
            padding: 0.625rem 0.625 0.5rem 0.625;
            &:focus {
                border-color: #EEE;     
            }
        }
        
    @media only screen and (max-width: 576px) {
        margin-top: 0rem;
        padding: 2rem;
    }
`;

const StyledInput = styled(SUIForm.Input).attrs({
	type: 'text'
})`
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

const StyledField = styled(SUIForm.Field)`
    margin-bottom: 1.25rem;

    .text-muted {
		font-size: 1.2rem;
        margin: 0;

        & > a {
            font-size: 1.0rem;
            color: #6c757d !important;
            &:hover {
                border-bottom: none!important;
            }
        }
    }
`;

const StyledGroup = styled(SUIForm.Group)`
    margin-bottom: 1.25rem;
`;

const StyledTextArea = styled(SUIForm.TextArea)`
    textarea {
        border-radius: 0rem;
    }
`;

export function Form(props: FormProps): React.ReactElement {
	return <StyledForm {...props} />;
}

Form.Input = StyledInput;
Form.Field = StyledField;
Form.Group = StyledGroup;
Form.TextArea = StyledTextArea;