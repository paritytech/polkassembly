// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Dispatch, SetStateAction } from 'react';

import { network, tokenSymbol } from './global/networkConstants';

export interface UserDetailsContextType {
    id?: number | null,
    picture?: string | null,
    name?: string | null,
    username?: string | null,
    email?: string | null,
    email_verified?: boolean | null,
    addresses?: string[] | null,
    notification: {
		postParticipated: boolean,
		postCreated: boolean,
		newProposal: boolean,
		ownProposal: boolean
	} | null,
    setUserDetailsContextState: Dispatch<SetStateAction<UserDetailsContextType>>;
}

export enum Role {
    ANONYMOUS = 'anonymous',
    ADMIN = 'admin',
    PROPOSAL_BOT = 'proposal_bot',
    USER = 'user',
}

// these are enforced by Hasura
export interface HasuraClaimPayload {
    'x-hasura-allowed-roles': Role[]
    'x-hasura-default-role': Role
    'x-hasura-user-email': string
    'x-hasura-user-id': string
    'x-hasura-kusama': string
}

export interface JWTPayploadType {
    exp: number
    sub: string
    name: string
    username: string
    email: string
    email_verified: boolean
    iat: string
    notification: {
        postParticipated: boolean,
		postCreated: boolean,
		newProposal: boolean,
		ownProposal: boolean
    }
    'https://hasura.io/jwt/claims': HasuraClaimPayload
}

export interface NotificationContextType {
    deQueueNotification: (id: number) => void;
    notificationsQueue: Map<number, NotificationType>
    queueNotification: (notification: NotificationType) => void;
}

export enum NotificationStatus {
    SUCCESS,
    ERROR,
    WARNING
}

export interface NotificationType {
    header: string
    message: string
    status: NotificationStatus
}

export interface ModalType {
    content?: string,
    title?: string
}

export interface ModalContextType {
    dismissModal: () => void,
    modal: ModalType,
    setModal: (modal: ModalType) => void;
}

export interface AccountMeta {
    genesisHash: string | undefined
    name: string
    source: string
}

export interface Account {
    address: string
    meta: AccountMeta
}

export type Network = typeof network[keyof typeof network];
export type TokenSymbol = typeof tokenSymbol[keyof typeof tokenSymbol];

export type ChainPropType = {
    [index: string]: ChainProps;
};

export interface ChainProps {
	'blockTime': number;
	'ss58Format': number;
	'tokenDecimals': number;
	'tokenSymbol': TokenSymbol;
}

export interface LoadingStatusType {
    isLoading: boolean;
    message: string;
}

export interface ReactionMapFields {
	count: number
	userNames: string[]
}

export enum VoteThresholdEnum {
    Supermajorityapproval = 'Supermajorityapproval',
    Supermajorityrejection = 'Supermajorityrejection',
    Simplemajority = 'Simplemajority'
}

export type VoteThreshold = keyof typeof VoteThresholdEnum;
