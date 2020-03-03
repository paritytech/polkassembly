import React from 'react';
import { Form as SUIForm, FormProps as SUIFormProps } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';

import Input from './Input';
import Field from './Field';
import Group from './Group';

type FormProps = SUIFormProps & {
    className? : string,
    standalone? : boolean
};

Form.Input = Input;
Form.Field = Field;
Form.Group = Group;

export function Form({ className, standalone=true, ...props } : FormProps): React.ReactElement{
	return <StyledForm className={standalone ? `${className} standalone`  : className } {...props} />;
}

const StyledForm = styled(SUIForm)`
	&.standalone {
		background-color: white;
		margin-top: 4rem;
		padding: 2rem 3rem 3rem 3rem;
		border-style: solid;
		border-width: 1px;
		border-color: grey_light;
	}

	h3 {
		font-family: font_mono;
		font-size: 2.4rem;
		margin-bottom: 3rem;
	}

	.field {
		label {
			font-weight: 500;
		}
	}

	.text-muted {
		font-size: sm;
		color: grey_primary;
		margin-bottom: 1.2rem;

		a {
			color: grey_primary;
			border-bottom-style: solid;
			border-bottom-width: 1px;
			border-bottom-color: grey_primary;
		}
	}

	&.ui.form {

		font-size: sm;
		
		.field {
			> label {
				font-size: input_text_size;
				font-weight: 500;
				color: black_primary;
				margin-bottom: 0.6rem;
			}
		}

		.fields {
			margin-bottom: 1.2rem;

			@media only screen and (max-width: 767px) {
				margin-bottom: 1.25rem;
			}
		}

		input:not([type]), input[type=date], input[type=datetime-local], input[type=email], 
		input[type=file], input[type=number], input[type=password], input[type=search], input[type=tel], 
		input[type=text], input[type=time], input[type=url] {
			font-family: font_default;
			font-size: 1.3rem;
			color: black_primary;
			border-style: solid;
			border-width: 1px;
			border-color: grey_light;
			border-radius: 0rem;
			text-indent: 0rem;
			padding: 1rem;
			margin-bottom: 1.2rem;
			&:focus {
				font-family: font_default;
				font-size: 1.3rem;
				color: black_text;
				border-color: grey_primary;
				border-radius: 0rem;
			}
			&:hover {
				border-color: grey_secondary;
			}
		}

		input::selection, textarea::selection {
			color: black_text;
			background-color: grey_light;
		}

		@media only screen and (max-width: 576px) {
			margin-top: 0rem;
			padding: 2rem;
		}
	}

	.ui.toggle.checkbox {
		label {
			font-size: sm;
			font-weight: 400;
			color: black_text !important;
		}

		input:checked~label:before {
			background-color: pink_primary !important;
		}
	}

	.ui.selection.dropdown {
		margin-bottom: 1.2rem;
		border-radius: 0rem;
	}

	.ui.dropdown {
		.menu .active.item {
			font-weight: 500;
		}

		.menu>.item:hover {
			background-color: grey_light;
		}
	}

	.ui.selection.dropdown:focus,
	.ui.selection.active.dropdown,
	.ui.selection.active.dropdown:hover,
	.ui.selection.active.dropdown .menu {
		border-color: grey_light;
	}
`;