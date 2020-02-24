import React from 'react';
import styled from '@xstyled/styled-components';

interface ErrorProps{
	className?: string,
	text: string
}

const cleanError = function (text:string): string {
	return text.replace(/Network error: |GraphQL error: /g,'');
};

const FilteredError = ({ className, text } : ErrorProps) => {
	return <div className={className}>
		{cleanError(text)}
	</div>;
};

export default styled(FilteredError)`
	color: red_secondary;
	font-size: sm;
`;
