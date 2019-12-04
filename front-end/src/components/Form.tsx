import React from 'react';
import { Form as SUIForm, FormProps as SUIFormProps } from 'semantic-ui-react';
import styled from 'styled-components';

type FormProps = SUIFormProps;

const StyledForm = styled(SUIForm)`
    background-color: #FFF;
    padding: 1.25rem 1.875rem 2.5rem 1.875rem;
    margin-top: 2.5rem;
    border: 1px solid #EEE;
    h3 {
        margin-bottom: 1.875rem;
    }
    .field {
        label {
            font-weight: 500;
        }
    }
    &.ui.form {
        .field {
            > label {
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
            font-size: 0.875rem;
            color: #282828;
            border: 1 px solid #EEE;
            border-color: #EEE;
            border-radius: 0rem;
            text-indent: 0rem;
            padding: 0.625rem 0.625 0.5rem 0.625;
            &:focus {
                font-family: 'Roboto';
                font-size: 0.875rem;
                color: #282828;
                border: 1 px solid #EEE;
                border-radius: 0rem;
		    }
        }

        textarea {
            font-family: 'Roboto';
            font-size: 0.875rem;
            color: #282828;
            border: 1 px solid #EEE;
            border-color: #EEE;
            border-radius: 0rem;
            text-indent: 0rem;
            padding: 0.625rem 0.625 0.5rem 0.625;
            &:focus {
                border-color: #EEE;     
            }
        }
    }
`;

const StyledInput = styled(SUIForm.Input).attrs({
	type: 'text'
})`
    font-family: 'Roboto';
    font-size: 0.875rem;
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
		font-size: 0.75rem;
		margin: 0.5rem 0 0 0;
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