import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu, Icon, Sidebar, Sticky } from 'semantic-ui-react';
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
	const [pusherheight, setPusherheight] = useState('auto');

	const handleLeftToggle = () => {
		leftVisible ? setLeftVisible(false) : setLeftVisible(true);
		rightVisible ? setRightVisible(false) : setRightVisible(false);
		pusherheight === '100vH' && !rightVisible ? setPusherheight('auto') : setPusherheight('100vH');
	};

	const handleRightToggle = () => {
		rightVisible ? setRightVisible(false) : setRightVisible(true);
		leftVisible ? setLeftVisible(false) : setLeftVisible(false);
		pusherheight === '100vH' && !leftVisible ? setPusherheight('auto') : setPusherheight('100vH');
	};

	const handleClose = () => {
		setLeftVisible(false);
		setRightVisible(false);
		setPusherheight('auto');
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
		<>
			<Sticky className={className}>
				<Menu fixed="top" inverted widths={3} id='menubar'>
					<Menu.Item onClick={handleLeftToggle} id='leftmenu'>
						<Icon name="sidebar" />
					</Menu.Item>
					<Menu.Item onClick={handleClose} as={Link} to="/" id='title'>
						Polkassembly
					</Menu.Item>
					<Menu.Item onClick={handleRightToggle} id='rightmenu'>
						<Icon name="user" />
					</Menu.Item>
				</Menu>
			</Sticky>
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
					style={{ height: pusherheight }}
				>
					{children}
				</Sidebar.Pusher>
			</Sidebar.Pushable>
		</>
	);
};

export default styled(MobileMenu)`
	.ui.menu, .ui.inverted.menu {
		font-family: 'Roboto Mono';
		font-weight: 500;
		letter-spacing: 1.1;
		min-height: 5rem;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		border-bottom-color: grey_primary;

		#title {
			text-transform: uppercase;
			text-align: center;
			margin: auto auto;
			border-radius: 0.8rem!important;
			&:active, &:hover {
				background: none;
				color: white;
			}
		}

		#leftmenu, #rightmenu {
			position: fixed;
			max-width: 2.4rem;
			font-size: 1.8rem;
			&:active, &:hover {
				background: none;
				color: white;
			}
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
		padding-top: 6rem;
		border-radius: 0.8rem!important;
		.item {
			margin-left: 1rem;
			border-radius: 0.8rem!important;
		}
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

	.ui.right.sidebar .item {
		float: left;
		clear: both;
	}

	@media only screen and (max-width: 576px) {
		#leftmenu {
			left: 1rem;
		}

		#rightmenu {
			right: 1rem;
		}
	}

	@media only screen and (min-width: 576px) {
		#leftmenu {
			left: 2rem;
		}

		#rightmenu {
			right: 2rem;
		}
	}

	.ui.sticky {
		position: fixed!important;
	}
`;