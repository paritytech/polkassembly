// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import styled from '@xstyled/styled-components';
import React from 'react';
import { DropdownProps } from 'semantic-ui-react/dist/commonjs/modules/Dropdown';
import { Form } from 'src/ui-components/Form';

import Balance from '../components/Balance';
import AddressDropdown from './AddressDropdown';
import HelperTooltip from './HelperTooltip';

interface Props{
	accounts: InjectedAccountWithMeta[]
	address: string
	className?: string;
	onAccountChange: (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => void
	title: string
	withBalance?: boolean
}

const AccountSelectionForm = ({ accounts, address, className, onAccountChange, title, withBalance = false }: Props) =>
	<Form.Field className={className} width={16}>
		<label>{title}
			<HelperTooltip
				content='You can choose an account from the polkadot-js extension.'
			/>
		</label>
		<AddressDropdown
			accounts={accounts}
			defaultAddress={address || accounts[0]?.address}
			onAccountChange={onAccountChange}
		/>
		{withBalance &&
			<Balance address={address} className='balance'/>
		}
	</Form.Field>;

export default styled(AccountSelectionForm)`
	.ui.selection.dropdown {
		border-radius: 0rem;
	}

	.ui.dropdown .menu .active.item {
		font-weight: 500;
	}

	.ui.dropdown .menu>.item:hover {
		background-color: grey_light;
	}

	.ui.selection.dropdown:focus, .ui.selection.active.dropdown, .ui.selection.active.dropdown:hover, .ui.selection.active.dropdown .menu {
		border-color: grey_light;
	}

	.balance {
		text-align: right;
	}
`;
