import React, { useState, useContext } from 'react';
import { Grid } from 'semantic-ui-react';
import styled from 'styled-components';

import { ModalContext } from '../../context/ModalContext';
import Button from '../../ui-components/Button';
import { Form } from '../../ui-components/Form';
import { useRequestResetPasswordMutation } from '../../generated/graphql';
import { useRouter } from '../../hooks';

interface Props {
	className?: string
}

const ResetPassword = ({ className }:Props): JSX.Element => {
	const [email, setEmail] = useState<string | undefined>('');
	const { history } = useRouter();
	const { setModal } = useContext(ModalContext)
	const [requestResetPasswordMutation, { loading, error }] = useRequestResetPasswordMutation({ context: { uri : process.env.REACT_APP_AUTH_SERVER_GRAPHQL_URL } });

	const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.currentTarget.value);

	const handleModal = () => {
		setModal({ content: 'Modal conteeeeeent' ,title: 'Check your emails' })
	}
	const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
		event.preventDefault();
		event.stopPropagation();

		if (email){
			requestResetPasswordMutation({
				variables: {
					email
				}
			}).then(({ data }) => {
				if (data && data.requestResetPassword && data.requestResetPassword.message){
					history.push('/');
					setModal({ content: data.requestResetPassword.message ,title: 'Check your emails' })
				}
			}).catch((e) => {
				console.error('Request password reset error', e)
			})
		}
	}

	return (
		<Grid className={className}>
			<Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={5} widescreen={6}/>
			<Grid.Column mobile={16} tablet={12} computer={8} largeScreen={6} widescreen={4}>
				<Form>
					<h3>Request password reset</h3>
					<Form.Group>
						<Form.Field width={16}>
							<label>Email</label>
							<input
								onChange={onEmailChange}
								placeholder='email@example.com'
								type="text"
							/>
						</Form.Field>
					</Form.Group>

					<div className={'mainButtonContainer'}>
						<Button
							primary
							disabled={loading}
							onClick={handleClick}
							type="submit"
						>
							Request reset
						</Button>
						<Button onClick={handleModal}>Modal</Button>
						{error &&
						<>
							<br/><div>{error.message}</div>
						</>
						}
					</div>
				</Form>
			</Grid.Column>
			<Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={5} widescreen={6}/>
		</Grid>
	)
};

export default styled(ResetPassword)`
	.mainButtonContainer{
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
`;