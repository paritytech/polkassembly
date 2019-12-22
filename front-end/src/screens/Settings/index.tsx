import React, { useState, useContext, useEffect } from 'react'

import { Grid, Divider } from 'semantic-ui-react'
import Button from '../../ui-components/Button'
import { Form } from '../../ui-components/Form'

import { UserDetailsContext } from '../../context/UserDetailsContext'
import { useSignupMutation } from '../../generated/auth-graphql'
import { useRouter } from '../../hooks';
import { handleLoginUser } from '../../services/auth.service'

interface Props {
	className?: string
}

const Settings = ({ className }:Props): JSX.Element => {
	const [username, setUsername] = useState<string | undefined>('')
	const [displayName, setDisplayName] = useState<string | undefined>('')
	const [email, setEmail] = useState<string | undefined>('')
	const [currentPassword, setCurrentPassword] = useState<string | undefined>('')
	const [newPassword, setNewPassword] = useState<string | undefined>('')
	const { history } = useRouter()
	const currentUser = useContext(UserDetailsContext)
	const [signupMutation, { data, loading, error }] = useSignupMutation({ context: { uri : process.env.REACT_APP_AUTH_SERVER_GRAPHQL_URL } })

	const onUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.currentTarget.value)
	const onDisplayNameChange = (event: React.ChangeEvent<HTMLInputElement>) => setDisplayName(event.currentTarget.value)
	const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.currentTarget.value)
	const onCurrentPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setCurrentPassword(event.currentTarget.value)
	const onNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => setNewPassword(event.currentTarget.value)

	return (
		<Grid className={className}>
			<Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={5} widescreen={5}/>
			<Grid.Column mobile={16} tablet={12} computer={8} largeScreen={6} widescreen={6}>
				<Form>
					<h3>Settings</h3>
					<Divider/>
					<Form.Group>
						<Form.Field width={10}>
							<label>Username</label>
							<input
								onChange={onUserNameChange}
								placeholder='username'
								type="text"
							/>
						</Form.Field>
						<Form.Field width={2}>
							<label>&nbsp;</label>
							<Button
								primary
								type="submit"
							>
								Change
							</Button>
						</Form.Field>
					</Form.Group>
					<Form.Group>
						<Form.Field width={10}>
							<label>Display Name</label>
							<input
								onChange={onDisplayNameChange}
								placeholder='Display Name'
								type="text"
							/>
						</Form.Field>
						<Form.Field width={2}>
							<label>&nbsp;</label>
							<Button
								primary
								type="submit"
							>
								Change
							</Button>
						</Form.Field>
					</Form.Group>
					<Divider/>
					<Form.Group>
						<Form.Field width={10}>
							<label>Email</label>
							<input
								onChange={onEmailChange}
								placeholder='email@example.com'
								type='email'
							/>
						</Form.Field>
						<Form.Field width={2}>
							<label>&nbsp;</label>
							<Button
								primary
								type="submit"
							>
								Change
							</Button>
						</Form.Field>
					</Form.Group>
					<Divider/>
					<Form.Group>
						<Form.Field width={10}>
							<label>Current Password</label>
							<input
								onChange={onCurrentPasswordChange}
								placeholder='Current Password'
								type='password'
							/>
						</Form.Field>
					</Form.Group>
					<Form.Group>
						<Form.Field width={10}>
							<label>New Password</label>
							<input
								onChange={onNewPasswordChange}
								placeholder='New Password'
								type='password'
							/>
						</Form.Field>
						<Form.Field width={2}>
							<label>&nbsp;</label>
							<Button
								primary
								type="submit"
							>
								Change
							</Button>
						</Form.Field>
					</Form.Group>
				</Form>
			</Grid.Column>
		</Grid>
	);
}

export default Settings
