import React, { useState, useContext, useEffect } from 'react'

import Button from '../../ui-components/Button'
import { Form } from '../../ui-components/Form'
import { useChangeEmailMutation } from '../../generated/graphql'
import { UserDetailsContext } from '../../context/UserDetailsContext'
import { NotificationContext } from '../../context/NotificationContext';
import { NotificationStatus } from '../../types';

const Email = (): JSX.Element => {
	const [email, setEmail] = useState<string | null | undefined>('')
	const currentUser = useContext(UserDetailsContext)
	const [changeEmailMutation, { loading, error }] = useChangeEmailMutation({ context: { uri : process.env.REACT_APP_AUTH_SERVER_GRAPHQL_URL } })
	const { queueNotification } = useContext(NotificationContext);

	useEffect(() => {
		setEmail(currentUser.email)
	}, [currentUser.email])

	const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.currentTarget.value)

	const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
		event.preventDefault();
		event.stopPropagation();

		if (email) {
			changeEmailMutation({
				variables: {
					email
				}
			})
				.then(({ data }) => {
					if (data && data.changeEmail && data.changeEmail.token) {
						queueNotification({
							header: 'Success!',
							message: data.changeEmail.message,
							status: NotificationStatus.SUCCESS
						})
						currentUser.setUserDetailsContextState((prevState) => {
							return {
								...prevState,
								email
							}
						})
					}
				}).catch((e) => {
					queueNotification({
						header: 'Failed!',
						message: e.message,
						status: NotificationStatus.ERROR
					})
					console.error('change email error', e)
				})
		}
	}

	return (
		<Form.Group>
			<Form.Field width={10}>
				<label>Email</label>
				<input
					value={email || ''}
					onChange={onEmailChange}
					placeholder='mail@example.com'
					type='email'
				/>
				{error &&
				<>
					<br/><div>{error.message}</div>
				</>
				}
			</Form.Field>
			<Form.Field width={2}>
				<label>&nbsp;</label>
				<Button
					primary
					disabled={loading}
					onClick={handleClick}
					type='submit'
				>
					Change
				</Button>
			</Form.Field>
		</Form.Group>
	)
}

export default Email
