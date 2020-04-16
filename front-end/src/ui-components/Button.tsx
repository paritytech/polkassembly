// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import styled from '@xstyled/styled-components';
import React from 'react';
import { Button as SUIButton, ButtonProps } from 'semantic-ui-react';

const Button = (props : ButtonProps) => {
	return <SUIButton {...props} />;
};

export default styled(Button)`
	&.ui.button, &.active, &:active  {   
		font-family: font_default;
		font-size: md;
		font-weight: 500;
		text-transform: capitalize;
		letter-spacing: 0.06rem;
		line-height: 1.6rem;
		border-radius: button_radius;
		border: none;
		padding: 0.8rem 1.6rem;
		transition-property: background-color;
		transition-duration: 0.2s;
		&.ui.tiny.button {
			font-size: sm;
			padding: 0.6rem 1.2rem;
		}
		&.ui.small.button {
			font-size: md;
			padding: 0.6rem 1.2rem;
		}
		&.ui.medium.button {
			font-size: md;
			padding: 0.8rem 1.6rem;
		}
		&.ui.large.button {
			font-size: lg;
			padding: 1.2rem 2rem;
		}
		&.ui.primary.button {
			background-color: pink_primary;
			color: white;
			&:hover, &:focus {
				background-color: pink_secondary;
				outline: none;
			}
		}
		&.ui.primary.positive.button {
			background-color: green_primary !important;
			color: white!important;
			&:hover, &:focus {
				background-color: green_secondary !important;
				color: white !important;
				box-shadow: none !important;
				outline: none;
			}
		}
		&.ui.primary.negative.button {
			background-color: red_primary !important;
			color: white!important;
			box-shadow: none !important;
			&:hover, &:focus {
				background-color: red_secondary !important;
				color: white !important;
				box-shadow: none !important;
				outline: none;
			}
		}
		&.ui.secondary.button{
			background-color: white;
			color: grey_primary;
			box-shadow: 0 0 0 1px inset !important;
			&:hover, &:focus {
				color: black_text;
				background-color: grey_light;
				box-shadow: box_shadow_secondary_grey !important;
				outline: none;
			}
		}
		&.ui.secondary.negative.button {
			background-color: white;
			color: grey_primary;
			box-shadow: 0 0 0 1px inset !important;
			&:hover, &:focus {
				background-color: red_secondary;
				color: white;
				box-shadow: box_shadow_secondary_red;
				outline: none;
			}
		}
		&.ui.social.button {
			background-color: white;
			color: grey_primary;
			font-size: sm;
			border: none;
			padding: 0.7rem 0.7rem;
			margin: 0 0.4rem 0 0;
			text-transform: none;
			letter-spacing: 0rem;
			border-radius: 0.2rem;
			&:hover{
				background-color: grey_light;
				border: none;
			}
		}
		&.ui.button>.icon:not(.button) {
			opacity: 1;
		}
		&.ui.social.negative.button {
			background-color: white;
			color: red_primary;
			font-size: sm;
			border: none;
			padding: 0.7rem 0.7rem;
			text-transform: none;
			letter-spacing: 0rem;
			&:hover {
				background-color: red_light;
				border: none;
			}
		}
	}

	&.ui.button>.icon:not(.button), &.ui.button:not(.icon)>.icon:not(.button):not(.dropdown) {
		margin: 0 0.4rem 0 0;
		height: 1.6rem;
	}

	.icon {
		vertical-align: middle;
		font-size: md;
	}
`;