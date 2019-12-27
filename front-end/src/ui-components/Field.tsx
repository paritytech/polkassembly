import React from 'react';
import { Form as SUIForm, FormFieldProps as SUIFormFieldProps } from 'semantic-ui-react';
import styled from 'styled-components';

function Field (props : SUIFormFieldProps){
	return <SUIForm.Field {...props}/>
}

export default styled(Field)`
    margin-bottom: 1.25rem;

    .text-muted {
        font-size: 1.2rem;
        margin: 0.5rem 0 0 0;
    }
`;
