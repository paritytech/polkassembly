import React, { useState, useContext } from 'react';
import { FormControlProps } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { Form } from 'semantic-ui-react';
import Row from 'react-bootstrap/Row';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { handleLoginUser } from '../../services/auth.service';
import { Button } from '../../components/Button'
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useSignupMutation } from '../../generated/auth-graphql';

// const Container = styled.div`
// 	form {
// 		padding: 1.25rem 1.875rem 2.5rem 1.875rem;
// 		background-color: #FFF;
// 		border: 1px solid #EEE;
// 	}

// 	form h3 {
// 		margin-bottom: 1.875rem;
// 	}

// 	.form-label {
// 		font-size:0.875rem;
// 		font-weight: 500;
// 	}
	
// 	.form-control {
// 		font-size:0.875rem;
// 		color: #282828;
// 		border: 1 px solid #EEE;
// 		border-radius: 0rem;
// 		margin-bottom: 1.25rem;
// 	}
	
// 	.form-control:focus {
// 		color: #282828;
// 		background-color: #fff;
// 		border-color: #B5AEAE;
// 		outline: 0;
// 		box-shadow: none;
// 	}

// 	.form-text {
// 		margin-top: -0.625rem;
// 	}
	
// 	::placeholder {
// 		color: #AAA;
// 	}
// `;

interface Props {
	className?: string
}

const SignupForm = ({ className }: Props): JSX.Element => {
	const [email, setEmail] = useState<string | undefined>('');
	const [username, setUsername] = useState<string | undefined>('');
	const [password, setPassword] = useState<string | undefined>('');
	const [username, setUsername] = useState<string | undefined>('');
	const history = useHistory();
	const currentUser = useContext(UserDetailsContext)
	const [signupMutation, { data, loading, error }] = useSignupMutation();
    
	const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.currentTarget.value);
	const onUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.currentTarget.value);
	const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.currentTarget.value);
    
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
			// .then((data) => data.json())
			// .then((data) => {
			// 	handleLoginUser(data, currentUser);
			// 	// redirect to the home
			// 	history.push('/');
			// })
		}
	}

	return (
		<Row className={className}>
			<Col xs={0} sm={0} md={2} lg={2}></Col>
			<Col xs={12} sm={12} md={8} lg={8}>
				<Form>
					<h3>Sign Up</h3>
					<Form.Group controlId="formSignIn">
						<Form.Label>Username</Form.Label>
						<Form.Control
							onChange={onUserNameChange}
							placeholder="John"
							type="text"
						/>
						<Form.Label>Email</Form.Label>
						<Form.Control
							onChange={onEmailChange}
							placeholder="john@doe.com"
							type="email"
						/>
						<Form.Text className="text-muted">
								We&apos;ll never share your email with anyone else.
						</Form.Text>
					</Form.Group>

					<Form.Group controlId="formSignInPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control
							onChange={onPasswordChange}
							placeholder="Password"
							type="password"
						/>
					</Form.Group>
					<div className={'mainButtonContainer'}>
						<Button
							onClick={handleClick}
							type="submit"
							variant="primary"
						>
								Sign-up
						</Button>
					</div>
				</Form>
			</Col>
			<Col xs={0} sm={0} md={2} lg={2}></Col>
		</Row>
	)
};

export default styled(SignupForm)`
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