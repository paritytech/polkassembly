import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, Balance, BlockNumber, PreimageStatus, ReferendumInfo, ReferendumInfoTo239, ReferendumStatus, VoteThreshold } from '@polkadot/types/interfaces';
import { ITuple } from '@polkadot/types/types';
import { DeriveProposalImage, DeriveReferendum, DeriveReferendumVote, DeriveReferendumVotes } from '../types';
import BN from 'bn.js';
import { Bytes, Option } from '@polkadot/types';
declare type PreimageInfo = [Bytes, AccountId, Balance, BlockNumber];
declare type OldPreimage = ITuple<PreimageInfo>;
interface ApproxState {
    votedAye: BN;
    votedNay: BN;
    votedTotal: BN;
}
export declare function compareRationals(n1: BN, d1: BN, n2: BN, d2: BN): boolean;
export declare function calcPassing(threshold: VoteThreshold, sqrtElectorate: BN, { votedAye, votedNay, votedTotal }: ApproxState): boolean;
export declare function calcVotes(sqrtElectorate: BN, referendum: DeriveReferendum, votes: DeriveReferendumVote[]): DeriveReferendumVotes;
export declare function getStatus(info: Option<ReferendumInfo | ReferendumInfoTo239>): ReferendumStatus | ReferendumInfoTo239 | null;
export declare function parseImage(api: ApiInterfaceRx, imageOpt: Option<OldPreimage> | Option<PreimageStatus>): DeriveProposalImage | undefined;
export {};
