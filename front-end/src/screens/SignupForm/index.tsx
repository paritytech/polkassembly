import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Grid, Icon, Popup } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';

import { ModalContext } from '../../context/ModalContext';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useSignupMutation } from '../../generated/auth-graphql';
import { useRouter } from '../../hooks';
import { handleLoginUser } from '../../services/auth.service';
import Button from '../../ui-components/Button';
import FilteredError from '../../ui-components/FilteredError';
import { Form } from '../../ui-components/Form';
import messages from '../../util/messages';

interface Props {
	className?: string
}

const SignupForm = ({ className }:Props): JSX.Element => {
	const { history } = useRouter();
	const currentUser = useContext(UserDetailsContext);
	const [signupMutation, { loading, error }] = useSignupMutation({ context: { uri : process.env.REACT_APP_AUTH_SERVER_GRAPHQL_URL } });
	const { errors, handleSubmit, register } = useForm();

	const { setModal } = useContext(ModalContext);

	const handleSubmitForm = (data:Record<string, any>):void => {
		const { email, name, password, username } = data;

		if (username && password){
			signupMutation({
				variables: {
					email,
					name,
					password,
					username
				}
			})
				.then(({ data }) => {
					if (data && data.signup && data.signup.token && data.signup.user) {
						handleLoginUser({ token: data.signup.token, user: data.signup.user }, currentUser);
						if (email) {
							setModal({ content: 'We sent you an email to verify your address. Click on the link in the email.' ,title: 'You\'ve got some mail' });
						}
						history.push('/');
					}}

				).catch((e) => {
					console.error('Login error', e);
				});
		}
	};

	return (
		<Grid className={className}>
			<Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={5} widescreen={6}/>
			<Grid.Column mobile={16} tablet={12} computer={8} largeScreen={6} widescreen={4}>
				<Form onSubmit={handleSubmit(handleSubmitForm)}>
					<h3>Sign Up</h3>
					<Form.Group>
						<Form.Field width={16}>
							<label>Username</label>
							<input
								className={errors.username ? 'error' : ''}
								name='username'
								placeholder='john'
								ref={register({ pattern: /^[A-Za-z0-9._-]{3,20}$/, required: true })}
								type='text'
							/>
							{errors.username && <span className={'errorText'}>{messages.VALIDATION_USERNAME_ERROR}</span>}
						</Form.Field>
					</Form.Group>
					<Form.Group>
						<Form.Field width={16}>
							<label>
								Display Name&nbsp;
								<Popup
									trigger={<Icon name='question circle'/>}
									content='We only use your display name as a more readable alternative to your username.'
									style={{ marginLeft: '-0.7rem' }}
								/>
							</label>
							<input
								className={errors.name ? 'error' : ''}
								name='name'
								placeholder='Firstname Lastname'
								type='text'
								ref={register({ required: false })}
							/>
						</Form.Field>
					</Form.Group>
					<Form.Group>
						<Form.Field width={16}>
							<label>
								Email&nbsp;
								<Popup
									trigger={<Icon name='question circle'/>}
									content='We only use your email for password recovery and to receive notifications if you wish to opt-in.'
									style={{ marginLeft: '-0.7rem' }}
								/>
							</label>
							<input
								className={errors.email ? 'error' : ''}
								name='email'
								placeholder='john@doe.com'
								ref={register({
									pattern: /^[A-Z0-9_'%=+!`#~$*?^{}&|-]+([.][A-Z0-9_'%=+!`#~$*?^{}&|-]+)*@[A-Z0-9-]+(\.[A-Z0-9-]+)+$/i
								})}
								type='text'
							/>
							{errors.email && <span className={'errorText'}>{messages.VALIDATION_EMAIL_ERROR}</span>}
							<div className="text-muted">
								We&apos;ll never share your email with anyone else.
							</div>
						</Form.Field>
					</Form.Group>
					<Form.Group>
						<Form.Field width={16}>
							<label>Password</label>
							<input
								className={errors.password ? 'error' : ''}
								name='password'
								placeholder='Password'
								ref={register({ minLength: 6, required: true })}
								type='password'
							/>
							{errors.password && <span className={'errorText'}>{messages.VALIDATION_PASSWORD_ERROR}</span>}
						</Form.Field>
					</Form.Group >
					<div className={'mainButtonContainer'}>
						<Button
							primary
							disabled={loading}
							onClick={handleSubmitForm}
							type="submit"
						>
							Sign-up
						</Button>
						{error && <FilteredError text={error.message}/>}
					</div>
				</Form>
			</Grid.Column>
			<Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={5} widescreen={6}/>
		</Grid>
	);
};

export default styled(SignupForm)`

	.mainButtonContainer{
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

	i.icon.question.circle:before {
		color: grey_secondary;
	}
`;
