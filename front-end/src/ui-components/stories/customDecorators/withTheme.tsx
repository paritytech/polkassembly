import React from 'react';
import { ThemeProvider } from '@xstyled/styled-components';

import { GlobalStyle } from '../../GlobalStyle';
import { theme } from '../../../themes/theme';

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