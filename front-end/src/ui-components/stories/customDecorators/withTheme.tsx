// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { ThemeProvider } from '@xstyled/styled-components';
import React from 'react';

import { theme } from '../../../themes/theme';
import { GlobalStyle } from '../../GlobalStyle';

export const withTheme = (
	storyFn: () => React.ReactElement
): React.ReactElement => {
	return (
		<React.Fragment>
			<GlobalStyle />
			<ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
		</React.Fragment>
	);
};