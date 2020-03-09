import React, { useEffect, useState } from 'react';
import { formatBalance } from '@polkadot/util';
import { DerivedBalancesAccount } from '@polkadot/api-derive/types';
import { ApiPromise } from '@polkadot/api';

interface Props {
	api: ApiPromise
	address: string
}

const Balance = ({ api, address }: Props) => {
	const [balance, setBalance] = useState<string>('0');

	useEffect((): void => {
		api.derive.balances.account(address, ((info : DerivedBalancesAccount) =>
			setBalance(info.freeBalance?.toString() || '0')
		));

	}, [address, api]);

	return (
		<div className='text-muted'>
			{formatBalance(balance)} available
		</div>
	);
};

export default Balance;
