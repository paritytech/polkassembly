import styled from '@xstyled/styled-components';
import * as moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

interface Props {
    className?: string
}

const Footer = ({ className }:Props ): JSX.Element => {
    return (
        <footer className={className}>
            <Menu>
                <Menu.Item>
                    &copy; {moment.utc().year()} Legal Entity
                </Menu.Item>
                <Menu.Item as={Link} to="/terms">
                    Terms &amp; Conditions
                </Menu.Item>
                <Menu.Item as={Link} to="/privacy">
                    Privacy Policy
                </Menu.Item>
            </Menu>
        </footer>
    )
}

export default styled(Footer)`
    bottom: 0;
    width: 100%;
    height: 8rem;

    .ui.menu {
        background-color: black_primary;
        font-family: font_default;
        padding: 2rem 3rem;
        border-radius: 0rem;
        height: 100%;

        .item {
            color: grey_secondary;
            font-size: sm;
            &:hover {
                color: white;
            }
        }
    }
`;