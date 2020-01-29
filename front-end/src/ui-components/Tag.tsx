import React from 'react';
import { Label, LabelProps } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';

const Tag = (props: LabelProps) => {return <Label {...props}></Label>;};

export default styled(Tag)`
    &.ui.label {
        font-size: xs;
        font-weight: 500;
        background-color: black_primary;
        color: white;
        border-radius: 0.2rem;
        letter-spacing: 0.05rem;
    }
`;