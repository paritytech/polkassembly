// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useContext, useEffect, useState } from 'react';
import { Icon } from 'semantic-ui-react';

import { NotificationContext } from '../context/NotificationContext';
import { NotificationStatus } from '../types';
import Button from '../ui-components/Button';

interface DiscussionProps {
	onchainId: string | number;
	isBounty?: boolean
	isMotion?: boolean
	isProposal?: boolean
	isReferendum?: boolean
	isTreasuryProposal?: boolean
	isTechCommitteeProposal?: boolean
	isTipProposal?: boolean
}

const TrackerButton = function ({
	onchainId,
	isBounty,
	isMotion,
	isProposal,
	isReferendum,
	isTreasuryProposal,
	isTechCommitteeProposal,
	isTipProposal
}:DiscussionProps) {
	const [tracked, setTracked] = useState(false);
	const { queueNotification } = useContext(NotificationContext);
	let postType = 'post';
	if (isBounty) {
		postType = 'bounty';
	}
	if (isMotion) {
		postType = 'motion';
	}
	if (isProposal) {
		postType = 'proposal';
	}
	if (isReferendum) {
		postType = 'referendum';
	}
	if (isTreasuryProposal) {
		postType = 'treasuryProposal';
	}
	if (isTechCommitteeProposal) {
		postType = 'techCommitteeProposal';
	}
	if (isTipProposal) {
		postType = 'tipProposal';
	}

	useEffect(() => {
		let trackMap: any = {};
		try {
			trackMap = JSON.parse(global.window.localStorage.getItem('trackMap') || '{}');
		} catch (error) {
			console.error(error);
		}

		if (trackMap[postType]?.[onchainId]) {
			setTracked(true);
		}
	}, [onchainId, postType]);

	const handleTrack = () => {
		let trackMap: any = {};
		try {
			trackMap = JSON.parse(global.window.localStorage.getItem('trackMap') || '{}');
		} catch (error) {
			console.error(error);
		}

		if (!trackMap[postType]) {
			trackMap[postType] = {};
		}

		if (tracked) {
			delete trackMap[postType][onchainId];
		} else {
			trackMap[postType][onchainId] = 1;
		}

		global.window.localStorage.setItem('trackMap', JSON.stringify(trackMap));

		queueNotification({
			header: 'Success!',
			message: `Post #${onchainId} ${tracked ? 'removed from' : 'added to'} personal tracker`,
			status: NotificationStatus.SUCCESS
		});

		setTracked(!tracked);
	};

	return (
		<Button
			className={'social' + (tracked ? ' negative' : '')}
			onClick={handleTrack}
		>
			<Icon name='remove bookmark'/>{tracked ? 'Untrack' : 'Track'}
		</Button>
	);
};

export default TrackerButton;
