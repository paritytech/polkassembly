import React from 'react';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu, Icon, Responsive } from 'semantic-ui-react';
import styled from 'styled-components';

/* import MobileMenu, { NavBarChildren } from './MobileMenu'; */
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useLogoutMutation } from '../../generated/auth-graphql';
import { useRouter } from '../../hooks';
import { logout } from '../../services/auth.service';

interface Props {
	className?: string,
	visible?: boolean
}

const MenuBar = ({ className } : Props): JSX.Element => {
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

	const userMenu = <><Icon name='user circle' inverted />{username}</>;
	const caretIcon = <Icon name='caret down' inverted />;

	return (
		<>
			{/* <Responsive {...Responsive.onlyMobile}>
				<MobileMenu>
					<NavBarChildren></NavBarChildren>
				</MobileMenu>
			</Responsive> */}
			<Responsive minWidth={Responsive.onlyTablet.minWidth}>
				<Menu className={className} stackable inverted borderless>
					<Menu.Item as={Link} to="/" id='title'>Polkassembly</Menu.Item>
					<Menu.Item as={Link} to="/discussions" id='title'>Discussions</Menu.Item>
					<Menu.Item as={Link} to="/proposals" id='title'>Proposals</Menu.Item>
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
								<Menu.Item as={Link} to="/login">Login</Menu.Item >
								<Menu.Item as={Link} to="/signup">Sign-up</Menu.Item >
							</>
						}
					</Menu.Menu>
				</Menu>
			</Responsive>
		</>
	);
};

export default styled(MenuBar)`
	&.ui.menu {
		border-radius: 0;
		padding: 1.5rem 2rem;
		font-family: 'Roboto Mono';
		font-size: 1.4rem;
		letter-spacing: 0.1rem;
		.item {
			font-weight: 500;
			padding: 0.5rem 0.5rem;
			margin: 0 1.5rem;
			color: #B5AEAE;
		}
	}

	@media only screen and (max-width: 576px) {
		&.ui.menu {
			padding: 1.5rem 1rem;
			.item {
				padding: 0.5rem 0.5rem;
				margin: 0rem 0rem;
			}
		}
	}

	.ui.inverted.menu {
		background-color: #282828;
	}

	&.ui.inverted.menu a.item:hover {
		border-radius: 0.5rem;
	}

	#title {
		text-transform: uppercase;
	}
`;