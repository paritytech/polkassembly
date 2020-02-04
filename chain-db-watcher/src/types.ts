import { OnchainProposalFragment, OnchainReferendumFragment } from './generated/chain-db-graphql';
import { DiscussionProposalFragment, DiscussionReferendumFragment } from './generated/discussion-db-graphql';

export interface OnchainSyncData {
    proposals?: Array<OnchainProposalFragment | null> | null;
    referenda?: Array<OnchainReferendumFragment | null> | null;
}

export interface DiscussionSyncData {
    proposals?: Array<DiscussionProposalFragment | null> | null;
    referenda?: Array<DiscussionReferendumFragment | null> | null;
}

export interface SyncData {
    onchain: OnchainSyncData;
    discussion: DiscussionSyncData;
}

export interface SyncMap {
    onchain: OnchainSyncMap;
    discussion: DiscussionSyncMap;
}

export interface OnchainSyncMap {
    proposals?: objectMap;
    referenda?: referendumObjectMap;
}

export interface OnchainReferendaValueSyncType {
    preimageHash: string;
    blockCreationHash: string;
}

export interface DiscussionSyncMap {
    proposals?: objectMap;
    referenda?: objectMap;
}

type objectMap = {[index: string]: string};
type referendumObjectMap = {[index: string]: OnchainReferendaValueSyncType};
