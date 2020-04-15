// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import cleanError from 'src/util/cleanError';

interface ErrorProps{
	className?: string,
	text: string
}

const FilteredError = ({ className, text } : ErrorProps) => {
	return <div className={className}>
		{cleanError(text)}
	</div>;
};

export default styled(FilteredError)`
	color: red_secondary;
	font-size: sm;
`;
