// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import { Form as SUIForm, FormFieldProps as SUIFormFieldProps } from 'semantic-ui-react';

function Field (props : SUIFormFieldProps){
	return <SUIForm.Field {...props}/>;
}

export default styled(Field)`
    margin-bottom: 1.2rem;
`;
