import React, { useState, useContext, useEffect } from 'react';
import { Icon } from 'semantic-ui-react';
import { web3Accounts, web3FromSource, web3Enable } from '@polkadot/extension-dapp';
import { stringToHex } from '@polkadot/util';

import { NotificationContext } from '../../context/NotificationContext';
import { useAddressLinkConfirmMutation, useAddressLinkStartMutation } from '../../generated/graphql';
import Button from '../../ui-components/Button';
import { NotificationStatus } from '../../types';

const APP = 'polkassembly';
const polkadotExtension = 'https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd?hl=en'; // TODO: add mozilla

const Address = (): JSX.Element => {
	const [accounts, setAccounts] = useState<any[]>([]);
	const [addressLinkStartMutation] = useAddressLinkStartMutation({ context: { uri : process.env.REACT_APP_AUTH_SERVER_GRAPHQL_URL } });
	const [addressLinkConfirmMutation] = useAddressLinkConfirmMutation({ context: { uri : process.env.REACT_APP_AUTH_SERVER_GRAPHQL_URL } });
	const { queueNotification } = useContext(NotificationContext);

	useEffect(() => {
		async function connect() {
			const allInjected = await web3Enable(APP);

			console.log(allInjected);

			const allAccounts = await web3Accounts();

			console.log(allAccounts);

			setAccounts(allAccounts);
		}

		connect();
	}, []);

	const handleLink = async (account: any) => {
		try {
			const injected = await web3FromSource(account.meta.source);
			const signRaw = injected && injected.signer && injected.signer.signRaw;

			if (!signRaw) {
				return console.error('Signer not available');
			}

			const addressLinkStartResult = await addressLinkStartMutation({
				variables: {
					address: account.address,
					name: account.meta.name,
					source: account.meta.source
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

			queueNotification({
				header: 'Success!',
				message: addressLinkConfirmResult && addressLinkConfirmResult.data && addressLinkConfirmResult.data.addressLinkConfirm && addressLinkConfirmResult.data.addressLinkConfirm.message || '',
				status: NotificationStatus.SUCCESS
			});
		} catch (error) {
			queueNotification({
				header: 'Failed!',
				message: e.message,
				status: NotificationStatus.ERROR
			});
		}
	};

	// TODO: generate avtar image svg logo
	return (
		<div>
			<div className="header">Available Addresses</div>
			{accounts.length ? (
				<div className="ui list">
					{accounts.map(account => (
						<div key={account.address} className="item">
							<div className="right floated content">
								<Button className={'social'} onClick={() => handleLink(account)}><Icon name='chain'/>Link</Button>
							</div>
							<img className="ui avatar image" src="/polkadot.png" />
							<div className="content">
								<div className="header">{account.meta.name}</div>
								<div className="description">{account.address}</div>
							</div>
						</div>
					))}
				</div>
			) : (
				<>
					<div>No addresses detected</div>
					<div>Please reload this page with <a href={polkadotExtension}>Polkadot extension</a>.</div>
				</>
			)}
		</div>
	);
};

export default Address;
