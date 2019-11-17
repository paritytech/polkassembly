import React, { useState, useContext } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormControlProps } from 'react-bootstrap';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { login, loginUser } from '../../services/auth.service';
import { UserDetailsContext } from '../../context/UserDetailsContext';

const LoginForm = (props: RouteComponentProps): JSX.Element => {
	const [username, setUsername] = useState<string | undefined>('');
	const [password, setPassword] = useState<string | undefined>('');
	const [showError, setShowError] = useState<boolean>(true)
	const [error, setError] = useState('');
	const currentUser = useContext(UserDetailsContext)
    
	const onUserNameChange = (event: React.FormEvent<FormControlProps>) => setUsername(event.currentTarget.value);
	const onPasswordChange = (event: React.FormEvent<FormControlProps>) => setPassword(event.currentTarget.value);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
		event.preventDefault();
		event.stopPropagation();
        
		if (username && password){
			login({ password, username })
				.then((data) => data.json())
				.then((data) => {
					loginUser(data, currentUser);
					// redirect to the home
					props.history.push('/');
				})
				.catch((error: Error) => {
					console.log('login error',error)
					setError(error.message)
				});
		}
	}

	return (
		<>
			{ showError && error && <Alert variant='danger' onClose={() => setShowError(false)} dismissible>{error}</Alert> }
			<Form>
				<Form.Group controlId="formSignIn">
					<Form.Label>Username</Form.Label>
					<Form.Control
						onChange={onUserNameChange}
						placeholder="John"
						type="text"
					/>
				</Form.Group>

				<Form.Group controlId="formSignInPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						onChange={onPasswordChange}
						placeholder="Password"
						type="password"
					/>
				</Form.Group>
				<Button
					onClick={handleClick}
					type="submit"
					variant="primary"
				>
                    Login
				</Button>
			</Form>
		</>
	)
};

export default withRouter(LoginForm);