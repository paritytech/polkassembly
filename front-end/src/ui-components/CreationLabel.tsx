// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import * as moment from 'moment';
import React from 'react';
import { Popup } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';

import Address from './Address';
import Avatar from './Avatar';
import InlineTag from './InlineTag';

interface Props{
	address?: string
	avatar?: boolean
	className?: string
	created_at?: Date
	displayname?: string | null
	text?: string
	topic?: string
	username?: string
}

const CreationLabel = ({ address, avatar, className, created_at, displayname, text='posted', username, topic } : Props) => {
	return <div className={className}>
		{avatar && username &&
			<Avatar className='avatar' username={username} size={'sm'}/>
		}
		{
			displayname
				?
				<Popup
					trigger={<span>{displayname}</span>}
					content={username}
					hoverable={true}
					position='top center'
				/>
				: (username &&
					<span>{username}</span>
				)
		}
		{address &&
			<Address
				address={address}
				displayIdenticon={false}
				displayInline={true}
			/>
		}
		{text}&nbsp;
		{topic &&
			<>in <InlineTag>{topic}</InlineTag> </>
		}
		{created_at &&
			moment.utc(created_at, 'YYYY-MM-DDTHH:mm:ss.SSS').fromNow()
		}
	</div>;
};

export default styled(CreationLabel)`
	color: grey_primary;
	font-weight: 400;
	font-size: sm;
	margin-bottom: 0.6rem;
		
	span {
		color: black_text;
		font-weight: 500;
		margin-right: 0.3rem;
	}

	.avatar {
		margin-right: 0.2rem;
	}
`;