// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import getNetwork from 'src/util/getNetwork';

interface Props {
	className?: string
	isMotion?: boolean
	isProposal?: boolean
	isReferendum?: boolean
	isTreasuryProposal?: boolean
	onchainId?: string | number | null | undefined
}

const service = {
	POLKASCAN: 'polkascan',
	SUBSCAN: 'subscan'
};

const ExternalLinks = ({
	className,
	isMotion,
	isProposal,
	isReferendum,
	isTreasuryProposal,
	onchainId
}: Props) => {
	const network = getNetwork();

	const serviceMap = {
		[service.POLKASCAN]: (network: string) => {
			let url = '';
			const host = `https://polkascan.io/${network}`;

			if (isReferendum) {
				url = `${host}/democracy/referendum/${onchainId}`;
			}
			if (isProposal) {
				url = `${host}/democracy/proposal/${onchainId}`;
			}
			if (isMotion) {
				url = `${host}/council/motion/${onchainId}`;
			}
			if (isTreasuryProposal) {
				url = `${host}/treasury/proposal/${onchainId}`;
			}

			return url;
		},
		[service.SUBSCAN]: (network: string) => {
			let url = '';
			const host = `https://${network}.subscan.io`;

			if (isReferendum) {
				url = `${host}/referenda/${onchainId}`;
			}
			if (isProposal) {
				url = `${host}/democracy_proposal/${onchainId}`;
			}
			if (isMotion) {
				url = `${host}/council/${onchainId}`;
			}
			if (isTreasuryProposal) {
				url = `${host}/treasury/${onchainId}`;
			}

			return url;
		}
	};

	const getLink = (service: string): string => {
		return serviceMap[service](network);
	};

	return (
		<div className={className}>
			<div>
				<a href={getLink(service.POLKASCAN)} rel="noopener noreferrer" target='_blank'>{'-> Show in Polkascan'}</a>
			</div>
			<div>
				<a href={getLink(service.SUBSCAN)} rel="noopener noreferrer" target='_blank'>{'-> Show in Subscan'}</a>
			</div>
		</div>
	);
};

export default styled(ExternalLinks)`
	a {
		color: black_primary;
		font-weight: bold;
	}
`;
