import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';

import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useLoginMutation } from '../../generated/auth-graphql';
import { useRouter } from '../../hooks';
import { handleLoginUser } from '../../services/auth.service';
import Button from '../../ui-components/Button';
import FilteredError from '../../ui-components/FilteredError';
import { Form } from '../../ui-components/Form';
import messages from '../../util/messages';

interface Props {
	className?: string
}

const LoginForm = ({ className }:Props): JSX.Element => {
	const [username, setUsername] = useState<string | undefined>('');
	const [password, setPassword] = useState<string | undefined>('');
	const currentUser = useContext(UserDetailsContext);
	const { history } = useRouter();
	const [loginMutation, { loading, error }] = useLoginMutation({ context: { uri : process.env.REACT_APP_AUTH_SERVER_GRAPHQL_URL } });
	const { control, errors, handleSubmit, register } = useForm();

	const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>[]) => setUsername(event[0].currentTarget.value);
	const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>[]) => setPassword(event[0].currentTarget.value);

	const handleClick = ():void => {
		// event.preventDefault();
		// event.stopPropagation();

		if (username && password){
			loginMutation({
				variables: {
					password,
					username
				}
			}).then(({ data }) => {
				if (data && data.login && data.login.token && data.login.user) {
					handleLoginUser({ token: data.login.token, user: data.login.user }, currentUser);
					history.push('/');
				}
			}).catch((e) => {
				console.error('Login error', e);
			});
		}
	};

	return (
		<Grid className={className}>
			<Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={5} widescreen={6}/>
			<Grid.Column mobile={16} tablet={12} computer={8} largeScreen={6} widescreen={4}>
				<Form>
					<h3>Login</h3>
					<Form.Group>
						<Form.Field width={16}>
							<label>Username</label>
							<Controller
								as={<input
									className={errors.username ? 'error' : ''}
									placeholder='John'
									type='text'
								/>}
								control={control}
								name='username'
								onChange={onUsernameChange}
								rules={{ minLength: 3, required: true }}
							/>
							{errors.username && errors.username.type === 'required' && <span className={'errorText'}>{messages.VALIDATION_USERNAME_ERROR}</span>}
						</Form.Field>
					</Form.Group>

					<Form.Group>
						<Form.Field width={16}>
							<label>Password</label>
							<Controller
								as={<input
									className={errors.password ? 'error' : ''}
									placeholder='Password'
									type='password'
								/>}
								control={control}
								name='password'
								onChange={onPasswordChange}
								rules={{ min: 6 }}
							/>
							{errors.username && <span className={'errorText'}>{messages.VALIDATION_PASSWORD_ERROR}</span>}

							<div className='text-muted'>
								<Link to='/request-reset-password'>Forgot your password?</Link>
							</div>
						</Form.Field>
					</Form.Group>
					<div className={'mainButtonContainer'}>
						<Button
							primary
							disabled={loading}
							onClick={handleSubmit(handleClick)}
							type='submit'
						>
							Login
						</Button>
						{error && <FilteredError text={error.message}/>	}
					</div>
				</Form>
			</Grid.Column>
			<Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={5} widescreen={6}/>
		</Grid>
	);
};

export default styled(LoginForm)`
	.mainButtonContainer {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	input.error {
		border-color: #fe4850 !important;
	}

	.errorText {
		color: #fe4850
	}
`;