// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React, { useContext } from 'react';
import { FieldError,useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';

import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useLoginMutation } from '../../generated/graphql';
import { useRouter } from '../../hooks';
import { handleTokenChange } from '../../services/auth.service';
import Button from '../../ui-components/Button';
import FilteredError from '../../ui-components/FilteredError';
import { Form } from '../../ui-components/Form';
import messages from '../../util/messages';
import * as validation from '../../util/validation';

interface Props {
	className?: string
	toggleWeb2Login: () => void
}

const LoginForm = ({ className, toggleWeb2Login }:Props): JSX.Element => {
	const currentUser = useContext(UserDetailsContext);
	const { history } = useRouter();
	const [loginMutation, { loading, error }] = useLoginMutation();
	const { errors, handleSubmit, register } = useForm();

	const handleSubmitForm = (data:Record<string, any>):void => {
		const { username, password } = data;

		if (username && password){
			loginMutation({
				variables: {
					password,
					username
				}
			}).then(({ data }) => {
				if (data && data.login && data.login.token) {
					handleTokenChange(data.login.token, currentUser);
					history.goBack();
				}
			}).catch((e) => {
				console.error('Login error', e);
			});
		}
	};

	const handleToggle = () => toggleWeb2Login();

	return (
		<Form className={className} onSubmit={handleSubmit(handleSubmitForm)}>
			<h3>Login</h3>
			<Form.Group>
				<Form.Field width={16}>
					<label>Username</label>
					<input
						className={errors.username ? 'error' : ''}
						name='username'
						placeholder='John'
						ref={register(validation.username)}
						type='text'
					/>
					{(errors.username as FieldError)?.type === 'maxLength' && <span className={'errorText'}>{messages.VALIDATION_USERNAME_MAXLENGTH_ERROR}</span>}
					{(errors.username as FieldError)?.type === 'minLength' && <span className={'errorText'}>{messages.VALIDATION_USERNAME_MINLENGTH_ERROR}</span>}
					{(errors.username as FieldError)?.type === 'pattern' && <span className={'errorText'}>{messages.VALIDATION_USERNAME_PATTERN_ERROR}</span>}
					{(errors.username as FieldError)?.type === 'required' && <span className={'errorText'}>{messages.VALIDATION_USERNAME_REQUIRED_ERROR}</span>}
				</Form.Field>
			</Form.Group>

			<Form.Group>
				<Form.Field width={16}>
					<label>Password</label>
					<input
						className={errors.password ? 'error' : ''}
						name='password'
						placeholder='Password'
						ref={register(validation.password)}
						type='password'
					/>
					{errors.password && <span className={'errorText'}>{messages.VALIDATION_PASSWORD_ERROR}</span>}

					<div className='text-muted'>
						<Link to='/request-reset-password'>Forgot your password or username?</Link>
					</div>
				</Form.Field>
			</Form.Group>

			<div className={'mainButtonContainer'}>
				<Button
					primary
					disabled={loading}
					type='submit'
				>
					Login
				</Button>
			</div>
			<div>
				{error?.message && <FilteredError text={error.message}/>}
			</div>
			<Divider horizontal>Or</Divider>
			<div className={'mainButtonContainer'}>
				<Button
					secondary
					disabled={loading}
					onClick={handleToggle}
				>
					Login with web3 address
				</Button>
			</div>
		</Form>
	);
};

export default styled(LoginForm)`
	.mainButtonContainer {
		align-items: center;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	input.error {
		border-style: solid;
		border-width: 1px;
		border-color: red_secondary;
	}

	.errorText {
		color: red_secondary;
	}
`;
