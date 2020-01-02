import React from 'react';
import { Form as SUIForm, FormGroupProps as SUIFormGroupProps } from 'semantic-ui-react';
import styled from 'styled-components';

function Group (props : SUIFormGroupProps){
	return <SUIForm.Group {...props}/>;
}

export default styled(Group)`
    margin-bottom: 1.25rem;
`;
