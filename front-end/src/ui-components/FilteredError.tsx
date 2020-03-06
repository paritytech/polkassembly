import React from 'react';
import styled from '@xstyled/styled-components';

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
