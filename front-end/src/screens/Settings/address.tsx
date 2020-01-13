import React, { useState, useEffect } from 'react';
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';

import { Form } from '../../ui-components/Form';

const APP = 'polkassembly';
const polkadotExtension = 'https://chrome.google.com/webstore/detail/polkadot%7Bjs%7D-extension/mopnmbcafieddcagagdcbnhejhlodfdd?hl=en'; // TODO: add mozilla

const Address = (): JSX.Element => {
	const [accounts, setAccounts] = useState<any[]>([]);

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

	// TODO: generate avtar image svg logo
	return (
		<div>
			<div className="header">Available Addresses</div>
			{accounts.length ? (
				<div className="ui list">
					{accounts.map(account => (
						<div key={account.address} className="item">
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
