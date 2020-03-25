// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useContext, useEffect, useState } from 'react';
import { DeriveAccountInfo } from '@polkadot/api-derive/types';
import Identicon from '@polkadot/react-identicon';
import styled from '@xstyled/styled-components';

import shortenAddress from '../util/shortenAddress';
import { ApiContext } from '../context/ApiContext';

interface Props {
	className?: string
	address: string
	accountName?: string
	displayInline?: boolean
}

const Address = ({ address, accountName, className, displayInline }: Props): JSX.Element => {
	const { api } = useContext(ApiContext);
	const [display, setDisplay] = useState<string>('');

	useEffect(() => {
		let unsubscribe: () => void;

		if (!api || !api.isReady) {
			console.error('polkadot/api not set or not ready');
			return;
		}

		api.derive.accounts.info(address, (info: DeriveAccountInfo) =>
			setDisplay(info.identity.display || info.nickname || ''))
			.then(unsub => { unsubscribe = unsub; })
			.catch(e => console.error(e));

		return () => unsubscribe && unsubscribe();
	}, [address, api]);

	return (
		<div className={displayInline ? `${className} inline`: className}>
			<Identicon
				className='image identicon'
				value={address}
				size={displayInline ? 16 : 32}
				theme={'polkadot'}
			/>
			<div className='content'>
				{display || accountName
					? <div className={displayInline ? 'header inline' : 'header'}>{display || accountName}</div>
					: <div className={displayInline ? 'description inline' :'description'}>{shortenAddress(address)}</div>
				}
			</div>
		</div>
	);
};

export default styled(Address)`
	position: relative;
	display: flex;
	align-items: center;

	.content {
		display: inline-flex;
		line-height: 1.6rem;
	}

	.identicon {
		margin-right: 1rem;
	}

	.header {
		color: black_text;
		font-weight: 500;
		font-size: sm;
		filter: grayscale(100%);
		margin-right: 0.4rem;
	}

	.description {
		color: grey_primary;
		font-size: xs;
		margin-right: 0.4rem;
	}

	.inline {
		display: inline-flex !important;
		font-size: sm !important;
	}
`;
