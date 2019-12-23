import React, { useContext } from 'react'
import { Modal as SUIModal, Button } from 'semantic-ui-react'
import styled from 'styled-components'

import { ModalContext } from '../context/ModalContext'

interface Props{
    className?: string
}

const Modal = ({ className }: Props) => {
	const { modal, dismissModal } = useContext(ModalContext)
	const { content, title } = modal;

	if (!modal.content) return null;

	const renderModal = () => {
		if (!content) return null

		return (
			<SUIModal
				dimmer='inverted'
				open
			>
				<SUIModal.Header>{title}</SUIModal.Header>
				{content}
				{renderButtons()}
			</SUIModal>

		)
	}

	const renderButtons = (): React.ReactNode => {
		return (
			<SUIModal.Actions>
				<Button.Group>
					<Button
						icon='cancel'
						label={'Got it'}
						onClick={dismissModal}
					/>
				</Button.Group>
			</SUIModal.Actions>
		);
	}

	return (
		<div className={className}>
			{renderModal()}
		</div>
	)
}

export default styled(Modal)`

`