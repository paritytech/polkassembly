// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import styled from '@xstyled/styled-components';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon';
import { DropdownProps } from 'semantic-ui-react/dist/commonjs/modules/Dropdown';
import React from 'react';

import { Form } from 'src/ui-components/Form';
import AddressDropdown from '../../../ui-components/AddressDropdown';
import Popup from 'semantic-ui-react/dist/commonjs/modules/Popup';
interface Props{
    accounts: InjectedAccountWithMeta[]
    address: string
    className?: string;
    onAccountChange: (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => void
}
const AccountSelectionForm = ({ accounts, address, className, onAccountChange }: Props) =>
	<Form.Field className={className} width={16}>
		<label>Vote with account
			<Popup
				trigger={<Icon name='question circle'/>}
				content='You can choose account from polkadot-js extension.'
				style={{ fontSize: '1.2rem', marginLeft: '-1rem' }}
				hoverable={true}
			/>
		</label>
		<AddressDropdown
			accounts={accounts}
			defaultAddress={address || accounts[0]?.address}
			onAccountChange={onAccountChange}
		/>
	</Form.Field>;

export default styled(AccountSelectionForm)`
`;