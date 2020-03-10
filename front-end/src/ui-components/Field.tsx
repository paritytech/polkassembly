// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import { Form as SUIForm, FormFieldProps as SUIFormFieldProps } from 'semantic-ui-react';
import styled from 'styled-components';

function Field (props : SUIFormFieldProps){
	return <SUIForm.Field {...props}/>;
}

export default styled(Field)`
    margin-bottom: 1.2rem;
`;
