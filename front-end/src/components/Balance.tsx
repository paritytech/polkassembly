// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useEffect, useState } from 'react';
import { ApiPromise } from '@polkadot/api';
import { DerivedBalancesAccount } from '@polkadot/api-derive/types';
import { formatBalance } from '@polkadot/util';

interface Props {
	api: ApiPromise
	address: string
}

const Balance = ({ api, address }: Props) => {
	const [balance, setBalance] = useState<string>('0');

	useEffect(() => {
		let unsubscribe: () => void;

		api.derive.balances.account(address, ((info : DerivedBalancesAccount) =>
			setBalance(info.freeBalance?.toString() || '0')
		))
			.then(unsub => { unsubscribe = unsub; })
			.catch(e => console.error(e));

		return () => unsubscribe && unsubscribe();
	}, [address, api]);

	return (
		<div className='text-muted'>
			{formatBalance(balance)} available
		</div>
	);
};

export default Balance;
