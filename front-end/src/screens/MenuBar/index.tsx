import * as React from 'react';
import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import styled from 'styled-components';

import { UserDetailsContext } from '../../context/UserDetailsContext'
import { getLocalStorageToken } from '../../services/auth.service';
import parseJwt from '../../util/parseJWT'

const Container = styled.div`
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

const MenuBar: React.FC = () => {
	const currentUser = useContext(UserDetailsContext)

	useEffect(() => {
		if (!currentUser.id){
			// no user stored in memory
			// check in the local storage
			const token = getLocalStorageToken()
			if (token) {
				const tokenPayload = token && parseJwt(token);

				if (tokenPayload){
					const id = tokenPayload && tokenPayload['https://hasura.io/jwt/claims']['x-hasura-user-id']
					const username =  tokenPayload.name

					if (id && username){
						currentUser.setUserDetailsContextState((prevState) => {
							return {
								...prevState,
								id,
								username
							}
						})
					}
				}
			}
		}
	},[currentUser]);

	return (
		<Container>
			<Menu stackable inverted borderless>
				<Menu.Item as={Link} to="/" id='title'>Polkassembly</Menu.Item>
				<Menu.Menu position="right">
					{currentUser.username
						? <Menu.Item >Hello {currentUser.username}</Menu.Item>
						: <>
							<Menu.Item  as={Link} to="/login">Login</Menu.Item >
							<Menu.Item  as={Link} to="/signup">Sign-up</Menu.Item >
						</>
					}
				</Menu.Menu>
			</Menu>
		</Container>
	);
}

export default MenuBar;