// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { DeriveBalancesAccount } from '@polkadot/api-derive/types';
import React, { useContext, useEffect, useState } from 'react';
import formatBnBalance from 'src/util/formatBnBalance';

import { ApiContext } from '../context/ApiContext';

interface Props {
	address: string
}

const Balance = ({ address }: Props) => {
	const [balance, setBalance] = useState<string>('0');
	const { api } = useContext(ApiContext);

	useEffect(() => {
		let unsubscribe: () => void;

		if (!api) {
			console.error('polkadot/api not set');
			return;
		}

		api.derive.balances.account(address, (info : DeriveBalancesAccount) =>
			setBalance(info.freeBalance?.toString() || '0')
		)
			.then(unsub => { unsubscribe = unsub; })
			.catch(e => console.error(e));

		return () => unsubscribe && unsubscribe();
	}, [address, api]);

	return (
		<div className='text-muted'>
			{formatBnBalance(balance, { numberAfterComma: 2, withUnit: true })} available.
		</div>
	);
};

export default Balance;