import React from 'react';
import { Dropdown, DropdownItemProps, DropdownProps } from 'semantic-ui-react';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';

import Address from 'src/ui-components/Address';

interface Props{
    accounts: InjectedAccountWithMeta[]
    defaultAddress: string
    defaultAddressName: string
    onAccountChange: (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => void
}

const AddressDropdown = ({ accounts, defaultAddress, onAccountChange }: Props) => {
	const addressOptions: DropdownItemProps[] = accounts.map(
		account => ({
			children: <Address
				accountName={account.meta.name}
				address={account.address}
			/>,
			value: account.address
		})
	);

	const _onAccountChange = (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
		onAccountChange(event, data);
	};

	return <Dropdown
		defaultValue={defaultAddress}
		onChange={_onAccountChange}
		options={addressOptions}
		trigger={<Address
			accountName={defaultAddressName}
			address={defaultAddress}
		/>}
	/>;
};

export default AddressDropdown;