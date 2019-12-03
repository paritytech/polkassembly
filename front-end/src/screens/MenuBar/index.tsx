import * as React from 'react';
import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

import { UserDetailsContext } from '../../context/UserDetailsContext'
import { getLocalStorageToken } from '../../services/auth.service';
import parseJwt from '../../util/parseJWT'

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
		<Menu stackable inverted borderless>
			<Menu.Item as={Link} to="/">Polkassembly</Menu.Item>
			<Menu.Menu position="right">
				{currentUser.username
					? <Menu.Item >Hello {currentUser.username}</Menu.Item>
					: <>
						<Menu.Item  as={Link} to="/temp-login">Login</Menu.Item >
						<Menu.Item  as={Link} to="/temp-signup">Sign-up</Menu.Item >
					</>
				}
			</Menu.Menu>
            
		</Menu>
	);
}

export default MenuBar;