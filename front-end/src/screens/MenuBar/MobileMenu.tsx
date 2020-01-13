import React, { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon, Sidebar } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';

interface Props {
	children?: ReactNode,
	className?: 'mobilemenu'
}

const MobileMenu = ({ children, className }:Props) => {
	const [leftVisible, setLeftVisible] = useState(false);
	const [rightVisible, setRightVisible] = useState(false);

	const handleLeftToggle = () => {
		setLeftVisible(true);
	};

	const handleRightToggle = () => {
		setRightVisible(true);
	};

	const handleClose = () => {
		if (leftVisible) setLeftVisible(false);
		if (rightVisible) setRightVisible(false);
	};

	return (
		<Sidebar.Pushable className={className}>
			<Sidebar
				as={Menu}
				animation="overlay"
				direction='left'
				icon="labeled"
				inverted
				vertical
				visible={leftVisible}
			>
				<Menu.Item as={Link} to="/discussions">Discussions</Menu.Item>
				<Menu.Item as={Link} to="/proposals">Proposals</Menu.Item>
			</Sidebar>
			<Sidebar
				as={Menu}
				animation="overlay"
				direction='right'
				icon="labeled"
				inverted
				vertical
				visible={rightVisible}
			>
				<Menu.Item as={Link} to="/settings">Settings</Menu.Item>
			</Sidebar>
			<Sidebar.Pusher
				dimmed={leftVisible || rightVisible}
				onClick={handleClose}
				style={{ minHeight: '100vh' }}
			>
				<Menu fixed="top" inverted>
					<Menu.Item onClick={handleLeftToggle}>
						<Icon name="sidebar" />
					</Menu.Item>
					<Menu.Item as={Link} to="/" id='title'>
						Polkassembly
					</Menu.Item>
					<Menu.Item onClick={handleRightToggle}>
						<Icon name="user" />
					</Menu.Item>
				</Menu>
				{children}
			</Sidebar.Pusher>
		</Sidebar.Pushable>
	);
};

export default styled(MobileMenu)`
	.ui.menu, .ui.inverted.menu {
		font-family: 'Roboto Mono';
		font-weight: 500;
		letter-spacing: 1.1;

		#title {
			text-transform: uppercase;
		}

		.item {
			font-size: 1.45rem;
			color: grey_secondary !important;
		}
	}
`;