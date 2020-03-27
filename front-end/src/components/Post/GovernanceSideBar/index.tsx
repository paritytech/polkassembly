// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React, { useContext, useState } from 'react';
import { DropdownProps } from 'semantic-ui-react';
import styled from '@xstyled/styled-components';
import { web3Accounts, web3FromSource, web3Enable } from '@polkadot/extension-dapp';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';

import { ApiContext } from '../../../context/ApiContext';
import ExtensionNotDetected from '../../ExtensionNotDetected';
import ReferendumVoteInfo from './Referenda/ReferendumVoteInfo';
import SecondProposal from './Proposals/SecondProposal';
import VoteReferendum from './Referenda/VoteReferendum';
import { OnchainLinkMotionFragment, OnchainLinkProposalFragment, OnchainLinkReferendumFragment, OnchainLinkTreasuryProposalFragment } from 'src/generated/graphql';
import { proposalStatus, referendumStatus, motionStatus } from 'src/global/statuses';
import VoteMotion from './VoteMotion';
import ProposalVoteInfo from './Proposals/ProposalVoteInfo';
import { Form } from 'src/ui-components/Form';

interface Props {
	className?: string
	isMotion?: boolean
	isProposal?: boolean
	isReferendum?: boolean
	isTreasuryProposal?: boolean
	onchainId?: number | null
	onchainLink?: OnchainLinkMotionFragment | OnchainLinkProposalFragment | OnchainLinkReferendumFragment | OnchainLinkTreasuryProposalFragment
	status?: string
}

const APPNAME = process.env.REACT_APP_APPNAME || 'polkassembly';

const GovenanceSideBar = ({ className, isMotion, isProposal, isReferendum, onchainId, onchainLink, status }: Props) => {
	const [address, setAddress] = useState<string>('');
	const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([]);
	const [extensionNotFound, setExtensionNotFound] = useState(false);
	const [accountsNotFound, setAccountsNotFound] = useState(false);
	const { api } = useContext(ApiContext);

	const canVote = !!status && !![proposalStatus.PROPOSED, referendumStatus.STARTED, motionStatus.PROPOSED].includes(status);

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

			if (!api) {
				console.error('polkadot/api not set');
				return;
			}

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
					<div className='card'>
						<Form standalone={false}>
							{isMotion && canVote &&
							<VoteMotion
								accounts={accounts}
								address={address}
								getAccounts={getAccounts}
								motionId={onchainId}
								motionProposalHash={(onchainLink as OnchainLinkMotionFragment)?.onchain_motion?.[0]?.motionProposalHash}
								onAccountChange={onAccountChange}
							/>
							}
							{isProposal && (
								<>
									{(onchainId || onchainId === 0) && <ProposalVoteInfo proposalId={onchainId}/>}
									{canVote && <SecondProposal
										accounts={accounts}
										address={address}
										getAccounts={getAccounts}
										onAccountChange={onAccountChange}
										proposalId={onchainId}
									/>}
								</>
							)}
							{isReferendum && (
								<>
									{(onchainId || onchainId === 0) && <ReferendumVoteInfo referendumId={onchainId} />}
									{canVote && <VoteReferendum
										accounts={accounts}
										address={address}
										getAccounts={getAccounts}
										onAccountChange={onAccountChange}
										referendumId={onchainId}
									/>
									}
								</>
							)}
						</Form>
					</div>
				</div>
				: null
			}
		</>
	);
};

export default styled(GovenanceSideBar)`
	.card {
		background-color: white;
		padding: 2rem 3rem 2rem 3rem;
		border-style: solid;
		border-width: 1px;
		border-color: grey_light;
		margin-bottom: 1rem;
		@media only screen and (max-width: 768px) {
			padding: 2rem;
		}
	}
	
	@media only screen and (max-width: 768px) {
		.ui.form {
			padding: 0rem;
		}
	}
`;
