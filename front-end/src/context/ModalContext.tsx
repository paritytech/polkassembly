import React, { createContext, useState } from 'react';

import { ModalContextType, ModalType } from '../types';

const initialModalContext : ModalContextType = {
	dismissModal: () => {
		throw new Error('dismissModal function must be overridden');
	},
	modal : {},
	setModal: () => {
		throw new Error('setModal function must be overridden');
	}
};

export const ModalContext = createContext(initialModalContext);

export const ModalProvider = ({ children }: React.PropsWithChildren<{}>) => {
	const [modal, setModal] = useState<ModalType>({});

	const dismissModal = () => setModal({});

	return (
		<ModalContext.Provider value={{ dismissModal, modal, setModal }}>
			{children}
		</ModalContext.Provider>
	);
};