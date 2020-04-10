// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useContext } from 'react';

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
					content='Got it'
					icon='check'
					primary
					onClick={dismissModal}
				/>}
				className={className}
				centered
				dimmer='inverted'
				open
				onClose={dismissModal}
				size='tiny'
				title={title}
			>{content}</Modal>

		);
	};

	return (
		<div className={className}>
			{renderModal()}
		</div>
	);
};

export default MyModal;