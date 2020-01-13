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

			setAccounts(allAccounts);
		}

		connect();
	}, []);

	return (
		<Form standalone={false}>
			<Form.Group>
				<Form.Field width={10}>
					<label>Available Addresses</label>
					{accounts.length ? (
						<ul>
							{accounts.map(account => (
								<li key={account.address}>
									<div>{account.meta.name}</div>
									<div>{account.address}</div>
									<button>Link</button>
								</li>
							))}
						</ul>
					) : (
						<>
							<div>No addresses detected</div>
							<div>Please reload this page with <a href={polkadotExtension}>Polkadot extension</a>.</div>
						</>
					)}
				</Form.Field>
			</Form.Group>
		</Form>
	);
};

export default Address;
