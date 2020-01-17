import React from 'react';
import { Form as SUIForm, FormFieldProps as SUIFormFieldProps } from 'semantic-ui-react';
import styled from 'styled-components';

function Field (props : SUIFormFieldProps){
	return <SUIForm.Field {...props}/>;
}

export default styled(Field)`
    margin-bottom: 2rem;

    .text-muted {
        color: grey_primary;
        font-size: 1.2rem;
        margin-top: 1rem;
    }
`;
