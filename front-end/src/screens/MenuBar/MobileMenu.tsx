import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu, Icon, Sidebar } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';

import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useLogoutMutation } from '../../generated/auth-graphql';
import { useRouter } from '../../hooks';
import { logout } from '../../services/auth.service';

interface Props {
	children?: ReactNode,
	className?: 'mobilemenu'
}

export const NavBarChildren = ({ children }:Props) => (
	<Container>{children}</Container>
);

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

	const currentUser = useContext(UserDetailsContext);
	const [logoutMutation, { data, error }] = useLogoutMutation({ context: { uri : process.env.REACT_APP_AUTH_SERVER_GRAPHQL_URL } });
	const { history } = useRouter();
	const { setUserDetailsContextState, username } = currentUser;

	useEffect(() => {
		if (data && data.logout && data.logout.message) {
			logout(setUserDetailsContextState);
			history.push('/');
		}

		if (error) console.error(error);

	},[data, error, history, setUserDetailsContextState]);

	const handleLogout = () => {
		logoutMutation();
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
				<Menu.Item as={Link} to="/discussions"><Icon name="comments" />Discussions</Menu.Item>
				<Menu.Item as={Link} to="/proposals"><Icon name="file alternate" />Proposals</Menu.Item>
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
				{username
					?
					<>
						<Menu.Item as={Link} to="/settings"><Icon name="cog" />Settings</Menu.Item>
						<Menu.Item onClick={handleLogout}><Icon name="sign-out" />Logout</Menu.Item>
					</>
					:
					<>
						<Menu.Item as={Link} to="/login">Login</Menu.Item >
						<Menu.Item as={Link} to="/signup">Sign-up</Menu.Item >
					</>
				}
			</Sidebar>
			<Sidebar.Pusher
				dimmed={leftVisible || rightVisible}
				onClick={handleClose}
				style={{ minHeight: '100vh' }}
			>
				<Menu fixed="top" inverted widths={3} id='menubar'>
					<Menu.Item onClick={handleLeftToggle} id='leftmenu'>
						<Icon name="sidebar" />
					</Menu.Item>
					<Menu.Item as={Link} to="/" id='title'>
						Polkassembly
					</Menu.Item>
					<Menu.Item onClick={handleRightToggle} id='rightmenu'>
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
		min-height: 5rem;

		#title {
			text-transform: uppercase;
			text-align: center;
			margin: auto auto;
			border-radius: 0.8rem!important;
		}

		#leftmenu {
			position: fixed;
			left: 1rem;
			max-width: 2.4rem;
			font-size: 1.8rem;
		}

		#rightmenu {
			position: fixed;
			right: 1rem;
			max-width: 2.4rem;
			font-size: 1.8rem;
		}

		.item {
			font-size: 1.45rem;
			color: grey_secondary !important;
			display: inline-block;
			&:before {
				width: 0rem;
			}
		}

		a.item:active {
			color: #FFF!important
		}
	}

	.ui.left.sidebar, .ui.right.sidebar {
		width: 260px;
		padding-top: 2rem;
		border-radius: 0.8rem!important;
		.item {
			margin-left: 1rem;
		}
	}

	.ui.sidebar.menu .item {
		border-radius: 0.8rem!important;
	}

	.ui.labeled.icon.menu {
		text-align: left;
		i {
			text-align: center!important;
			padding-right: 2rem;
		}
	}

	.ui.labeled.icon.menu .item>.icon:not(.dropdown) {
		font-size: 1.6rem!important;
		display: inline-block;
		margin: 0 2rem auto 0!important;
	}
`;