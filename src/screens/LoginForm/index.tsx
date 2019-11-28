import React, { useState, useContext } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { FormControlProps, Row } from 'react-bootstrap';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { login, handleLoginUser } from '../../services/auth.service';
import { UserDetailsContext } from '../../context/UserDetailsContext';

const Container = styled.div`
	form {
		padding: 1.25rem 1.875rem 2.5rem 1.875rem;
		background-color: #FFF;
		border: 1px solid #EEE;
	}

	form h3 {
		margin-bottom: 1.875rem;
	}

	.form-label {
		font-size: 0.875rem;
		font-weight: 500;
	}
	
	.form-control {
		font-size: 0.875rem;
		color: #282828;
		border: 1 px solid #EEE;
		border-radius: 0rem;
		margin-bottom: 1.25rem;
	}
	
	.form-control:focus {
		color: #282828;
		background-color: #fff;
		border-color: #B5AEAE;
		outline: 0;
		box-shadow: none;
	}
	
	::placeholder {
		color: #AAA;
	}
`;

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
					handleLoginUser(data, currentUser);
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
			<Container>
				<Row>
					<Col xs={0} sm={0} md={2} lg={2}></Col>
					<Col xs={12} sm={12} md={8} lg={8}>
						<Form>
							<h3>Login</h3>
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
							<div style={{
								alignItems: 'center',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center'
							}}> 
								<Button
									onClick={handleClick}
									type='submit'
									variant='primary'
								>
									Login
								</Button>
							</div>
						</Form>
					</Col>
					<Col xs={0} sm={0} md={2} lg={2}></Col>
				</Row>
			</Container>
		</>
	)
};

export default withRouter(LoginForm);
