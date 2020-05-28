import { U8aFixed } from '@polkadot/types/codec';
import { AccountId } from '@polkadot/types/interfaces/runtime';
/** @name AuthorityId */
export interface AuthorityId extends AccountId {
}
/** @name RawVRFOutput */
export interface RawVRFOutput extends U8aFixed {
}
export declare type PHANTOM_CONSENSUS = 'consensus';
