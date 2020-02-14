import { OnchainMotionFragment, OnchainProposalFragment, OnchainReferendumFragment } from './generated/chain-db-graphql';
import { DiscussionMotionFragment, DiscussionProposalFragment, DiscussionReferendumFragment } from './generated/discussion-db-graphql';

export interface OnchainSyncData {
    motions?: Array<OnchainMotionFragment | null> | null;
    proposals?: Array<OnchainProposalFragment | null> | null;
    referenda?: Array<OnchainReferendumFragment | null> | null;
}

export interface DiscussionSyncData {
    motions?: Array<DiscussionMotionFragment | null> | null;
    proposals?: Array<DiscussionProposalFragment | null> | null;
    referenda?: Array<DiscussionReferendumFragment | null> | null;
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
    motions?: objectMap;
    proposals?: objectMap;
    referenda?: referendumObjectMap;
}

export interface OnchainReferendaValueSyncType {
    preimageHash: string;
    blockCreationHash: string;
}

export interface DiscussionSyncMap {
    motions?: objectMap;
    proposals?: objectMap;
    referenda?: objectMap;
}

export type objectMap = {[index: string]: string};
export type referendumObjectMap = {[index: string]: OnchainReferendaValueSyncType};
