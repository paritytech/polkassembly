// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import styled from '@xstyled/styled-components';
import React from 'react';

interface Props {
	className?: string;
	min: number;
	max: number;
	step: number;
	value: number;
	onChange: (value: number) => void
}

const Slider = ({ className, min, max, step, value, onChange }: Props) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(parseInt(event.target.value) || min);
	};

	const steps = [];

	for (let i = min; i <= max; i += step) {
		steps.push(i);
	}

	return (
		<div className={className}>
			<input type="range" min={min} max={max} step={step} value={value} list="steplist" onChange={handleChange} />
			<datalist id="steplist">
				{steps.map(step => <option key={step}>{step}</option>)}
			</datalist>
		</div>
	);
};

export default styled(Slider)`
	width: 100%;

	input[type=range] {
		width: 100%;
		margin: 7.5px 0;
		background-color: transparent;
		-webkit-appearance: none;
	}
	input[type=range]:focus {
		outline: none;
	}
	input[type=range]::-webkit-slider-runnable-track {
		background: #E5007A;
		border: 0;
		border-radius: 10px;
		width: 100%;
		height: 5px;
		cursor: pointer;
	}
	input[type=range]::-webkit-slider-thumb {
		margin-top: -7.5px;
		width: 20px;
		height: 20px;
		background: #FFFFFF;
		border: 3px solid #E5007A;
		border-radius: 20px;
		cursor: pointer;
		-webkit-appearance: none;
	}
	input[type=range]:focus::-webkit-slider-runnable-track {
		background: #E5007A;
	}
	input[type=range]::-moz-range-track {
		background: #E5007A;
		border: 0;
		border-radius: 10px;
		width: 100%;
		height: 5px;
		cursor: pointer;
	}
	input[type=range]::-moz-range-thumb {
		width: 20px;
		height: 20px;
		background: #ffffff;
		border: 3.px solid #E5007A;
		border-radius: 20px;
		cursor: pointer;
	}
`;
