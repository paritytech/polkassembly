import { Label } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';

export const Tag = styled(Label)`
    &.ui.label {
        font-size: xs;
        font-weight: 500;
        background-color: black_primary;
        color: white;
        border-radius: 0.2rem;
        letter-spacing: 0.05rem;
    }
`;