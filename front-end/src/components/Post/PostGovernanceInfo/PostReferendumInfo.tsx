import * as React from 'react';
/* import { Grid } from 'semantic-ui-react'; */
/* import styled from '@xstyled/styled-components'; */

import { OnchainLinkReferendumFragment } from '../../../generated/graphql';
import PostOnChainInfo from './PostOnChainInfo';

interface Props{
	className?: string
	onchainLink: OnchainLinkReferendumFragment
}

const PostReferendumInfo = ({ className, onchainLink }: Props) => {
	if (!onchainLink) return null;

	const {
		onchain_referendum: onchainReferendum,
		proposer_address: proposerAddress
	} = onchainLink;

	if ( !onchainReferendum?.[0] ){
		return null;
	}

	const { delay, end, preimage, voteThreshold } = onchainReferendum?.[0];
	const { metaDescription, method, preimageArguments } = preimage || {};

	return (
		<PostOnChainInfo
			className={className}
			delay={delay}
			description={metaDescription}
			end={end}
			method={method}
			proposer={proposerAddress}
			voteThreshold={voteThreshold}
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

export default PostReferendumInfo;