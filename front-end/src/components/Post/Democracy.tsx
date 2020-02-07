import React, { useContext, useEffect, useState } from 'react';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { web3Accounts, web3FromSource, web3Enable } from '@polkadot/extension-dapp';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';

import { UserDetailsContext } from '../../context/UserDetailsContext';
import { NotificationContext } from '../../context/NotificationContext';
import { NotificationStatus } from '../../types';
import SecondProposal from './SecondProposal';
import VoteRefrendum from './VoteRefrendum';

interface Props {
	isProposal?: boolean
	isReferendum?: boolean
	onchainId?: number | null | undefined
}

const WS_PROVIDER = process.env.WS_PROVIDER || 'wss://kusama-rpc.polkadot.io';
const APP = process.env.APP || 'polkassembly';

const Democracy = ({ isProposal, isReferendum, onchainId }: Props) => {
	const currentUser = useContext(UserDetailsContext);

	const [api, setApi] = useState<ApiPromise>();
	const [apiReady, setApiReady] = useState(false);
	const { queueNotification } = useContext(NotificationContext);

	useEffect(() => {
		async function connect() {
			const provider = new WsProvider(WS_PROVIDER);
			const apiResult = await ApiPromise.create({ provider });

			setApi(apiResult);
			apiResult.isReady.then(() => {
				setApiReady(true);
				console.log('API ready');
			});
		}

		connect().catch((error) => {
			queueNotification({
				header: 'Failed!',
				message: error.message,
				status: NotificationStatus.ERROR
			});
		});
	}, []);

	const getLinkedAccount = async (): Promise<InjectedAccountWithMeta | undefined> => {
		const extensions = await web3Enable(APP);

		if (extensions.length === 0) {
			queueNotification({
				header: 'Failed!',
				message: 'Please install polkadot js extenstion to use this feature',
				status: NotificationStatus.ERROR
			});

			return;
		}

		const accounts = await web3Accounts();

		if (accounts.length === 0) {
			queueNotification({
				header: 'Failed!',
				message: 'Please add accounts to polkadot js extenstion to use this feature',
				status: NotificationStatus.ERROR
			});

			return;
		}

		const accountMap: {[key: string]: InjectedAccountWithMeta} = {};

		accounts.forEach(account => {
			accountMap[account.address] = account;
		});

		const linkedAddress = currentUser?.addresses && currentUser?.addresses[0];

		if (!linkedAddress) {
			queueNotification({
				header: 'Failed!',
				message: 'Please link an address in settings',
				status: NotificationStatus.ERROR
			});

			return;
		}

		const linkedAccount = accountMap[linkedAddress || ''];

		if (!linkedAccount) {
			queueNotification({
				header: 'Failed!',
				message: 'Linked account not available',
				status: NotificationStatus.ERROR
			});

			return;
		}

		const injected = await web3FromSource(linkedAccount.meta.source);

		if (api) {
			api.setSigner(injected.signer);
		}

		return linkedAccount;
	};

	if (isProposal) {
		return <SecondProposal proposalId={onchainId} api={api} apiReady={apiReady} getLinkedAccount={getLinkedAccount} />;
	}

	if (isReferendum) {
		return <VoteRefrendum referendumId={onchainId} api={api} apiReady={apiReady} getLinkedAccount={getLinkedAccount} />;
	}

	return null;
};

export default Democracy;
