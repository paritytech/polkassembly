import React, { useState, useContext, useEffect } from 'react';
import { Icon } from 'semantic-ui-react';
import { web3Accounts, web3FromSource, web3Enable } from '@polkadot/extension-dapp';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { stringToHex } from '@polkadot/util';
import Identicon from '@polkadot/react-identicon';

import getExtensionUrl from '../../util/getExtensionUrl';
import { NotificationContext } from '../../context/NotificationContext';
import { useAddressesQuery, useAddressLinkConfirmMutation, useAddressLinkStartMutation, useAddressUnlinkMutation } from '../../generated/graphql';
import Button from '../../ui-components/Button';
import { NotificationStatus } from '../../types';

const APP = 'polkassembly';

const Address = (): JSX.Element => {
	const [linked, setLinked] = useState<{[key: string]: boolean}>({});
	const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([]);
	const [addressLinkStartMutation] = useAddressLinkStartMutation({ context: { uri : process.env.REACT_APP_AUTH_SERVER_GRAPHQL_URL } });
	const [addressLinkConfirmMutation] = useAddressLinkConfirmMutation({ context: { uri : process.env.REACT_APP_AUTH_SERVER_GRAPHQL_URL } });
	const [addressUnlinkMutation] = useAddressUnlinkMutation({ context: { uri : process.env.REACT_APP_AUTH_SERVER_GRAPHQL_URL } });
	const { data } = useAddressesQuery({ context: { uri : process.env.REACT_APP_AUTH_SERVER_GRAPHQL_URL } });
	const { queueNotification } = useContext(NotificationContext);

	useEffect(() => {
		async function connect() {
			await web3Enable(APP);

			const allAccounts = await web3Accounts();

			setAccounts(allAccounts);
		}

		connect();
	}, []);

	useEffect(() => {
		const addresses = (data && data.addresses) || [];
		addresses.forEach((address) => {
			if (address && address.address) {
				linked[address.address] = true;
			}
		});

		setLinked(linked);

	}, [data, linked]);

	const handleLink = async (account: any) => {
		try {
			const injected = await web3FromSource(account.meta.source);
			const signRaw = injected && injected.signer && injected.signer.signRaw;

			if (!signRaw) {
				return console.error('Signer not available');
			}

			const addressLinkStartResult = await addressLinkStartMutation({
				variables: {
					address: account.address
				}
			});

			if (!addressLinkStartResult || !addressLinkStartResult.data || !addressLinkStartResult.data.addressLinkStart) {
				return console.error('Address link start mutaion failed');
			}

			const { signature } = await signRaw({
				address: account.address,
				data: stringToHex(addressLinkStartResult.data.addressLinkStart.sign_message || ''),
				type: 'bytes'
			});

			const addressLinkConfirmResult = await addressLinkConfirmMutation({
				variables: {
					address_id: addressLinkStartResult.data.addressLinkStart.address_id || 0,
					signature
				}
			});

			linked[account.address] = true;

			setLinked(linked);

			queueNotification({
				header: 'Success!',
				message: (addressLinkConfirmResult && addressLinkConfirmResult.data && addressLinkConfirmResult.data.addressLinkConfirm && addressLinkConfirmResult.data.addressLinkConfirm.message) || '',
				status: NotificationStatus.SUCCESS
			});
		} catch (error) {
			queueNotification({
				header: 'Failed!',
				message: error.message,
				status: NotificationStatus.ERROR
			});
		}
	};

	const handleUnlink = async (account: any) => {
		try {
			const addressUnlinkConfirmResult = await addressUnlinkMutation({
				variables: {
					address: account.address
				}
			});

			linked[account.address] = false;

			setLinked(linked);

			queueNotification({
				header: 'Success!',
				message: (addressUnlinkConfirmResult && addressUnlinkConfirmResult.data && addressUnlinkConfirmResult.data.addressUnlink && addressUnlinkConfirmResult.data.addressUnlink.message) || '',
				status: NotificationStatus.SUCCESS
			});
		} catch (error) {
			queueNotification({
				header: 'Failed!',
				message: error.message,
				status: NotificationStatus.ERROR
			});
		}
	};

	const shorten = (address: string) => {
		if (!address || address.length < 8) {
			return address;
		}

		return `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
	};

	const linkIcon = <><Icon name='chain'/> Link</>;
	const unlinkIcon = <><Icon name='broken chain'/> Unlink</>;

	// TODO: generate avtar image svg logo
	return (
		<div>
			<div className="header">Available Addresses</div>
			{accounts.length ? (
				<div className="ui list">
					{accounts.map(account => (
						<div key={account.address} className="item">
							<div className="right floated content">
								<Button
									className={'social'}
									onClick={() => linked[account.address] ? handleUnlink(account) : handleLink(account)}
								>
									{linked[account.address] ? unlinkIcon : linkIcon}
								</Button>
							</div>
							<Identicon
								className="image"
								value={account.address}
								size={32}
								theme={'polkadot'}
							/>
							<div className="content">
								<div className="header">{account.meta.name}</div>
								<div className="description">{shorten(account.address)}</div>
							</div>
						</div>
					))}
				</div>
			) : (
				<>
					<div>No addresses detected</div>
					<div>Please reload this page with <a href={getExtensionUrl()}>Polkadot extension</a>.</div>
				</>
			)}
		</div>
	);
};

export default Address;
