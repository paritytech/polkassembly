// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import React, { useState } from 'react';
import styled from '@xstyled/styled-components';

import { Form } from './Form';
import HelperTooltip from './HelperTooltip';
import Input from './Input';
import { inputToBn } from '../util/inputToBn';

interface Props{
	className?: string
	label?: string
	helpText?: string
	onChange: (balance: BN) => void
	placeholder?: string
}

const BalanceInput = ({ className, label = '', helpText = '', onChange, placeholder = '' }: Props) => {
	const [isValidInput, setIsValidInput] = useState(true);
	const onBalanceChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const [balance, isValid] = inputToBn(event.currentTarget.value, false);
		setIsValidInput(isValid);

		if(isValid){
			onChange(balance);
		}
	};

	return 	<Form.Field className={className} width={16}>
		<label>
			{label}
			{helpText && <HelperTooltip	content={helpText}/>}
		</label>
		<Input
			className={isValidInput ? 'balanceInput' : 'balanceInput invalid'}
			onChange={onBalanceChange}
			placeholder={placeholder}
			type='string'
		/>
	</Form.Field>;
};

export default styled(BalanceInput)`

	.balanceInput {
		padding: 0;
	}

	.invalid {
		color:  red_primary;
		border-color: red_primary;
	}
`;
