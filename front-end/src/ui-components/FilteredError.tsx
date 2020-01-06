import React from 'react';
import styled from 'styled-components';

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
	color: #D94C3D;
	font-size: 1.2rem;
`;
