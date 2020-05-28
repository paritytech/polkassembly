import { Digest, DigestItem, H256, Header } from '../interfaces/runtime';
import { AnyNumber, AnyU8a, Registry } from '../types';
import Extrinsic from '../extrinsic/Extrinsic';
import Struct from '../codec/Struct';
import Vec from '../codec/Vec';
export interface HeaderValue {
    digest?: Digest | {
        logs: DigestItem[];
    };
    extrinsicsRoot?: AnyU8a;
    number?: AnyNumber;
    parentHash?: AnyU8a;
    stateRoot?: AnyU8a;
}
export interface BlockValue {
    extrinsics?: AnyU8a[];
    header?: HeaderValue;
}
/**
 * @name Block
 * @description
 * A block encoded with header and extrinsics
 */
export default class Block extends Struct {
    constructor(registry: Registry, value?: BlockValue | Uint8Array);
    /**
     * @description Encodes a content [[Hash]] for the block
     */
    get contentHash(): H256;
    /**
     * @description The [[Extrinsic]] contained in the block
     */
    get extrinsics(): Vec<Extrinsic>;
    /**
     * @description Block/header [[Hash]]
     */
    get hash(): H256;
    /**
     * @description The [[Header]] of the block
     */
    get header(): Header;
}
