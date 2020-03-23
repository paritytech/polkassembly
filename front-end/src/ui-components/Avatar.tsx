// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import styled from '@xstyled/styled-components';

interface Props {
    className?: string
	displayname?: string | null
	username: string | null
	size?: 'sm' | 'md' | 'lg'
}

const Avatar = ({ className, displayname, username, size }: Props) => {

	return (
		<div className={size? `${className} ${size}` : className}>
			{displayname ? displayname.substring(0, 1) : username?.substring(0, 1)}
		</div>
	);
};

export default styled(Avatar)`
	border-radius: 50%;
	display: inline-block;
	vertical-align: top;
	overflow: hidden;
	text-transform: uppercase;
	text-align: center;
	background-color: grey_primary;
	color: white;
	&.sm {
		width: 2rem;
		height: 2rem;
		font-size: xs;
	}
	&.md {
		width: 3rem;
		height: 3rem;
		font-size: md;
	}
	&.lg {
		width: 4rem;
		height: 4rem;
		font-size: lg;
		line-height: 4rem;
	}
`;