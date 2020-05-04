// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import { Form as SUIForm, FormInputProps as SUIFormInputProps } from 'semantic-ui-react';

type Props = SUIFormInputProps & {
    invalid?: boolean
}

function Input ({ className, invalid = false, ...props } : Props){
	return <SUIForm.Input className={invalid ? className : `${className} invalid`} { ...props}/>;
}

export default styled(Input)`
    .ui.input>input {
        font-family: font_default;
        font-size: input_text_size;
        border-width: 1px;
        border-color: grey_light;
        border-radius: 0rem;
        text-indent: 0rem;
        padding: 1rem;
        margin-bottom: 1.2rem;
        &:focus {
            font-family: font_default;
            font-size: input_text_size;
            color: black_text;
            border-color: grey_primary;
            border-radius: 0rem;
        }
        &:hover {
            border-color: grey_secondary;
        }
    }

    &.invalid > .ui.input > input {
        color: red_primary !important;
        border-color: red_primary !important;
    }
`;
