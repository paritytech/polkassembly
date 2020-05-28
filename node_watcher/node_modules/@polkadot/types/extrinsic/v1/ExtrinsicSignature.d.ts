import { ExtrinsicEra, Signature } from '../../interfaces/extrinsics';
import { Address, Balance, Call, Index } from '../../interfaces/runtime';
import { ExtrinsicPayloadValue, IExtrinsicSignature, IKeyringPair, Registry, SignatureOptions } from '../../types';
import { ExtrinsicSignatureOptions } from '../types';
import Compact from '../../codec/Compact';
import Struct from '../../codec/Struct';
import ExtrinsicPayloadV1 from './ExtrinsicPayload';
/**
 * @name GenericExtrinsicSignatureV1
 * @description
 * A container for the [[Signature]] associated with a specific [[Extrinsic]]
 */
export default class ExtrinsicSignatureV1 extends Struct implements IExtrinsicSignature {
    constructor(registry: Registry, value?: ExtrinsicSignatureV1 | Uint8Array, { isSigned }?: ExtrinsicSignatureOptions);
    /** @internal */
    static decodeExtrinsicSignature(value: ExtrinsicSignatureV1 | Uint8Array | undefined, isSigned?: boolean): ExtrinsicSignatureV1 | Uint8Array;
    /**
     * @description The length of the value when encoded as a Uint8Array
     */
    get encodedLength(): number;
    /**
     * @description `true` if the signature is valid
     */
    get isSigned(): boolean;
    /**
     * @description The [[ExtrinsicEra]] (mortal or immortal) this signature applies to
     */
    get era(): ExtrinsicEra;
    /**
     * @description The [[Index]] for the signature
     */
    get nonce(): Compact<Index>;
    /**
     * @description The actual [[Signature]] hash
     */
    get signature(): Signature;
    /**
     * @description The [[Address]] that signed
     */
    get signer(): Address;
    /**
     * @description Forwards compat
     */
    get tip(): Compact<Balance>;
    private _injectSignature;
    /**
     * @description Adds a raw signature
     */
    addSignature(signer: Address | Uint8Array | string, signature: Uint8Array | string, payload: ExtrinsicPayloadValue | Uint8Array | string): IExtrinsicSignature;
    /**
     * @description Creates a payload from the supplied options
     */
    createPayload(method: Call, { blockHash, era, genesisHash, nonce }: SignatureOptions): ExtrinsicPayloadV1;
    /**
     * @description Generate a payload and applies the signature from a keypair
     */
    sign(method: Call, account: IKeyringPair, options: SignatureOptions): IExtrinsicSignature;
    /**
     * @description Generate a payload and applies a fake signature
     */
    signFake(method: Call, address: Address | Uint8Array | string, options: SignatureOptions): IExtrinsicSignature;
    /**
     * @description Encodes the value as a Uint8Array as per the SCALE specifications
     * @param isBare true when the value has none of the type-specific prefixes (internal)
     */
    toU8a(isBare?: boolean): Uint8Array;
}
