import { Label } from 'semantic-ui-react';
import styled from 'styled-components';

export const Tag = styled(Label)`
    &.ui.label {
        font-size: 1rem;
        font-weight: 500;
        background-color: #B5AEAE;
        color: #FFF;
        border-radius: 0.2rem;
        letter-spacing: 0.05rem;
        &:hover {
            background-color: #8C8787;
        }
    }
`;