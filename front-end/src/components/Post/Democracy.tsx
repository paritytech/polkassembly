import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ApiPromise, WsProvider } from '@polkadot/api';
import styled from '@xstyled/styled-components';
import { web3Accounts, web3FromSource, web3Enable } from '@polkadot/extension-dapp';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';

import { UserDetailsContext } from '../../context/UserDetailsContext';
import getExtensionUrl from '../../util/getExtensionUrl';
import SecondProposal from './SecondProposal';
import VoteRefrendum from './VoteRefrendum';

interface Props {
	className?: string
	isProposal?: boolean
	isReferendum?: boolean
	onchainId?: number | null | undefined
}

const WS_PROVIDER = process.env.REACT_APP_WS_PROVIDER || 'wss://kusama-rpc.polkadot.io';
const APPNAME = process.env.REACT_APP_APPNAME || 'polkassembly';

const Democracy = ({ className, isProposal, isReferendum, onchainId }: Props) => {
	const currentUser = useContext(UserDetailsContext);

	const [extensionNotFound, setExtensionNotFound] = useState(false);
	const [accountsNotFound, setAccountsNotFound] = useState(false);
	const [linkedAddressNotFound, setLinkedAddressNotFound] = useState(false);
	const [linkedAddressNotAvailable, setLinkedAddressNotAvailable] = useState(false);
	const [api, setApi] = useState<ApiPromise>();
	const [apiReady, setApiReady] = useState(false);

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
			// TODO: Show user that he is not connected to a node
			console.error(error);
		});
	}, []);

	const getLinkedAccount = async (): Promise<InjectedAccountWithMeta | undefined> => {
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

		const accountMap: {[key: string]: InjectedAccountWithMeta} = {};

		accounts.forEach(account => {
			accountMap[account.address] = account;
		});

		const linkedAddress = currentUser?.addresses && currentUser?.addresses[0];

		if (!linkedAddress) {
			setLinkedAddressNotFound(true);
			return;
		} else {
			setLinkedAddressNotFound(false);
		}

		const linkedAccount = accountMap[linkedAddress || ''];

		if (!linkedAccount) {
			setLinkedAddressNotAvailable(true);
			return;
		} else {
			setLinkedAddressNotAvailable(false);
		}

		const injected = await web3FromSource(linkedAccount.meta.source);

		if (api) {
			api.setSigner(injected.signer);
		}

		return linkedAccount;
	};

	if (extensionNotFound) {
		return (
			<div className={className}>
				<div className='card'>
					<div className='text-muted'>Polkadot-js extension not detected.</div>
					<div className='text-muted'>Please reload this page after installing <a href={getExtensionUrl()}>Polkadot-js extension</a>.</div>
				</div>
			</div>
		);
	}

	if (accountsNotFound) {
		return (
			<div className={className}>
				<div className='card'>
					<div className='text-muted'>Please add accounts to polkadot js extenstion to use this feature.</div>
					<div className='text-muted'>Please reload this page after adding accounts.</div>
				</div>
			</div>
		);
	}

	if (linkedAddressNotFound) {
		return (
			<div className={className}>
				<div className='card'>
					<div className='text-muted'>Please link an address in <Link to={'/settings'}>settings</Link> to use this feature.</div>
					<div className='text-muted'>Please reload this page after linking address.</div>
				</div>
			</div>
		);
	}

	if (linkedAddressNotAvailable) {
		return (
			<div className={className}>
				<div className='card'>
					<div className='text-muted'>Linked address not available in polkadot extension. Please add linked address in polkadot extension.</div>
					<div className='text-muted'>Please reload this page after adding address.</div>
				</div>
			</div>
		);
	}

	if (isProposal) {
		return <SecondProposal proposalId={onchainId} api={api} apiReady={apiReady} getLinkedAccount={getLinkedAccount} />;
	}

	if (isReferendum) {
		return <VoteRefrendum referendumId={onchainId} api={api} apiReady={apiReady} getLinkedAccount={getLinkedAccount} />;
	}

	return null;
};

export default styled(Democracy)`
	.card {
		background-color: white;
		padding: 2rem 3rem 4rem 3rem;
		border-style: solid;
		border-width: 1px;
		border-color: grey_light;
		margin-bottom: 1rem;
	}
`;
