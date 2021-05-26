// Copyright 2019-2020 @Premiurly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useContext, useEffect, useState } from 'react';
import { ApiContext } from 'src/context/ApiContext';
import { LoadingStatusType } from 'src/types';
import formatBnBalance from 'src/util/formatBnBalance';

import ProposalVoteInfo from './ProposalVoteInfo';
import SecondProposal, { SecondProposalProps } from './SecondProposal';

type Props = SecondProposalProps & {
	canVote: boolean
}

const ProposalDisplay = ({ proposalId, accounts, address, canVote, getAccounts, onAccountChange }: Props) => {
	const { api, apiReady } = useContext(ApiContext);
	const [seconds, setSeconds] = useState(0);
	const [deposit, setDeposit] = useState('');
	const [loadingStatus, setLoadingStatus] = useState<LoadingStatusType>({ isLoading: true, message:'Loading proposal info' });

	useEffect(() => {
		if (!api) {
			return;
		}

		if (!apiReady) {
			return;
		}

		let unsubscribe: () => void;

		api.derive.democracy.proposals( proposals => {
			proposals.forEach((proposal) => {
				if (proposal.index.toNumber() === proposalId && proposal.balance) {
					setLoadingStatus({ isLoading: false, message: '' });
					setSeconds(proposal.seconds.length);
					setDeposit(formatBnBalance(proposal.balance, { numberAfterComma: 2, withUnit: true }));
				}
			});
		})
			.then(unsub => {unsubscribe = unsub;})
			.catch(e => console.error(e));

		return () => unsubscribe && unsubscribe();

	}, [api, apiReady, proposalId]);

	return (
		<>
			{(proposalId || proposalId === 0) &&
				<ProposalVoteInfo
					deposit={deposit}
					loadingStatus={loadingStatus}
					seconds={seconds}
				/>}
			{canVote &&
				<SecondProposal
					accounts={accounts}
					address={address}
					getAccounts={getAccounts}
					onAccountChange={onAccountChange}
					proposalId={proposalId}
					seconds={seconds}
				/>}
		</>
	);
};

export default ProposalDisplay;
