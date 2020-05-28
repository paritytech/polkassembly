import { Struct } from '@polkadot/types/codec';
import { u64 } from '@polkadot/types/primitive';
/** @name RawAuraPreDigest */
export interface RawAuraPreDigest extends Struct {
    readonly slotNumber: u64;
}
export declare type PHANTOM_AURA = 'aura';
