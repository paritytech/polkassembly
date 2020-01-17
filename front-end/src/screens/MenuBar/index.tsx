import React from 'react';
import { ReactNode, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Dropdown, Menu, Icon, Responsive, Sidebar, SidebarPusher } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';

import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useLogoutMutation } from '../../generated/auth-graphql';
import { useRouter } from '../../hooks';
import { logout } from '../../services/auth.service';

interface Props {
	children?: ReactNode,
	className?: string,
	visible?: boolean
}

const NavBarChildren = ({ children }:Props) => (
	<Container>{children}</Container>
);

const MenuBar = ({ children, className } : Props): JSX.Element => {
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

	// Menu Items
	const contentItems = [
		{ content:'Discussions', icon:'comments', key:'discussions', to:'/discussions' },
		{ content: 'Proposals', icon:'file alternate', key:'proposals', to:'/proposals' }
	];

	const loggedOutItems = [
		{ content:'Login', icon:'sign in', key:'login', to:'/login' },
		{ content: 'Sign-up', icon:'plus circle', key:'signup', to:'/signup' }
	];

	const userMenu = <><Icon name='user circle' inverted />{username}</>;
	const caretIcon = <Icon name='caret down' inverted />;

	// Mobile Sidebar
	const [leftVisible, setLeftVisible] = useState(false);
	const [rightVisible, setRightVisible] = useState(false);

	const handleLeftToggle = () => {
		leftVisible ? setLeftVisible(false) : setLeftVisible(true);
		rightVisible ? setRightVisible(false) : setRightVisible(false);
	};

	const handleRightToggle = () => {
		rightVisible ? setRightVisible(false) : setRightVisible(true);
		leftVisible ? setLeftVisible(false) : setLeftVisible(false);
	};

	const handleClose = () => {
		setLeftVisible(false);
		setRightVisible(false);
	};

	return (
		<>
			<Responsive maxWidth={Responsive.onlyTablet.maxWidth}>
				<Menu className={className} inverted widths={3} id='menubar'>
					<Menu.Item onClick={handleLeftToggle} id='leftmenu'>
						{!leftVisible ? <Icon name="sidebar" /> : <Icon name="times" />}
					</Menu.Item>
					<Menu.Item onClick={handleClose} as={Link} to="/" id='title'>
						Polkassembly
					</Menu.Item>
					<Menu.Item onClick={handleRightToggle} id='rightmenu'>
						{!rightVisible ? <Icon name="user" /> : <Icon name="times" />}
					</Menu.Item>
				</Menu>
				<Sidebar.Pushable className={className}>
					<Sidebar
						as={Menu}
						animation="overlay"
						direction='top'
						icon="labeled"
						inverted
						stackable
						vertical
						visible={leftVisible}
					>
						{contentItems.map(item => <Menu.Item as={Link} key={item.key} onClick={handleClose} {...item} />)}
					</Sidebar>
					<Sidebar
						as={Menu}
						animation="overlay"
						direction='top'
						icon="labeled"
						inverted
						stackable
						vertical
						visible={rightVisible}
					>
						{username
							?
							<>
								<Menu.Item as={Link} to="/settings" onClick={handleClose}><Icon name="cog" />Settings</Menu.Item>
								<Menu.Item onClick={handleLogout}><Icon name="sign-out" />Logout</Menu.Item>
							</>
							:
							<>
								{loggedOutItems.map(item => <Menu.Item as={Link} key={item.key} onClick={handleClose} {...item} />)}
							</>
						}
					</Sidebar>
					<SidebarPusher>
						<NavBarChildren>{children}</NavBarChildren>
					</SidebarPusher>
					{/* <Sidebar.Pusher
						dimmed={leftVisible || rightVisible}
						onClick={handleClose}
						style={{ minHeight: '100vH' }}
					>
						<NavBarChildren>{children}</NavBarChildren>
					</Sidebar.Pusher> */}
				</Sidebar.Pushable>
			</Responsive>
			<Responsive minWidth={Responsive.onlyComputer.minWidth}>
				<Menu className={className} stackable inverted borderless>
					<Menu.Item as={Link} to="/" id='title'>Polkassembly</Menu.Item>
					{contentItems.map(item => <Menu.Item as={Link} className='desktop_items' key={item.key} {...item} />)}
					<Menu.Menu position="right">
						{username
							? <>
								<Dropdown trigger={userMenu} icon={caretIcon} item={true}>
									<Dropdown.Menu>
										<Menu.Item as={Link} to="/settings">Settings</Menu.Item>
										<Menu.Item onClick={handleLogout}>Logout</Menu.Item>
									</Dropdown.Menu>
								</Dropdown>
							</>
							: <>
								{loggedOutItems.map(item => <Menu.Item as={Link} className='desktop_items' key={item.key} {...item} />)}
							</>
						}
					</Menu.Menu>
				</Menu>
				<NavBarChildren>{children}</NavBarChildren>
			</Responsive>
		</>
	);
};

export default styled(MenuBar)`
	@media only screen and (max-width: 992px) {
		&.ui.menu, .ui.inverted.menu {
			font-family: 'Roboto Mono';
			font-weight: 500;
			letter-spacing: 1.1;
			min-height: 5rem;
			border-bottom-style: solid;
			border-bottom-width: 1px;
			border-bottom-color: grey_primary;
			border-radius: 0rem;
			margin: 0rem!important;

			.desktop_items, #title {
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
				position: absolute;
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

			#leftmenu {
				left: 2rem;
			}
	
			#rightmenu {
				right: 2rem;
			}
		}

		.ui.top.sidebar {
			padding: 1rem;
			border-radius: 0rem!important;
			.item {
				float: left;
				clear: both;
				text-aling: left;
				border-radius: 0.8rem!important;
			}
		}

		.ui.icon.menu .item {
			text-align: left;
			padding: 1.5rem 2rem;
			i {
				text-align: center!important;
				margin: 0 auto;
				padding-right: 2rem;
			}
		}
	
		.ui.labeled.icon.menu .item>.icon:not(.dropdown) {
			font-size: 1.6rem!important;
			display: inline-block;
			margin: 0 1rem auto 0!important;
		}
	
		.ui.right.sidebar .item {
			float: left;
			clear: both;
		}
	}

	@media only screen and (min-width: 992px) {
		&.ui.menu {
			font-family: 'Roboto Mono';
			border-radius: 0;
			padding: 1.5rem 2rem;
			font-size: md;
			letter-spacing: 0.15rem;
			.item {
				font-weight: 500;
				padding: 0.5rem 0.5rem;
				margin: 0 1.5rem;
				color: grey_secondary;
				&:hover {
					color: white;
				}
			}
		}

		.desktop_items, #title {
			text-transform: uppercase !important;
			i.icon {
				display: none;
			}
		}
	}

	&.ui.inverted.menu a.item:hover {
		border-radius: 0.5rem;
	}
`;