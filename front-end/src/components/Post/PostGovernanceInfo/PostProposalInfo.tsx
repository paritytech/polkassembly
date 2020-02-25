import * as React from 'react';
/* import { Grid } from 'semantic-ui-react'; */
/* import styled from '@xstyled/styled-components'; */

import { OnchainLinkProposalFragment } from '../../../generated/graphql';
import { chainProperties } from '../../../global/networkConstants';
import getNetwork from '../../../util/getNetwork';
import PostOnChainInfo from './PostOnChainInfo';

interface Props{
	className?: string
	onchainLink: OnchainLinkProposalFragment
}

const currentNetwork = getNetwork();

const PostProposalInfo = ({ className, onchainLink }: Props) => {
	if (!onchainLink) return null;

	const {
		onchain_proposal: onchainProposal,
		proposer_address: proposerAddress
	} = onchainLink;
	const preimage = onchainProposal?.[0]?.preimage;
	const depositAmount = onchainProposal?.[0]?.depositAmount;
	const deposit = parseInt(depositAmount!) / Math.pow(10, chainProperties[currentNetwork].tokenDecimals) + ' ' + chainProperties[currentNetwork].tokenSymbol;

	const { metaDescription, method, preimageArguments } = preimage || {};

	return (
		<PostOnChainInfo
			className={className}
			deposit={deposit}
			description={metaDescription}
			method={method}
			/* preimageArguments={preimageArguments} */
			proposer={proposerAddress}
		>
			<>
				{preimageArguments && preimageArguments.length
					? <div className='info_group'>
						<h6>Arguments</h6>
						{preimageArguments.map((element, index) => {
							return <div className={'methodArguments'} key={index}>
								<span key={index}>{element.name}: {element.value}</span>
							</div>;
						})}
					</div>
					: null}
			</>
		</PostOnChainInfo>
	);
};

export default PostProposalInfo;