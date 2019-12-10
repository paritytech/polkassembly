import jwt from 'jsonwebtoken'
import React from 'react';
import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import styled from 'styled-components';

import { UserDetailsContext } from '../../context/UserDetailsContext'
import { useLogoutMutation } from '../../generated/auth-graphql';
import { useRouter } from '../../hooks';
import { getLocalStorageToken, logout } from '../../services/auth.service';
import { JWTPayploadType } from '../../types';

interface Props {
	className?: string
}

const MenuBar = ({ className } : Props): JSX.Element => {
	const currentUser = useContext(UserDetailsContext);
	const publicKey = process.env.REACT_APP_JWT_PUBLIC_KEY;
	const [logoutMutation, { data, error }] = useLogoutMutation({ context: { uri : process.env.REACT_APP_AUTH_SERVER_GRAPHQL_URL } });
	const { history } = useRouter();
	const { id, setUserDetailsContextState, username } = currentUser;

	useEffect(() => {
		if (!id){
			// no user stored in memory
			// check in the local storage
			const token = getLocalStorageToken()
			if (token) {
				try {
					const tokenPayload = token && publicKey && jwt.verify(token, publicKey) as JWTPayploadType;

					if (tokenPayload && tokenPayload.sub && tokenPayload.name ){
						const id = tokenPayload.sub
						const username =  tokenPayload.name

						if (id && username){
							setUserDetailsContextState((prevState) => {
								return {
									...prevState,
									id,
									username
								}
							})
						}
					}
				} catch (e) {
					// the jwt isn't valid
					console.log('error jwt verify',e)
				}
			}
		}
	},[id, setUserDetailsContextState, publicKey]);

	useEffect(() => {
		if (data && data.logout && data.logout.message) {
			logout(setUserDetailsContextState);
			history.push('/');
		}

		if (error) console.error(error)

	},[data, error, history, setUserDetailsContextState])

	const handleLogout = () => {
		logoutMutation();
	}

	return (
		<Menu className={className} stackable inverted borderless>
			<Menu.Item as={Link} to="/" id='title'>Polkassembly</Menu.Item>
			<Menu.Item as={Link} to="/discussions" id='title'>Discussions</Menu.Item>
			<Menu.Item as={Link} to="/proposals" id='title'>Proposals</Menu.Item>
			<Menu.Menu position="right">
				{username
					? <>
						<Menu.Item>Hello {username}</Menu.Item>
						<Menu.Item onClick={handleLogout}>Logout</Menu.Item>
					</>
					: <>
						<Menu.Item as={Link} to="/login">Login</Menu.Item >
						<Menu.Item as={Link} to="/signup">Sign-up</Menu.Item >
					</>
				}
			</Menu.Menu>
		</Menu>
	);
}

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