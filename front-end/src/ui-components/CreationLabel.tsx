// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import * as moment from 'moment';
import React, { ReactNode } from 'react';

import InlineTag from './InlineTag';
import NameLabel from './NameLabel';

interface Props{
	className?: string
	children?: ReactNode
	created_at?: Date
	defaultAddress?: string | null
	text?: string
	topic?: string
	username?: string
}

const CreationLabel = ({ className, children, created_at, defaultAddress, text='posted', username, topic } : Props) => {
	return <div className={className}>
		<NameLabel
			defaultAddress={defaultAddress}
			username={username}
		/>
		{text}&nbsp;
		{topic &&
			<>in <InlineTag>{topic}</InlineTag> </>
		}
		{created_at &&
			moment.utc(created_at, 'YYYY-MM-DDTHH:mm:ss.SSS').fromNow()
		}
		{children}
	</div>;
};

export default styled(CreationLabel)`
	color: grey_primary;
	font-weight: 400;
	font-size: sm;
	display: inline-flex;
	align-items: center;
`;