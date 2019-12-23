import React from 'react';
import { Modal as SUIModal, ModalProps } from 'semantic-ui-react';
import styled from 'styled-components';

type Props = ModalProps & {
	buttons: React.ReactNode
	content?: string
	className?: string
	dismissModal?: () => void
	title?: string
}

const Modal = (props : Props) => {
	const { buttons, className, content, title } = props;

	return (
		<SUIModal className={className} centered dimmer='inverted' open size='tiny' {...props}>
			<SUIModal.Header>{title}</SUIModal.Header>
			<SUIModal.Content>
				<SUIModal.Description>
					<p>{content}</p>
				</SUIModal.Description>
			</SUIModal.Content>
			<SUIModal.Actions>
				{buttons}
			</SUIModal.Actions>
		</SUIModal>
	)
}

export default styled(Modal)`
&.ui.modal {
	left: auto;
	height: auto;
	top: auto;
	font-size: 1.2rem;

	> .actions {
		border-top:0px
	}

	> .header	{
		border-bottom:0px
	}
}
`;
