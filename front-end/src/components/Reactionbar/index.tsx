// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useState, useContext } from 'react';
import { Icon, TextAreaProps } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';

import { NotificationContext } from '../../context/NotificationContext';
import { NotificationStatus } from '../../types';
import { PostReactionFieldsFragment } from '../../generated/graphql';
import Button from '../../ui-components/Button';
import FilteredError from '../../ui-components/FilteredError';
import ReactionButton from './ReactionButton';

interface Props {
	className?: string
	reactions?: PostReactionFieldsFragment[]
}

const ReactionBar = function ({ reactions, className }: Props) {
	console.log(reactions);
	return (
		<div className={className}>
			<ReactionButton />
			<ReactionButton />
		</div>
	);
};

export default styled(ReactionBar)`
	background-color: white;
	border-style: solid;
	border-width: 1px;
	border-color: grey_light;
	margin-bottom: 1rem;
	padding: 5px;
`;
