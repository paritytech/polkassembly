// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import Button from 'src/ui-components/Button';
import { Form } from 'src/ui-components/Form';
import getNetwork from 'src/util/getNetwork';

interface Props {
	isMotion?: boolean
	isProposal?: boolean
	isReferendum?: boolean
	onchainId?: number | null
}

const service = {
	POLKASCAN: 'polkascan',
	SUBSCAN: 'subscan'
};

const serviceMap = {
	[service.POLKASCAN]: (network: string) => `https://polkascan.io/${network}`,
	[service.SUBSCAN]: (network: string) => `https://${network}.subscan.io`
};

const ExternalLinks = ({
	isMotion,
	isProposal,
	isReferendum,
	onchainId
}: Props) => {
	const network = getNetwork();

	const navigateExternal = (service: string) => {
		let url = '';
		const host = serviceMap[service](network);

		switch (service) {
		case 'polkascan':
			if (isReferendum) {
				url = `${host}/democracy/referendum/${onchainId}`;
			}
			if (isProposal) {
				url = `${host}/democracy/proposal/${onchainId}`;
			}
			if (isMotion) {
				url = `${host}/council/motion/${onchainId}`;
			}
			break;
		case 'subscan':
			if (isReferendum) {
				url = `${host}/referenda/${onchainId}`;
			}
			if (isProposal) {
				url = `${host}/democracy_proposal/${onchainId}`;
			}
			if (isMotion) {
				url = `${host}/council/${onchainId}`;
			}
			break;
		}

		if (url) {
			window.open(url);
		}
	};

	return (
		<Form>
			<Form.Group>
				<Form.Field width={8}>
					<Button
						className='external'
						onClick={() => navigateExternal(service.POLKASCAN)}
					>
						<img alt={'polkascan'} height={20} src='/polkascan.png'/>
					</Button>
				</Form.Field>
				<Form.Field width={8}>
					<Button
						className='external'
						onClick={() => navigateExternal(service.SUBSCAN)}
					>
						<img alt={'subscan'} width={100} height={20} src='/subscan.png'/>
					</Button>
				</Form.Field>
			</Form.Group>
		</Form>
	);
};

export default ExternalLinks;
