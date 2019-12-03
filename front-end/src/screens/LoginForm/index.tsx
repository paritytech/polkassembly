import React, { useState, useContext } from 'react';
// import Alert from 'react-bootstrap/Alert';
import { useHistory } from 'react-router-dom';
import { Form, Grid } from 'semantic-ui-react';
import styled from 'styled-components';

import { login, handleLoginUser } from '../../services/auth.service';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { Button } from '../../components/Button';

interface Props {
	className?: string
}

const LoginForm = ({ className }:Props): JSX.Element => {
	const [username, setUsername] = useState<string | undefined>('');
	const [password, setPassword] = useState<string | undefined>('');
	// const [showError, setShowError] = useState<boolean>(true)
	// const [error, setError] = useState('');
	const currentUser = useContext(UserDetailsContext)
	const history = useHistory();
	
	const onUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.currentTarget.value);
	const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.currentTarget.value);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
		event.preventDefault();
		event.stopPropagation();

		if (username && password){
			login({ password, username })
				.then((data) => data.json())
				.then((data) => {
					handleLoginUser(data, currentUser);
					// redirect to the home
					history.push('/');
				})
				.catch((error: Error) => {
					console.log('login error',error)
					// setError(error.message)
				});
		}
	}

	return (
		<>
			{/* { showError && error && <Alert variant='danger' onClose={() => setShowError(false)} dismissible>{error}</Alert> } */}
			<Grid className={className}>
				<Grid.Column width={2}></Grid.Column>
				<Grid.Column width={12}>
					<Form>
						<h3>Login</h3>
						<Form.Group controlId="formSignIn">
							<Form.Field width={16}>
								<label>Username</label>
								<input
									onChange={onUserNameChange} 
									placeholder='John'
									type="text"
								/>
							</Form.Field>
						</Form.Group>

						<Form.Group controlId="formSignInPassword">
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
								onClick={handleClick}
								type='submit'
								variant='primary'
								className='primary'
							>
									Login
							</Button>
						</div>
					</Form>
				</Grid.Column>
				<Grid.Column width={2}></Grid.Column>
			</Grid>
		</>
	)
};

export default styled(LoginForm)`

	form {
		padding: 1.25rem 1.875rem 2.5rem 1.875rem;
		margin-top: 2.5rem;
		background-color: #FFF;
		border: 1px solid #EEE;
		& h3 {
			margin-bottom: 1.875rem;
		}
	}

	.field {
		margin-bottom: 1.25rem;

		label {
			font-size:0.875rem;
			font-weight: 500;
		}
	}

	.ui.form .field>label {
		font-size:0.875rem;
		font-weight: 500;
	}

	input {
		font-size: 0.875rem;
		color: #282828;
		border: 1 px solid #EEE;
		border-radius: 0rem;
		text-indent: 0.626rem;	
		padding: 0.375rem 0 0.25rem 0;
		width: 100%;
		& :focus {
			outline: 0;
		}
	}

	.ui.form input:not([type]), .ui.form input[type=date], .ui.form input[type=datetime-local], .ui.form input[type=email], .ui.form input[type=file], .ui.form input[type=number], .ui.form input[type=password], .ui.form input[type=search], .ui.form input[type=tel], .ui.form input[type=text], .ui.form input[type=time], .ui.form input[type=url] {
		font-family: 'Roboto';
		font-size: 0.875rem;
		color: #282828;
		border: 1 px solid #EEE;
		border-radius: 0rem;
		text-indent: 0.626rem;
		padding: 0.625rem 0 0.5rem 0;
		&:focus {
			outline: 0;
			border-color: #EEE;
		}	
	}

	.text-muted {
		font-size: 0.75rem;
		margin: 0.5rem 0 0 0;
	}

	.mainButtonContainer{
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
`;