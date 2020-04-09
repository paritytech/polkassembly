// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React, { ReactNode } from 'react';

interface Props {
	className?: string;
	children: ReactNode;
}

const Card = ({ className, children }:Props ) => {
	return (
		<div className={className}>{children}</div>
	);
};

export default styled(Card)`
	background-color: white;
	padding: 2rem 3rem 2rem 3rem;
	border-style: solid;
	border-width: 1px;
	border-color: grey_border;
	border-radius: 3px;
	margin-bottom: 1rem;
	@media only screen and (max-width: 768px) {
		padding: 2rem;
	}
`;