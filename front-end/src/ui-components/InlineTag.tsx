// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import { Label, LabelProps } from 'semantic-ui-react';

const InlineTag = (props: LabelProps) => {return <Label {...props}></Label>;};

export default styled(InlineTag)`
    &.ui.label {
        font-size: xs;
        font-weight: 500;
        background-color: grey_light;
        color: black_text;
        border-radius: 0.2rem;
        letter-spacing: 0.05rem;
        padding: 0.4rem 0.6rem;
        margin: 0 0.4rem;
    }
`;
