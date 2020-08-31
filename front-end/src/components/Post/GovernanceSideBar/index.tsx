// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { web3Accounts, web3Enable,web3FromSource } from '@polkadot/extension-dapp';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { ApiPromiseContext } from '@substrate/context';
import styled from '@xstyled/styled-components';
import React, { useContext, useState } from 'react';
import { DropdownProps } from 'semantic-ui-react';
import { OnchainLinkMotionFragment, OnchainLinkProposalFragment, OnchainLinkReferendumFragment, OnchainLinkTipFragment, OnchainLinkTreasuryProposalFragment } from 'src/generated/graphql';
import { APPNAME } from 'src/global/appName';
import { motionStatus, proposalStatus, referendumStatus, tipStatus } from 'src/global/statuses';
import { VoteThreshold } from 'src/types';
import { Form } from 'src/ui-components/Form';

import ExtensionNotDetected from '../../ExtensionNotDetected';
import EndorseTip from './EndorseTip';
import MotionVoteInfo from './Motions/MotionVoteInfo';
import VoteMotion from './Motions/VoteMotion';
import ProposalDisplay from './Proposals';
import ReferendumVoteInfo from './Referenda/ReferendumVoteInfo';
import VoteReferendum from './Referenda/VoteReferendum';

interface Props {
	className?: string
	isMotion?: boolean
	isProposal?: boolean
	isReferendum?: boolean
	isTreasuryProposal?: boolean
	isTipProposal?: boolean
	onchainId?: string | number | null
	onchainLink?: OnchainLinkMotionFragment | OnchainLinkProposalFragment | OnchainLinkReferendumFragment | OnchainLinkTreasuryProposalFragment | OnchainLinkTipFragment
	status?: string
}

const GovenanceSideBar = ({ className, isMotion, isProposal, isReferendum, isTipProposal, onchainId, onchainLink, status }: Props) => {
	const [address, setAddress] = useState<string>('');
	const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([]);
	const [extensionNotFound, setExtensionNotFound] = useState(false);
	const [accountsNotFound, setAccountsNotFound] = useState(false);
	const { api } = useContext(ApiPromiseContext);

	const canVote = !!status && !![proposalStatus.PROPOSED, referendumStatus.STARTED, motionStatus.PROPOSED, tipStatus.OPENED].includes(status);

	const onAccountChange = (event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) => {
		const addressValue = data.value as string;
		setAddress(addressValue);
	};

	const getAccounts = async (): Promise<undefined> => {
		const extensions = await web3Enable(APPNAME);

		if (extensions.length === 0) {
			setExtensionNotFound(true);
			return;
		} else {
			setExtensionNotFound(false);
		}

		const accounts = await web3Accounts();

		if (accounts.length === 0) {
			setAccountsNotFound(true);
			return;
		} else {
			setAccountsNotFound(false);
		}

		setAccounts(accounts);
		if (accounts.length > 0) {
			setAddress(accounts[0].address);

			const injected = await web3FromSource(accounts[0].meta.source);

			api.setSigner(injected.signer);
		}

		return;
	};

	if (extensionNotFound) {
		return (
			<div className={className}>
				<div className='card'>
					<ExtensionNotDetected />
				</div>
			</div>
		);
	}

	if (accountsNotFound) {
		return (
			<div className={className}>
				<div className='card'>
					<div className='text-muted'>You need at least one account in Polkadot-js extenstion to use this feature.</div>
					<div className='text-muted'>Please reload this page after adding accounts.</div>
				</div>
			</div>
		);
	}

	return (
		<>
			{ canVote
				? <div className={className}>
					<Form standalone={false}>
						{isMotion && <>
							{(onchainId || onchainId === 0) &&
								<MotionVoteInfo
									motionId={onchainId as number}
								/>
							}
							{canVote &&
								<VoteMotion
									accounts={accounts}
									address={address}
									getAccounts={getAccounts}
									motionId={onchainId as number}
									motionProposalHash={(onchainLink as OnchainLinkMotionFragment)?.onchain_motion?.[0]?.motionProposalHash}
									onAccountChange={onAccountChange}
								/>
							}
						</>}
						{isProposal &&
							<ProposalDisplay
								accounts={accounts}
								address={address}
								canVote={canVote}
								getAccounts={getAccounts}
								onAccountChange={onAccountChange}
								proposalId={onchainId  as number}
							/>
						}
						{isReferendum &&
							<>
								{(onchainId || onchainId === 0) &&
									<ReferendumVoteInfo
										referendumId={onchainId  as number}
										threshold={((onchainLink as OnchainLinkReferendumFragment).onchain_referendum[0]?.voteThreshold) as VoteThreshold}
									/>
								}
								{canVote && <VoteReferendum
									accounts={accounts}
									address={address}
									getAccounts={getAccounts}
									onAccountChange={onAccountChange}
									referendumId={onchainId  as number}
								/>
								}
							</>
						}
						{isTipProposal && canVote &&
							<EndorseTip
								accounts={accounts}
								address={address}
								getAccounts={getAccounts}
								tipHash={onchainId as string}
								onAccountChange={onAccountChange}
							/>
						}
					</Form>
				</div>
				: null
			}
		</>
	);
};

export default styled(GovenanceSideBar)`

	@media only screen and (max-width: 768px) {
		.ui.form {
			padding: 0rem;
		}
	}
`;
