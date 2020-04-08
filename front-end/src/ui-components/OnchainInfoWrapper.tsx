// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React, { ReactNode } from 'react';

interface Props {
	children: ReactNode
	className?: string
}

const OnchainInfoWrapper = ({ children, className }: Props) => {

	return (
		<div className={className}>{children}</div>
	);
};

export default styled(OnchainInfoWrapper)`
	background-color: white;
	padding: 2rem 3rem 2rem 3rem;
	border-style: solid;
	border-width: 5px;
	border-color: grey_light;
	font-size: sm;
	overflow-wrap: break-word;
	margin-bottom: 1rem;
	font-family: font_mono;

	h6 {
		font-family: font_mono;
		font-size: sm;
	}

	h4 {
		font-size: lg;
		font-family: font_mono;
		margin-bottom: 2rem;
	}

	.methodArguments {
		display: inline-block;
		overflow-x: auto;
		width: 100%;
		word-wrap: normal;
	}

	.motion-sub-info{
		background-color: grey_light;
	}

	@media only screen and (max-width: 576px) {
		padding: 2rem;
	}
`;