// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Request, Response } from 'express';
import { Config as KnexConfig } from 'knex';

export interface Config {
    [index: string]: KnexConfig;
}

interface FileType {
    path: string;
}

export interface FileRequestType extends Request {
    UserId: string;
    file: FileType;
}

export interface UserObjectType {
    id: number;
    email: string;
    username: string;
    name: string;
    email_verified: boolean;
}

export interface TokenType {
    token: string;
}

export interface SignUpResultType extends TokenType {
    user: UserObjectType;
}

export interface AuthObjectType extends TokenType {
    user: UserObjectType;
    refreshToken: string;
}

export interface Context {
    req: Request;
    res: Response;
}

export enum Role {
    ANOONYMOUS = 'anonymous',
    ADMIN = 'admin',
    PROPOSAL_BOT = 'proposal_bot',
    USER = 'user',
}

// these are enforced by Hasura
export interface HasuraClaimPayload {
    'x-hasura-allowed-roles': Array<Role>;
    'x-hasura-default-role': Role;
    'x-hasura-user-email': string;
    'x-hasura-user-id': string;
    'x-hasura-kusama': string;
    'x-hasura-kusama-default': string;
}

export interface JWTPayploadType {
    sub: string;
    name: string;
    username: string;
    email: string;
    email_verified: boolean;
    iat: number;
    notification: NotificationPreferencesType;
    'https://hasura.io/jwt/claims': HasuraClaimPayload;
}

export interface MessageType {
    message: string;
}

export interface ChangeResponseType extends MessageType, TokenType {}

export interface PublicUser {
    id: number;
    kusama_default_address?: string;
    name: string;
    username: string;
}

export interface Subscription {
    subscribed: boolean;
}

export interface AddressType {
    address: string;
    public_key: string;
}

export interface AddressLinkStartType extends MessageType {
    address_id: number;
    sign_message: string;
}

export interface UndoEmailChangeResponseType extends ChangeResponseType {
    email: string;
}

export interface NotificationPreferencesType {
    postParticipated: boolean;
    postCreated: boolean;
    newProposal: boolean;
    ownProposal: boolean;
}

export interface AddressLoginStartType extends MessageType {
    signMessage: string;
}

export interface CommentCreationHookDataType {
    post_id: number;
    author_id: number;
    content: string;
}

export interface OnchainLinkType {
    proposer_address?: string;
    post_id: number;
    onchain_motion_id?: number;
    onchain_proposal_id?: number;
    onchain_referendum_id?: number;
    onchain_treasury_proposal_id?: number;
}

export interface JsonSchema {
    properties: {
        [key: string]: {
            maxLength?: number;
            minLength?: number;
            type: string;
        };
    };
    required: string[];
    type: string;
}

export interface AddressLinkConfirmArgs {
	address_id: number;
	signature: string;
}

export interface SubscriptionArgs {
	post_id: number;
}

export interface UserArgs {
	id: number;
}

export interface SetDefaultAddressArgs {
    address: string;
}

export interface AddressLinkStartArgs {
	network: Network;
	address: string;
}

export interface AddressLoginArgs {
	address: string;
	signature: string;
}

export interface AddressLoginStartArgs {
	address: string;
}

export interface AddressUnlinkArgs {
	address: string;
}

export interface ChangeEmailArgs {
    email: string;
    password: string;
}

export interface ChangeNameArgs {
	newName: string;
}

export interface ChangeNotificationPreferenceArgs {
	notificationPreferences: NotificationPreferencesType;
}

export interface ChangePasswordArgs {
	newPassword: string;
	oldPassword: string;
}

export interface ChangeUsernameArgs {
    password: string;
    username: string;
}

export interface LoginArgs {
	username: string;
	password: string;
}

export interface PostSubscribeArgs {
	post_id: number;
}

export interface PostUnsubscribeArgs {
	post_id: number;
}

export interface ReportContentArgs {
	network: Network;
	type: string;
	content_id: string;
	reason: string;
	comments: string;
}

export interface RequestResetPasswordArgs {
	email: string;
}

export interface ResetPasswordArgs {
	newPassword: string;
    token: string;
    userId: number;
}

export interface SignupArgs {
	email: string;
	name: string;
	password: string;
	username: string;
}

export interface UndoEmailChangeArgs {
	token: string;
}

export interface VerifyEmailArgs {
	token: string;
}

export enum PostTypeEnum {
    POST = 'post',
    PROPOSAL = 'proposal',
    TREASURY = 'treasury',
    MOTION = 'motion',
    REFERENDUM = 'referendum',
}

export type PostType = PostTypeEnum;

export enum NetworkEnum {
    KUSAMA = 'kusama',
    POLKADOT = 'polkadot'
}

export type Network = NetworkEnum;
