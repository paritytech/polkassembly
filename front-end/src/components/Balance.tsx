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
