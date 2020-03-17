// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useState, useContext } from 'react';
import { Icon, TextAreaProps } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';

import { NotificationContext } from '../../context/NotificationContext';
import { NotificationStatus } from '../../types';
import Button from '../../ui-components/Button';
import FilteredError from '../../ui-components/FilteredError';

interface Props {
	className?: string
}

const ReactionButton = function ({ className }: Props) {
	// const { queueNotification } = useContext(NotificationContext);

	const handleReact = () => {
		// reportContentMutation({
		// 	variables: {
		// 		comments,
		// 		content_id: contentId,
		// 		network: NETWORK,
		// 		reason,
		// 		type
		// 	}
		// })
		// 	.then(({ data }) => {
		// 		if (data && data.reportContent && data.reportContent.message) {
		// 			queueNotification({
		// 				header: 'Success!',
		// 				message: data.reportContent.message,
		// 				status: NotificationStatus.SUCCESS
		// 			});
		// 		}
		// 		setShowModal(false);
		// 	})
		// 	.catch((e) => console.error('Error reporting content',e));
	};

	return (
		<>
			<Button
				className={className + ' social'}
				onClick={() => {}}
			>
				👍 4
			</Button>
		</>
	);
};

export default styled(ReactionButton)`
	color: #4183c4 !important;
`;
