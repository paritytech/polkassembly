import React from 'react';
import { Form as SUIForm, FormTextAreaProps as SUIFormTextAreaProps } from 'semantic-ui-react';
import styled from 'styled-components';

function TextArea (props : SUIFormTextAreaProps){
	return <SUIForm.TextArea {...props}/>
}

export default styled(TextArea)`
    textarea {
        border-radius: 0rem;
    }
`;
