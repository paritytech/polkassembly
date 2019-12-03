import jwt from 'jsonwebtoken'
import React from 'react';
import { useContext, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import styled from 'styled-components';

import { UserDetailsContext } from '../../context/UserDetailsContext'
import { useLogoutMutation } from '../../generated/auth-graphql';
import { getLocalStorageToken, logout } from '../../services/auth.service';
import { JWTPayploadType } from '../../types';

interface Props {
	className?: string
}

const MenuBar = ({ className } : Props): JSX.Element => {
	const currentUser = useContext(UserDetailsContext);
	const publicKey = process.env.REACT_APP_JWT_PUBLIC_KEY;
	const [logoutMutation, { data, error }] = useLogoutMutation({ context: { uri : process.env.REACT_APP_AUTH_SERVER_GRAPHQL_URL } });
	const history = useHistory();

	useEffect(() => {
		console.log('currentUser',currentUser)
		if (!currentUser.id){
			console.log('check')
			// no user stored in memory
			// check in the local storage
			const token = getLocalStorageToken()
			if (token) {
				console.log('verifying')
				const tokenPayload = token && publicKey && jwt.verify(token, publicKey) as JWTPayploadType;

				if (tokenPayload && tokenPayload.sub && tokenPayload.name ){
					const id = tokenPayload.sub
					const username =  tokenPayload.name

					if (id && username){
						console.log('setting id')
						currentUser.setUserDetailsContextState((prevState) => {
							return {
								...prevState,
								id,
								username
							}
						})
					}
				}
			} else {
				console.log('no token')
			}
		} else {
			console.log('nothing to do')
		}
	},[currentUser.id, currentUser.setUserDetailsContextState, publicKey]);

	useEffect(() => {
		console.log('hop')
		if (data && data.logout && data.logout.message) {
			console.log('logout')
			logout(currentUser);
			history.push('/');
		}

		if (error) console.error(error)

	},[data, error, history])

	const handleLogout = () => {
		logoutMutation();
	}

	return (
		<Menu className={className} stackable inverted borderless>
			<Menu.Item as={Link} to="/" id='title'>Polkassembly</Menu.Item>
			<Menu.Menu position="right">
				{currentUser.username
					? <>
						<Menu.Item>Hello {currentUser.username}</Menu.Item>
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
.ui.menu {
	font-family: 'Roboto Mono';
	letter-spacing: 0.1rem;
	border-radius: 0;
	padding: 1.25rem 2.5rem;
}

.ui.menu .item {
	padding: 0 0;
}

.ui.inverted.menu {
	background-color: #282828;
}

#title {
	text-transform: uppercase;
}
`;