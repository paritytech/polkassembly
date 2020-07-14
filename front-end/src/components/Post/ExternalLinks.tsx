// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import Button from 'src/ui-components/Button';
import Card from 'src/ui-components/Card';
import { Form } from 'src/ui-components/Form';
import getNetwork from 'src/util/getNetwork';

interface Props {
	isMotion?: boolean
	isProposal?: boolean
	isReferendum?: boolean
	isTreasuryProposal?: boolean
	isTipProposal?: boolean
	onchainId?: number | null
}

const ExternalLinks = ({
	isMotion,
	isProposal,
	isReferendum,
	isTreasuryProposal,
	isTipProposal,
	onchainId
}: Props) => {

	const navigateExternal = (service: string) => {

	};

	return (
		<Form>
			<Form.Group>
				<Form.Field width={8}>
					<Button
						className='external'
						onClick={navigateExternal('subscan')}
					>
						<img alt={'subscan'} width={100} height={20} src='/subscan.png'/>
					</Button>
				</Form.Field>
				<Form.Field width={8}>
					<Button
						className='external'
						onClick={navigateExternal('polkascan')}
					>
						<img alt={'polkascan'} height={20} src='/polkascan.png'/>
					</Button>
				</Form.Field>
			</Form.Group>
		</Form>
	);
};

export default ExternalLinks;
