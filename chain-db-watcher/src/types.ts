// Copyright 2019-2020 @paritytech/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { OnchainMotionFragment, OnchainProposalFragment, OnchainReferendumFragment, OnchainTipFragment, OnchainTreasuryProposalFragment } from './generated/chain-db-graphql';
import { DiscussionMotionFragment, DiscussionProposalFragment, DiscussionReferendumFragment, DiscussionTipFragment, DiscussionTreasuryProposalFragment } from './generated/discussion-db-graphql';

export interface OnchainSyncData {
    motions?: Array<OnchainMotionFragment | null> | null;
    proposals?: Array<OnchainProposalFragment | null> | null;
    referenda?: Array<OnchainReferendumFragment | null> | null;
    tips?: Array<OnchainTipFragment | null> | null;
    treasuryProposals?: Array<OnchainTreasuryProposalFragment | null> | null;
}

export interface DiscussionSyncData {
    motions?: Array<DiscussionMotionFragment | null> | null;
    proposals?: Array<DiscussionProposalFragment | null> | null;
    referenda?: Array<DiscussionReferendumFragment | null> | null;
    tips?: Array<DiscussionTipFragment | null> | null;
    treasuryProposals?: Array<DiscussionTreasuryProposalFragment | null> | null;
}

export interface SyncData {
    discussion: DiscussionSyncData;
    onchain: OnchainSyncData;
}

export interface SyncMap {
    onchain: OnchainSyncMap;
    discussion: DiscussionSyncMap;
}

export interface OnchainSyncMap {
    motions?: MotionObjectMap;
    proposals?: ObjectMap;
    referenda?: ReferendumObjectMap;
    tips?: ObjectMap;
    treasuryProposals?: ObjectMap;
}

export interface OnchainReferendaValueSyncType {
    preimageHash: string;
    blockCreationNumber: number;
}

export interface OnchainMotionSyncType {
    author: string;
    treasuryProposalId?: number;
    section: string;
}

export interface DiscussionSyncMap {
    motions?: ObjectMap;
    proposals?: ObjectMap;
    referenda?: ObjectMap;
    tips?: ObjectMap;
    treasuryProposals?: ObjectMap;
}

export type TreasuryDeduplicateMotionMap = Record<number, number[]>;

export type ObjectMap = {[index: string]: string};
export type MotionObjectMap = {[index: string]: OnchainMotionSyncType};
export type ReferendumObjectMap = {[index: string]: OnchainReferendaValueSyncType};
