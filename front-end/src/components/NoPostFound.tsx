import * as React from 'react';

interface Props{
    isMotion: boolean
    isProposal: boolean
    isReferendum: boolean
    isTreasuryProposal: boolean
}
const NoPostFound = ({ isMotion = false, isProposal = false, isReferendum = false, isTreasuryProposal = false }: Props) => {
	const postType =  isMotion
		? 'motion'
		: isProposal
			? 'proposal'
			: isReferendum
				? 'referendum'
				: isTreasuryProposal
					? 'treasury proposal'
					: 'post';
	return <div> Sorry, we couldn&apos;t find any {postType} with this id</div>;
};

export default NoPostFound;