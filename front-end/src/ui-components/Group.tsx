// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import { Form as SUIForm, FormGroupProps as SUIFormGroupProps } from 'semantic-ui-react';

function Group (props : SUIFormGroupProps){
	return <SUIForm.Group {...props}/>;
}

export default styled(Group)`
    margin-bottom: 1.25rem;
`;
