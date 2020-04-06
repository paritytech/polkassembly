// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import styled from '@xstyled/styled-components';

import Address from '../ui-components/Address';
import TopicTag from '../ui-components/TopicTag';

interface Props {
	address?: string
	className?: string
	topic: string
}

const OnchainCreationLabel = ({ address, className, topic }:Props ) => {
	return (
		<div className={className}>
			by
			<Address
				address={address || ''}
				className='address'
				displayInline={true}
			/>
				from <TopicTag topic={topic} />
		</div>
	);
};

export default styled(OnchainCreationLabel)`
	display: inline-flex;
	align-items: center;
	font-size: sm;
	color: black_text;
`;