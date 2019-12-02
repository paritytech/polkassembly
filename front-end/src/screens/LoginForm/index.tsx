import React, { useState, useContext } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { FormControlProps, Row } from 'react-bootstrap';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import styled from 'styled-components';

import { login, handleLoginUser } from '../../services/auth.service';
import { UserDetailsContext } from '../../context/UserDetailsContext';

interface Props {
	className?: string
}

const Container = styled.div`
	form {
		padding: 1.25rem 1.875rem 2.5rem 1.875rem;
		background-color: #FFF;
		border: 1px solid #EEE;
	}

	form h3 {
		margin-bottom: 1.875rem;
	}

	.field {
		margin-bottom: 1.25rem;

		label {
			font-size:0.875rem;
			font-weight: 500;
		}
	}

	input {
		font-size: 0.875rem;
		color: #282828;
		border: 1 px solid #EEE;
		border-radius: 0rem;
		text-indent: 0.626rem;	
		padding: 0.375rem 0 0.25rem 0;
		width: 100%;
	}

	input:focus {
		outline: 0;
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

const LoginForm = (props: RouteComponentProps, { className }:Props): JSX.Element => {
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
				<Row className={className}>
					<Col xs={0} sm={0} md={2} lg={2}/>
					<Col xs={12} sm={12} md={8} lg={8}>
						<Form>
							<h3>Login</h3>
							<Form.Group controlId="formSignIn">
								<Form.Field>
									<label>Username</label>
									<input
										onChange={onUserNameChange} 
										placeholder='John'
										type="text"
									/>
								</Form.Field>
							</Form.Group>

							<Form.Group controlId="formSignInPassword">
								<Form.Field>
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
								>
									Login
								</Button>
							</div>
						</Form>
					</Col>
					<Col xs={0} sm={0} md={2} lg={2}/>
				</Row>
			</Container>
		</>
	)
};

export default withRouter(LoginForm);