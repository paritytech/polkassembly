// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useEffect, useState } from 'react';
import { formatBalance } from '@polkadot/util';
import { ApiPromise } from '@polkadot/api';

interface Props {
	api: ApiPromise
	address: string
}

const Balance = ({ api, address }: Props) => {
	const [balance, setBalance] = useState<string>('0');

	useEffect(() => {
		let unsubscribe: () => void;

		api.query.balances
			.freeBalance(address, (currentBalance) => {
				setBalance(currentBalance.toString());
			})
			.then(unsub => { unsubscribe = unsub; })
			.catch(console.error);

		return () => unsubscribe && unsubscribe();
	}, [address, api.query.balances, api.query.balances.freeBalance]);

	return (
		<div className='text-muted'>
			{formatBalance(balance)} available
		</div>
	);
};

export default Balance;
