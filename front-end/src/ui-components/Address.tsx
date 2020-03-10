// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import * as React from 'react';

import Identicon from '@polkadot/react-identicon';
import styled from '@xstyled/styled-components';

import shortenAddress from '../util/shortenAddress';

interface Props {
	className?: string
	address: string
	accountName?: string
}

const Address = ({ address, accountName, className }: Props): JSX.Element => (
	<div className={className}>
		<Identicon
			className='image'
			value={address}
			size={32}
			theme={'polkadot'}
		/>
		<div className='content'>
			<div className='header'>{accountName || ''}</div>
			<div className='description'>{shortenAddress(address)}</div>
		</div>
	</div>
);

export default styled(Address)`
	position: relative;
	display: flex;
	align-items: center;

	.content {
		padding-left: 1rem;
		display: inline-block;
		line-height: 1.6rem;
	}

	.header {
		color: black_text;
		font-weight: 500;
		font-size: sm;
	}

	.description {
		color: grey_primary;
		font-size: xs;
	}
`;
