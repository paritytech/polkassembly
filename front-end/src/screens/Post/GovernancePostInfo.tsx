
import * as React from 'react';
import styled from 'styled-components';

interface Props{
	className?: string
	proposalId?: number | null
	referendumId?: number | null
}

const GovernancePostInfo = ({ className, proposalId, referendumId }: Props) => {
	return (
		<div className={className}>
			{proposalId}
		</div>
	);
};

export default styled(GovernancePostInfo)`

`;