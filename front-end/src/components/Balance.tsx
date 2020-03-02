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
			{formatBalance(balance)} KSM available
		</div>
	);
};

export default Balance;
