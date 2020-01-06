import React, { useContext } from 'react';
import styled from 'styled-components';

import { ModalContext } from '../context/ModalContext';
import Button from '../ui-components/Button';
import Modal from '../ui-components/Modal';

interface Props{
    className?: string
}

const MyModal = ({ className }: Props) => {
	const { modal, dismissModal } = useContext(ModalContext);
	const { content, title } = modal;

	if (!modal.content) return null;

	const renderModal = () => {
		if (!content) return null;

		return (
			<Modal
				buttons={<Button
					primary
					icon='check'
					onClick={dismissModal}
				>Got it</Button>}
				className={className}
				centered
				content={content}
				dimmer='inverted'
				open
				onClose={dismissModal}
				size='tiny'
				title={title}
			/>

		);
	};

	return (
		<div className={className}>
			{renderModal()}
		</div>
	);
};

export default styled(MyModal)`

`;