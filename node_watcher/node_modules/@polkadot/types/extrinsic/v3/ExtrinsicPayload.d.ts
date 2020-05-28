import { ExtrinsicEra } from '../../interfaces/extrinsics';
import { Balance, Hash, Index } from '../../interfaces/runtime';
import { ExtrinsicPayloadValue, IKeyringPair, Registry } from '../../types';
import Compact from '../../codec/Compact';
import Struct from '../../codec/Struct';
import Bytes from '../../primitive/Bytes';
import u32 from '../../primitive/U32';
/**
 * @name GenericExtrinsicPayloadV3
 * @description
 * A signing payload for an [[Extrinsic]]. For the final encoding, it is variable length based
 * on the contents included
 */
export default class ExtrinsicPayloadV3 extends Struct {
    constructor(registry: Registry, value?: ExtrinsicPayloadValue | Uint8Array | string);
    /**
     * @description The block [[Hash]] the signature applies to (mortal/immortal)
     */
    get blockHash(): Hash;
    /**
     * @description The [[ExtrinsicEra]]
     */
    get era(): ExtrinsicEra;
    /**
     * @description The genesis [[Hash]] the signature applies to (mortal/immortal)
     */
    get genesisHash(): Hash;
    /**
     * @description The [[Bytes]] contained in the payload
     */
    get method(): Bytes;
    /**
     * @description The [[Index]]
     */
    get nonce(): Compact<Index>;
    /**
     * @description The specVersion for this signature
     */
    get specVersion(): u32;
    /**
     * @description The tip [[Balance]]
     */
    get tip(): Compact<Balance>;
    /**
     * @description Sign the payload with the keypair
     */
    sign(signerPair: IKeyringPair): Uint8Array;
}
