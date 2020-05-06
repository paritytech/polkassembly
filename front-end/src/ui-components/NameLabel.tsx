// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import { Popup } from 'semantic-ui-react';

import Address from './Address';

interface Props {
    className?: string
    defaultAddress?: string | null
	displayname?: string | null
	username?: string
}

const NameLabel = ({ className, defaultAddress, displayname, username } : Props) => {

	return <div className={className}>
		<div className={'header inline'}>
			{
				defaultAddress
					? <Address address={defaultAddress} displayInline/>
					: displayname
						? displayname
						: username && <span>{username}</span>
			}
		</div>
	</div>;
};

export default styled(NameLabel)`
`;