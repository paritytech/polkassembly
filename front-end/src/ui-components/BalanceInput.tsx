// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useState } from 'react';
import styled from '@xstyled/styled-components';
import { Form } from 'semantic-ui-react';

import Input from './Input';
import HelperTooltip from './HelperTooltip';
import BN from 'bn.js';
// import { chainProperties } from 'src/global/networkConstants';
// import getNetwork from 'src/util/getNetwork';
import { inputToBn } from 'src/util/inputToBn';

interface Props{
	className?: string
	label?: string
	helpText?: string
	onChange: (balance: BN) => void
	placeholder?: string
}

const BalanceInput = ({ className, label = '', helpText = '', onChange, placeholder = '' }: Props) => {
	const [isValidInput, setIsValidInput] = useState(true);
	// const currentNetwork = getNetwork();
	const onBalanceChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		const [balance, isValid] = inputToBn(event.currentTarget.value, { isZeroable: false });
		// const tokenDecimalBN = new BN(chainProperties[currentNetwork].tokenDecimals);
		// const TEN = new BN(10);

		console.log('isValid', isValid);
		setIsValidInput(isValid);
		if(isValid){
			onChange(balance);
		}
	};

	return 	<Form.Field className={isValidInput ? className : `${className} invalid`} width={16}>
		<label>
			{label}
			{helpText && <HelperTooltip	content={helpText}/>}
		</label>
		<Input
			onChange={onBalanceChange}
			placeholder={placeholder}
			type='string'
		/>
	</Form.Field>;
};

export default styled(BalanceInput)`
	.invalid {
		color: red;
	}
`;
