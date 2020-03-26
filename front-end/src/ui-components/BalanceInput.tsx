// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import styled from '@xstyled/styled-components';
import { Form } from 'semantic-ui-react';

import Input from './Input';
import HelperTooltip from './HelperTooltip';
import BN from 'bn.js';
import { chainProperties } from 'src/global/networkConstants';
import getNetwork from 'src/util/getNetwork';

interface Props{
	className?: string
	label?: string
	helpText?: string
	onChange: (balance: BN) => void
	placeholder?: string
}

const BalanceInput = ({ className, label = '', helpText = '', onChange, placeholder = '' }: Props) => {
	const currentNetwork = getNetwork();
	const onBalanceChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const balance = new BN(event.currentTarget.value);
		const tokenDecimalBN = new BN(chainProperties[currentNetwork].tokenDecimals);
		const tenBN = new BN(10);

		onChange(balance.mul(tenBN.pow(tokenDecimalBN)));
	};

	return 	<Form.Field className={className} width={16}>
		<label>
			{label}
			{helpText && <HelperTooltip	content={helpText}/>}
		</label>
		<Input
			onChange={onBalanceChange}
			placeholder={placeholder}
			type='number'
		/>
	</Form.Field>;
};

export default styled(BalanceInput)`
`;
