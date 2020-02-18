import { Keyring } from '@polkadot/api';

import { chainProperties, network as networkConstants } from '../constants';
import { Network, OnchainReferendaValueSyncType, SyncData, SyncMap } from '../types';

export const getMaps = (syncData: SyncData): SyncMap => {
	const discussionMotionMap = syncData?.discussion.motions?.reduce(
		(prev, curr) => {
			// edgecase those id can be 0
			if ((curr?.onchain_motion_id || curr?.onchain_motion_id === 0) && (curr?.id || curr?.id === 0)) {
				return {
					...prev,
					[curr.onchain_motion_id]: curr.proposer_address
				};
			} else {
				return prev || {};
			}
		}, {});

	const onchainMotionMap = syncData?.onchain.motions?.reduce(
		(prev, curr) => {
			if ((curr?.motionProposalId || curr?.motionProposalId === 0) && (curr?.id || curr?.id === 0)) {
				return {
					...prev,
					[curr.motionProposalId]: curr.author
				};
			} else {
				return prev || {};
			}
		}, {});

	const discussionProposalMap = syncData?.discussion.proposals?.reduce(
			(prev, curr) => {
				// edgecase those id can be 0
				if ((curr?.onchain_proposal_id || curr?.onchain_proposal_id === 0) && (curr?.id || curr?.id === 0)) {
					return {
						...prev,
						[curr.onchain_proposal_id]: curr.proposer_address
					};
				} else {
					return prev || {};
				}
			}, {});

	const onchainProposalMap = syncData?.onchain.proposals?.reduce(
			(prev, curr) => {
				if ((curr?.proposalId || curr?.proposalId === 0) && (curr?.id || curr?.id === 0)) {
					return {
						...prev,
						[curr.proposalId]: curr.author
					};
				} else {
					return prev || {};
				}
			}, {});

	const discussionReferendaMap = syncData?.discussion.referenda?.reduce(
				(prev, curr) => {
					// edgecase those id can be 0
					if ((curr?.onchain_referendum_id || curr?.onchain_referendum_id === 0) && (curr?.id || curr?.id === 0)) {
						return {
							...prev,
							[curr.onchain_referendum_id]: curr.id
						};
					} else {
						return prev || {};
					}
				}, {});

	const onchainReferendaMap = syncData?.onchain.referenda?.reduce(
				(prev, curr) => {
					if ((curr?.referendumId || curr?.referendumId === 0) && (curr?.id || curr?.id === 0)) {
						return {
							...prev,
							[curr.referendumId]: {
								preimageHash: curr.preimageHash,
								blockCreationHash: curr?.referendumStatus?.[0]?.blockNumber?.hash
							} as OnchainReferendaValueSyncType
						};
					} else {
						return prev || {};
					}
				}, {});

	return {
		onchain: {
			motions: onchainMotionMap,
			proposals: onchainProposalMap,
			referenda: onchainReferendaMap
		},
		discussion: {
			motions: discussionMotionMap,
			proposals: discussionProposalMap,
			referenda: discussionReferendaMap
		}
	};
};

/**
 * Return the current network
 *
 */

export const getNetwork = function (): Network {
	const network = process.env.NETWORK;

	if (!network) {
		throw Error('Please set the NETWORK environment variable');
	}

	const possibleNetworks = Object.values(networkConstants);

	if (!possibleNetworks.includes(network)) {
		throw Error(`NETWORK environment variable must be one of ${possibleNetworks} `);
	}

	return network;
};

/**
 * Return an address encoded for the current network
 *
 * @param address An address
 *
 */

export const getEncodedAddress = function (address: string): string|null {
	const network = getNetwork();
	const ss58Format = chainProperties?.[network]?.ss58Format;
	if (!network || !ss58Format) {
		return null;
	}

	const keyring = new Keyring({ type: 'sr25519' });

	return keyring.encodeAddress(
		keyring.decodeAddress(address),
		chainProperties[network].ss58Format);
};
