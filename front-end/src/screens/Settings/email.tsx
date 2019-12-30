import React, { useState, useContext, useEffect } from 'react'
import { Icon } from 'semantic-ui-react'
import styled from 'styled-components'

import Button from '../../ui-components/Button'
import { Form } from '../../ui-components/Form'
import { NotificationContext } from '../../context/NotificationContext'
import { UserDetailsContext } from '../../context/UserDetailsContext'
import { useChangeEmailMutation } from '../../generated/graphql'
import { NotificationStatus } from '../../types'
import { handleTokenChange } from '../../services/auth.service'

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
					if (data && data.changeEmail) {
						if (data.changeEmail.message) {
							queueNotification({
								header: 'Success!',
								message: data.changeEmail.message,
								status: NotificationStatus.SUCCESS
							})
						}
						if (data.changeEmail.token) {
							handleTokenChange(data.changeEmail.token)
						}
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
				{!currentUser.email_verified &&
				<div className={'warning-text'}>
					<br/><div><Icon name='warning circle' />Email is unverified.</div>
				</div>
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

export default styled(Email)`

	.warning-text {
		color: orange;
	}
`
