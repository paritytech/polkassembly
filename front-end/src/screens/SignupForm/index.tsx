import React, { useState, useContext, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';

import Button from '../../ui-components/Button';
import { Form } from '../../ui-components/Form';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useSignupMutation } from '../../generated/auth-graphql';
import { useRouter } from '../../hooks';
import { handleLoginUser } from '../../services/auth.service';
import { NotificationContext } from '../../context/NotificationContext';
import { NotificationStatus } from '../../types';

interface Props {
	className?: string
}

const SignupForm = ({ className }:Props): JSX.Element => {
	const [email, setEmail] = useState<string | undefined>('');
	const [username, setUsername] = useState<string | undefined>('');
	const [password, setPassword] = useState<string | undefined>('');
	const { history } = useRouter();
	const currentUser = useContext(UserDetailsContext)
	const [signupMutation, { data, loading, error }] = useSignupMutation({ context: { uri : process.env.REACT_APP_AUTH_SERVER_GRAPHQL_URL } });
	const { queueNotification } = useContext(NotificationContext)

	const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.currentTarget.value);
	const onUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.currentTarget.value);
	const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.currentTarget.value);

	useEffect(() => {
		if (data && data.signup && data.signup.token && data.signup.user) {
			handleLoginUser({ token: data.signup.token, user: data.signup.user }, currentUser)
			history.push('/');
		}
	},[currentUser, data, history])

	const handleQueue = () => {
		queueNotification({
			header: 'Signup sucessful',
			message: 'Welcom back!',
			status: NotificationStatus.ERROR
		})
	}
	const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
		event.preventDefault();
		event.stopPropagation();

		if (username && email && password){
			signupMutation({
				variables: {
					email,
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
					<h3>Sign Up</h3>
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
							<label>Email</label>
							<input
								onChange={onEmailChange}
								placeholder='john@doe.com'
								type="email"
							/>
							<div className="text-muted">
								We&apos;ll never share your email with anyone else.
							</div>
						</Form.Field>
					</Form.Group>
					<Form.Group>
						<Form.Field width={16}>
							<label>Password</label>
							<input
								onChange={onPasswordChange}
								placeholder='Password'
								type='password'
							/>
						</Form.Field>
					</Form.Group >
					<div className={'mainButtonContainer'}>
						<Button
							primary
							disabled={loading}
							onClick={handleClick}
							type="submit"
						>
							Sign-up
						</Button>
						<Button
							secondary
							onClick={handleQueue}
							type="submit"
						>
							Queue
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

export default styled(SignupForm)`
	
	.mainButtonContainer{
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
`;