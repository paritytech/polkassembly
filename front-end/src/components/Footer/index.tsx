// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import * as moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

interface Props {
	className?: string
}

const Footer = ({ className }:Props ): JSX.Element => {
	const navigateToIssues = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		event.preventDefault();
		window.open('https://github.com/paritytech/polkassembly/issues', '_blank');
	};
	return (
		<footer className={className}>
			<Menu>
				<Menu.Item>
					&copy; {moment.utc().year()} Parity Technologies
				</Menu.Item>
				<Menu.Item as={Link} to="/terms-and-conditions">
					Terms &amp; Conditions
				</Menu.Item>
				<Menu.Item as={Link} to="/terms-of-website">
					Terms of Website
				</Menu.Item>
				<Menu.Item as={Link} to="/privacy">
					Privacy Policy
				</Menu.Item>
				<Menu.Item as={Link} onClick={navigateToIssues} to=''>
					Report an Issue
				</Menu.Item>
			</Menu>
		</footer>
	);
};

export default styled(Footer)`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 4rem;

    .ui.menu {
        background-color: black_full;
        font-family: font_default;
        padding: 1rem 3rem;
        border-radius: 0rem;
        height: 100%;

        .item {
            color: grey_secondary;
			font-size: sm;
			padding: 1rem;
            &:hover {
                color: white;
            }
        }

        @media only screen and (max-width: 768px)  {
            flex-direction: column;
            height: auto;
        }
    }
`;
