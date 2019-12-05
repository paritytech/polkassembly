import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';

import { Button } from '../../ui-components/Button';
import { Form } from '../../ui-components/Form';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useLoginMutation } from '../../generated/auth-graphql';
import { handleLoginUser } from '../../services/auth.service';

interface Props {
	className?: string
}

const LoginForm = ({ className }:Props): JSX.Element => {
	const [username, setUsername] = useState<string | undefined>('');
	const [password, setPassword] = useState<string | undefined>('');
	const currentUser = useContext(UserDetailsContext)
	const history = useHistory();
	const [loginMutation, { data, loading, error }] = useLoginMutation({ context: { uri : process.env.REACT_APP_AUTH_SERVER_GRAPHQL_URL } });

	const onUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.currentTarget.value);
	const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.currentTarget.value);

	useEffect(() => {
		if (data && data.login && data.login.token && data.login.user) {
			handleLoginUser({ token: data.login.token, user: data.login.user }, currentUser)
			history.push('/');
		}
	},[currentUser, data, history])

	const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
		event.preventDefault();
		event.stopPropagation();

		if (username && password){
			loginMutation({
				variables: {
					password,
					username
				}
			})
		}
	}

	return (
		<Grid className={className}>
			<Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={5} widescreen={6}/>
			<Grid.Column mobile={16} tablet={12} computer={8} largeScreen={6} widescreen={4}>
				<Form>
					<h3>Login</h3>
					<Form.Group>
						<Form.Field width={16}>
							<label>Username</label>
							<input
								onChange={onUserNameChange}
								placeholder='John'
								type="text"
							/>
						</Form.Field>
					</Form.Group>

					<Form.Group>
						<Form.Field width={16}>
							<label>Password</label>
							<input
								onChange={onPasswordChange}
								placeholder='Password'
								type="password"
							/>
						</Form.Field>
					</Form.Group>
					<div className={'mainButtonContainer'}>
						<Button
							className="primary"
							disabled={loading}
							onClick={handleClick}
							type="submit"
							variant="primary"
						>
							Login
						</Button>
						{error &&
						<>
							<br/><div> Error: {error} </div>
						</>
						}
					</div>
				</Form>
			</Grid.Column>
			<Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={5} widescreen={6}/>
		</Grid>
	)
};

export default styled(LoginForm)`

	.mainButtonContainer{
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
`;