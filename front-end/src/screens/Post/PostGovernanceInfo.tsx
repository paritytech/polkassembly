
import * as React from 'react';
import styled from 'styled-components';
import { OnchainLinkFragment } from '../../generated/graphql';

interface Props{
	className?: string
	isReferendum: boolean
	onchainLink: OnchainLinkFragment
}

const GovernancePostInfo = ({ className, isReferendum, onchainLink }: Props) => {
	if (!onchainLink) return null;

	const { onchain_proposal_id: proposalId, onchain_referendum_id: referendumId, onchain_proposal: onChainProposal } = onchainLink;
	const preimage = onChainProposal?.preimage;
	const { author, depositAmount, metaDescription, method, preimageArguments } = preimage || {};
	console.log('preimageArguments',preimageArguments);
	return (
		<div className={className}>
			{author && <>autor: {author} <br/></>}
			deposit: {depositAmount} KSM<br/>
			method: {method}<br/>
			{preimageArguments && preimageArguments.length
				? <> Arguments:<br/>
					{preimageArguments.map((element, index) => {
						return <div key={index}>{element.name}: {element.value}<br/></div>;
					})}
				</>
				: null}
			description: {metaDescription}<br/>
		</div>
	);
};

export default styled(GovernancePostInfo)`

`;