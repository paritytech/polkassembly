// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';

import Address from './Address';

interface Props {
    className?: string
    defaultAddress?: string | null
	username?: string
}

const NameLabel = ({ className, defaultAddress, username } : Props) => {

	return <div className={className}>
		<div className={'header inline'}>
			{
				defaultAddress
					? <Address address={defaultAddress} displayInline popupContent={username}/>
					: <span>{username}</span>
			}
		</div>
	</div>;
};

export default styled(NameLabel)`
	color: grey_primary;
	font-weight: 400;
	font-size: sm;
	display: inline-flex;

	span {
		color: black_text;
		font-weight: 500;
		margin-right: 0.3rem;
		line-height: 1.3rem;
	}
`;
