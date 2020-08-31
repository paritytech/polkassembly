// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import { Checkbox, CheckboxProps, Form } from 'semantic-ui-react';

import Card from '../ui-components/Card';

interface Props {
	className?: string
	showOwnProposals: boolean
	onShowOwnProposalChange: (value: boolean) => void
}

const Filters = ({ className, showOwnProposals, onShowOwnProposalChange }:  Props) => {

	const onOwnProposalChanged = (event: React.FormEvent<HTMLInputElement>, data: CheckboxProps) => {
		onShowOwnProposalChange(data.checked || false);
	};

	return (
		<Card className={className}>
			<Form>
				<Form.Group>
					<Form.Field className={className}>
						<h6>Filters</h6>
					</Form.Field>
				</Form.Group>
				<Form.Group>
					<Form.Field>
						<Checkbox label='Show own proposal' checked={showOwnProposals} toggle onChange={onOwnProposalChanged} />
					</Form.Field>
				</Form.Group>
			</Form>
		</Card>
	);
};

export default Filters;
