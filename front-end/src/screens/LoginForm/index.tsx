import React, { useState, useContext } from 'react';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';

import Button from '../../ui-components/Button';
import { Form } from '../../ui-components/Form';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useLoginMutation } from '../../generated/auth-graphql';
import { useRouter } from '../../hooks';
import { handleLoginUser } from '../../services/auth.service';

interface Props {
	className?: string
}

const LoginForm = ({ className }:Props): JSX.Element => {
	const [username, setUsername] = useState<string | undefined>('');
	const [password, setPassword] = useState<string | undefined>('');
	const currentUser = useContext(UserDetailsContext)
	const { history } = useRouter();
	const [loginMutation, { loading, error }] = useLoginMutation({ context: { uri : process.env.REACT_APP_AUTH_SERVER_GRAPHQL_URL } });

	const onUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.currentTarget.value);
	const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.currentTarget.value);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
		event.preventDefault();
		event.stopPropagation();

		if (username && password){
			loginMutation({
				variables: {
					password,
					username
				}
			}).then(({ data }) => {
				if (data && data.login && data.login.token && data.login.user) {
					handleLoginUser({ token: data.login.token, user: data.login.user }, currentUser)
					history.push('/');
				}
			}).catch((e) => {
				console.error('Login error', e)
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
							primary
							disabled={loading}
							onClick={handleClick}
							type="submit"
						>
							Login
						</Button>
						{error &&
						<>
							<br/><div>{error.message}</div>
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