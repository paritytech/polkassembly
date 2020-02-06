import React from 'react';
import { ReactNode, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu, Icon, Responsive, Sidebar, SidebarPusher } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';

import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useLogoutMutation } from '../../generated/graphql';
import { useRouter } from '../../hooks';
import { logout } from '../../services/auth.service';

interface Props {
	children?: ReactNode,
	className?: string,
	visible?: boolean
}

const MenuBar = ({ className } : Props): JSX.Element => {
	const currentUser = useContext(UserDetailsContext);
	const [logoutMutation] = useLogoutMutation();
	const { history } = useRouter();
	const { setUserDetailsContextState, username } = currentUser;

	const handleLogout = async () => {
		try {
			await logoutMutation();
		} catch (error) {
			console.error(error);
		}
		logout(setUserDetailsContextState);
		history.push('/');
	};

	// Menu Items
	const contentItems = [
		{ content:'Discussions', icon: 'comments', key: 'discussions', to: '/discussions' },
		{ content: 'On chain', icon: 'file alternate', key: 'proposals', to: '/onchain' },
		{ content: 'Search', icon: 'search', key: 'search', to: '/search' }
	];

	const loggedOutItems = [
		{ content:'Login', icon:'sign in', key:'login', to:'/login' },
		{ content: 'Sign-up', icon:'plus circle', key:'signup', to:'/signup' }
	];

	const loggedInItems = [
		{ content:'Settings', icon:'cog', key:'settings', to:'/settings' },
		{ content: 'Logout', icon:'sign-out', key:'signout', onClick: handleLogout, to:'/' }
	];

	const userMenu = <><Icon name='user circle' inverted />{username}</>;
	const caretIcon = <Icon name='caret down' inverted />;

	// Mobile Sidebar
	const [menuVisible, setMenuVisible] = useState(false);
	const [pushableHeight, setPushableHeight] = useState('0rem');

	const handleToggle = () => {
		menuVisible ? setMenuVisible(false) : setMenuVisible(true);
		menuVisible ? setPushableHeight('0rem'): setPushableHeight('100%');
	};

	const handleClose = () => {
		setMenuVisible(false);
		setPushableHeight('0rem');
	};

	return (
		<>
			<Responsive maxWidth={Responsive.onlyTablet.maxWidth}>
				<Menu className={className} inverted widths={2} id='menubar'>
					<Menu.Item onClick={handleClose} as={Link} to="/" id='title'>
						Polkassembly
					</Menu.Item>
					<Menu.Item onClick={handleToggle} id='rightmenu'>
						{!menuVisible ? <Icon name="sidebar" /> : <Icon name="close" />}
					</Menu.Item>
				</Menu>
				<Sidebar.Pushable className={className} style={{ height:pushableHeight }}>
					<Sidebar
						as={Menu}
						direction='top'
						icon="labeled"
						inverted
						stackable
						vertical
						visible={menuVisible}
					>
						{contentItems.map(item => <Menu.Item as={Link} key={item.key} onClick={handleClose} {...item} />)}
						{username
							?
							<>
								{loggedInItems.map(item => <Menu.Item as={Link} key={item.key} {...item}/>)}
							</>
							:
							<>
								{loggedOutItems.map(item => <Menu.Item as={Link} key={item.key} onClick={handleClose} {...item} />)}
							</>
						}
					</Sidebar>
					<SidebarPusher />
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
										{loggedInItems.map(item => <Menu.Item as={Link} key={item.key} {...item}/>)}
									</Dropdown.Menu>
								</Dropdown>
							</>
							: <>
								{loggedOutItems.map(item => <Menu.Item as={Link} className='user_items' key={item.key} {...item} />)}
							</>
						}
					</Menu.Menu>
				</Menu>
			</Responsive>
		</>
	);
};

export default styled(MenuBar)`
	&.ui.menu, .ui.inverted.menu {
		font-family: 'Roboto Mono';
		border-radius: 0rem;
		letter-spacing: 1.1;

		.item {
			color: grey_secondary;
			font-weight: 500;
			&:hover {
				color: white;
			}
		}

		.desktop_items, #title {
			text-transform: uppercase;
		}

		i.icon {
			color: grey_secondary;
		}
	}

	@media only screen and (max-width: 992px) {

		&.pushable {
			position: relative;
		}

		&.ui.menu, .ui.inverted.menu {
			min-height: 5rem;
			border-bottom-style: solid;
			border-bottom-width: 1px;
			border-bottom-color: grey_primary;
			margin: 0rem!important;

			.desktop_items, #title, #rightmenu {
				position: absolute;
			}

			.desktop_items, #title {
				text-align: left;
				margin: auto 0;
				left: 2rem;
				top: 0.4rem;
				border-radius: 0.8rem!important;
			}

			#rightmenu {
				right: 2rem;
				font-size: 1.8rem;
				max-width: 2rem;
			}

			.item {
				font-size: md;
				display: inline-block;
				&:before {
					width: 0rem;
				}
			}

			a.item:hover {
				background: none;
				color: grey_secondary;
			}
		}

		.ui.top.sidebar {
			padding: 1rem;
			border-radius: 0rem!important;
			position: relative;
			.item {
				float: left;
				clear: both;
				text-aling: left;
				border-radius: 0.8rem!important;
			}
		}

		.ui.icon.menu .item {
			text-align: left;
			padding: 1.5rem 1rem;
			&>.icon:not(.dropdown) {
				font-size: 1.6rem!important;
				display: inline-block;
				margin: 0 1.2rem auto 0!important;
			}
		}
	}

	@media only screen and (min-width: 992px) {
		&.ui.menu {
			padding: 1.5rem 2rem;
			font-size: md;
			.item {
				padding: 0.5rem 0.5rem;
				margin: 0 1.5rem;
			}
		}

		.desktop_items, .user_items, #title {
			i.icon {
				display: none;
			}
		}

		.user_items {
			text-transform: capitalize;

		}
	}

	&.ui.inverted.menu a.item:hover, &.ui.inverted.menu .dropdown.item:hover {
		border-radius: 0.5rem;
	}
`;
