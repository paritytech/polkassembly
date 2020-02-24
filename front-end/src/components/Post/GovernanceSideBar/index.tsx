import React, { useContext, useEffect, useState } from 'react';
import { DropdownProps, DropdownItemProps } from 'semantic-ui-react';
import { ApiPromise, WsProvider } from '@polkadot/api';
import styled from '@xstyled/styled-components';
import { web3Accounts, web3FromSource, web3Enable } from '@polkadot/extension-dapp';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import Identicon from '@polkadot/react-identicon';

import ExtensionNotDetected from '../../ExtensionNotDetected';
import { UserDetailsContext } from '../../../context/UserDetailsContext';
import shortenAddress from '../../../util/shortenAddress';
import SecondProposal from './SecondProposal';
import VoteRefrendum from './VoteRefrendum';
import { proposalStatus, referendumStatus, motionStatus } from 'src/global/statuses';

interface Props {
	className?: string
	isProposal?: boolean
	isReferendum?: boolean
	onchainId?: number | null | undefined
	status?: string
}

const WS_PROVIDER = process.env.REACT_APP_WS_PROVIDER || 'wss://kusama-rpc.polkadot.io';
const APPNAME = process.env.REACT_APP_APPNAME || 'polkassembly';

const GovenanceSideBar = ({ className, isProposal, isReferendum, onchainId, status }: Props) => {
	const currentUser = useContext(UserDetailsContext);
	const defaultAddress = currentUser?.addresses?.[0] || '';
	const [address, setAddress] = useState<string>('');
	const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([]);
	const [extensionNotFound, setExtensionNotFound] = useState(false);
	const [accountsNotFound, setAccountsNotFound] = useState(false);
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

	const addressOptions: DropdownItemProps[] = accounts.map(
		account => ({
			children: (
				<>
					<Identicon
						className="image"
						value={account.address}
						size={32}
						theme={'polkadot'}
					/>
					<div className="content" style={{ display: 'inline-block' }}>
						<div className="header">{account.meta.name}</div>
						<div className="description">{shortenAddress(account.address)}</div>
					</div>
				</>
			),
			text: `${account.meta.name} - ${shortenAddress(account.address)}`,
			value: account.address
		})
	);

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

	if (status && [proposalStatus.PROPOSED, referendumStatus.STARTED, motionStatus.PROPOSED].includes(status)){
		{
			return (
				<>
					{isProposal &&
						<SecondProposal
							proposalId={onchainId}
							api={api}
							apiReady={apiReady}
							getAccounts={getAccounts}
							onAccountChange={onAccountChange}
							accounts={accounts}
							address={address}
							defaultAddress={defaultAddress}
							addressOptions={addressOptions}
						/>}

					{isReferendum &&
						<VoteRefrendum
							referendumId={onchainId}
							api={api}
							apiReady={apiReady}
							getAccounts={getAccounts}
							onAccountChange={onAccountChange}
							accounts={accounts}
							address={address}
							defaultAddress={defaultAddress}
							addressOptions={addressOptions}
						/>}
				</>
			);
		}
	}

	return null;
};

export default styled(GovenanceSideBar)`
	.card {
		background-color: white;
		padding: 2rem 3rem 4rem 3rem;
		border-style: solid;
		border-width: 1px;
		border-color: grey_light;
		margin-bottom: 1rem;
	}
`;
