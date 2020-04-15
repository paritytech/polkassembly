// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import { Modal as SUIModal, ModalProps } from 'semantic-ui-react';

type Props = ModalProps & {
	buttons: React.ReactNode
	content?: string
	children?: React.ReactNode
	className?: string
	dismissModal?: () => void
	title?: string
}

const Modal = (props : Props) => {
	const { buttons, children, className, title, ...otherProps } = props;

	return (
		<SUIModal className={className} centered dimmer='inverted' open size='tiny' {...otherProps}>
			<SUIModal.Header>{title}</SUIModal.Header>
			<SUIModal.Content>
				<SUIModal.Description>
					<div>{children}</div>
				</SUIModal.Description>
			</SUIModal.Content>
			<SUIModal.Actions>
				{buttons}
			</SUIModal.Actions>
		</SUIModal>
	);
};

export default styled(Modal)`
&.ui.modal {
	left: auto;
	height: auto;
	top: 25%;
	font-size: 1.2rem;
	border-radius: 0rem;

	> .actions {
		border-top: 0px!important;
		background-color: white !important;
		padding: 0 3rem 3rem 3rem;
		margin-top: 2rem;
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	> .header {
		border-bottom:0px!important;
		font-family: font_mono;
		font-weight: 500!important;
		font-size: 1.8rem!important;
		padding: 2rem 3rem 0 3rem!important;
	}

	> .content {
		padding: 0 3rem;
		margin-top: 2rem;
	}
}
`;
