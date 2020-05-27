// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { web3Accounts, web3Enable,web3FromSource } from '@polkadot/extension-dapp';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { stringToHex } from '@polkadot/util';
import styled from '@xstyled/styled-components';
import React, { useContext, useState } from 'react';
import { Grid, Icon, Popup } from 'semantic-ui-react';
import getNetwork from 'src/util/getNetwork';

import ExtensionNotDetected from '../../components/ExtensionNotDetected';
import { NotificationContext } from '../../context/NotificationContext';
import { UserDetailsContext } from '../../context/UserDetailsContext';
import { useAddressLinkConfirmMutation, useAddressLinkStartMutation, useAddressUnlinkMutation, useSetDefaultAddressMutation } from '../../generated/graphql';
import { handleTokenChange } from '../../services/auth.service';
import { NotificationStatus } from '../../types';
import AddressComponent from '../../ui-components/Address';
import Button from '../../ui-components/Button';
import { Form } from '../../ui-components/Form';
import cleanError from '../../util/cleanError';
import getEncodedAddress from '../../util/getEncodedAddress';
import getExtensionUrl from '../../util/getExtensionUrl';

interface Props{
	className?: string
}

const APPNAME = process.env.REACT_APP_APPNAME || 'polkassembly';
const NETWORK = getNetwork();

const Address = ({ className }: Props): JSX.Element => {
	const currentUser = useContext(UserDetailsContext);
	const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([]);
	const [extensionNotAvailable, setExtensionNotAvailable] = useState(false);
	const [addressLinkStartMutation] = useAddressLinkStartMutation();
	const [addressLinkConfirmMutation] = useAddressLinkConfirmMutation();
	const [addressUnlinkMutation] = useAddressUnlinkMutation();
	const [setDefaultAddressMutation] = useSetDefaultAddressMutation();
	const { queueNotification } = useContext(NotificationContext);

	const handleDetect = async () => {
		const extensions = await web3Enable(APPNAME);

		if (extensions.length === 0) {
			setExtensionNotAvailable(true);
			return;
		} else {
			setExtensionNotAvailable(false);
		}

		const allAccounts = await web3Accounts();

		setAccounts(allAccounts);
	};

	const handleDefault = async (address: InjectedAccountWithMeta['address']) => {
		try {
			const addressDefaultResult = await setDefaultAddressMutation({
				variables: {
					address
				}
			});

			if (addressDefaultResult.data?.setDefaultAddress?.token) {
				handleTokenChange(addressDefaultResult.data?.setDefaultAddress?.token, currentUser);
			}

			queueNotification({
				header: 'Success!',
				message: addressDefaultResult.data?.setDefaultAddress?.message || '',
				status: NotificationStatus.SUCCESS
			});
		} catch (error) {
			console.error(error);
			queueNotification({
				header: 'Failed!',
				message: cleanError(error.message),
				status: NotificationStatus.ERROR
			});
		}
	};

	const handleLink = async (address: InjectedAccountWithMeta['address'], account: InjectedAccountWithMeta) => {
		try {
			const injected = await web3FromSource(account.meta.source);
			const signRaw = injected && injected.signer && injected.signer.signRaw;

			if (!signRaw) {
				return console.error('Signer not available');
			}

			const addressLinkStartResult = await addressLinkStartMutation({
				variables: {
					address,
					network: NETWORK
				}
			});

			if (!addressLinkStartResult?.data?.addressLinkStart) {
				return console.error('Address link start mutaion failed');
			}

			const { signature } = await signRaw({
				address,
				data: stringToHex(addressLinkStartResult.data.addressLinkStart.sign_message || ''),
				type: 'bytes'
			});

			const addressLinkConfirmResult = await addressLinkConfirmMutation({
				variables: {
					address_id: addressLinkStartResult.data.addressLinkStart.address_id || 0,
					signature
				}
			});

			if (addressLinkConfirmResult.data?.addressLinkConfirm?.token) {
				handleTokenChange(addressLinkConfirmResult.data?.addressLinkConfirm?.token, currentUser);
			}

			queueNotification({
				header: 'Success!',
				message: addressLinkConfirmResult?.data?.addressLinkConfirm?.message || '',
				status: NotificationStatus.SUCCESS
			});
		} catch (error) {
			console.error(error);
			queueNotification({
				header: 'Failed!',
				message: cleanError(error.message),
				status: NotificationStatus.ERROR
			});
		}
	};

	const handleUnlink = async (address: InjectedAccountWithMeta['address']) => {
		try {
			const addressUnlinkConfirmResult = await addressUnlinkMutation({
				variables: {
					address
				}
			});

			if (addressUnlinkConfirmResult.data?.addressUnlink?.token) {
				handleTokenChange(addressUnlinkConfirmResult.data?.addressUnlink?.token, currentUser);
			}

			queueNotification({
				header: 'Success!',
				message: addressUnlinkConfirmResult?.data?.addressUnlink?.message || '',
				status: NotificationStatus.SUCCESS
			});
		} catch (error) {
			console.error(error);
			queueNotification({
				header: 'Failed!',
				message: cleanError(error.message),
				status: NotificationStatus.ERROR
			});
		}
	};

	const linkIcon = <><Icon name='chain'/>Link</>;
	const unlinkIcon = <><Icon name='broken chain'/>Unlink</>;

	if (extensionNotAvailable) {
		return (
			<Form className={className} standalone={false}>
				<Form.Group>
					<Form.Field width={16}>
						<ExtensionNotDetected />
					</Form.Field>
				</Form.Group>
			</Form>
		);
	}

	const UnlinkButton = ({ address } : {address: string}) => {

		const StyledUnlinkButton = ({ withClickHandler = false }: {withClickHandler?: boolean}) =>
			<Button
				className={'social'}
				disabled={withClickHandler ? false : true}
				negative
				onClick={() => withClickHandler ? handleUnlink(address) : null }
			>
				{unlinkIcon}
			</Button>;

		return currentUser.defaultAddress === address
			? <Popup
				trigger={<span><StyledUnlinkButton/></span>}
				content={"You can't unlink your default address"}
				hoverable={true}
				position="top center"
			/>
			: <StyledUnlinkButton withClickHandler/>;
	};

	const SetDefaultAddress = ({ address }: {address : string}) => {
		return currentUser.defaultAddress !== address
			?
			<div className='button-container default-button'>
				<Button
					className={'social'}
					onClick={() => handleDefault(address)}
				>
					Set default
				</Button>
			</div>
			:
			<div className='default-label'>
				<Icon name='check'/> Default address
			</div>;
	};

	interface AccountsDetails {
		accounts: InjectedAccountWithMeta[];
		showAccounts: boolean;
		title: string;
	}

	const addressList = ({ accounts, showAccounts, title }: AccountsDetails) => {

		return (
			<>
				<Form.Group>
					<Form.Field width={16}>
						<label className='header'>{title}</label>
						<div className='ui list'>
							{accounts.map(account => {
								const address = getEncodedAddress(account.address);
								const isLinked = address && currentUser.addresses?.includes(address);

								return address &&
									<Grid key={address}>
										<Grid.Column width={7}>
											<div className='item'>
												<AddressComponent className='item' address={address} extensionName={account.meta.name} />
											</div>
										</Grid.Column>
										<Grid.Column width={3}>
											<div className='button-container'>
												{ isLinked
													? <UnlinkButton address={address}/>
													:
													<Button
														className={'social'}
														onClick={() => handleLink(address, account) }
													>
														{linkIcon}
													</Button>

												}
											</div>
										</Grid.Column>
										<Grid.Column width={6} >
											{isLinked && <SetDefaultAddress address={address}/>}
										</Grid.Column>
									</Grid>;
							})}
						</div>
					</Form.Field>
				</Form.Group>
				{showAccounts && <Form.Group>
					<Form.Field width={16}>
						<div className='text-muted'>Associate your account with an on chain address using the <a href={getExtensionUrl()}>Polkadot-js extension</a>.</div>
						<div className='link-button-container'>
							<Button primary onClick={handleDetect}>
								Show Available Accounts
							</Button>
						</div>
					</Form.Field>
				</Form.Group>}
			</>
		);
	};

	return (
		<Form className={className} standalone={false}>
			{accounts.length
				? addressList({
					accounts,
					showAccounts: false,
					title: 'Available addresses'
				})
				: addressList({
					accounts: currentUser?.addresses?.sort().map((address): InjectedAccountWithMeta => ({
						address: address,
						meta: { source: '' }
					})) || [],
					showAccounts: true,
					title: 'Linked addresses'
				})
			}
		</Form>
	);
};

export default styled(Address)`
	.button-container {
		position: absolute;
		top: 50%;
		margin-top: -1.8rem;
	}

	.default-label {
		font-weight: 500;
		color: green_primary;
		padding: 0.5rem 0;
		line-height: 1.6rem;
	}
`;
