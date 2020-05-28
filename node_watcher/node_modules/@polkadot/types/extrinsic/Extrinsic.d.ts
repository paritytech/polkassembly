import { FunctionMetadataLatest } from '../interfaces/metadata/types';
import { EcdsaSignature, Ed25519Signature, ExtrinsicUnknown, ExtrinsicV1, ExtrinsicV2, ExtrinsicV3, ExtrinsicV4, Sr25519Signature } from '../interfaces/extrinsics';
import { Address, Balance, Call, Index } from '../interfaces/runtime';
import { AnyJson, AnyU8a, ArgsDef, Codec, ExtrinsicPayloadValue, IExtrinsic, IKeyringPair, Registry, SignatureOptions } from '../types';
import Base from '../codec/Base';
import Compact from '../codec/Compact';
import { ExtrinsicValueV1 } from './v1/Extrinsic';
import { ExtrinsicValueV2 } from './v2/Extrinsic';
import { ExtrinsicValueV3 } from './v3/Extrinsic';
import { ExtrinsicValueV4 } from './v4/Extrinsic';
import ExtrinsicEra from './ExtrinsicEra';
interface CreateOptions {
    version?: number;
}
declare type ExtrinsicVx = ExtrinsicV1 | ExtrinsicV2 | ExtrinsicV3 | ExtrinsicV4;
declare type ExtrinsicValue = ExtrinsicValueV1 | ExtrinsicValueV2 | ExtrinsicValueV3 | ExtrinsicValueV4;
export { TRANSACTION_VERSION as LATEST_EXTRINSIC_VERSION } from './v4/Extrinsic';
declare abstract class ExtrinsicBase extends Base<ExtrinsicVx | ExtrinsicUnknown> {
    /**
     * @description The arguments passed to for the call, exposes args so it is compatible with [[Call]]
     */
    get args(): Codec[];
    /**
     * @description The argument definitions, compatible with [[Call]]
     */
    get argsDef(): ArgsDef;
    /**
     * @description The actual `[sectionIndex, methodIndex]` as used in the Call
     */
    get callIndex(): Uint8Array;
    /**
     * @description The actual data for the Call
     */
    get data(): Uint8Array;
    /**
     * @description The era for this extrinsic
     */
    get era(): ExtrinsicEra;
    /**
     * @description The length of the value when encoded as a Uint8Array
     */
    get encodedLength(): number;
    /**
     * @description `true` is method has `Origin` argument (compatibility with [Call])
     */
    get hasOrigin(): boolean;
    /**
     * @description `true` id the extrinsic is signed
     */
    get isSigned(): boolean;
    /**
     * @description The length of the actual data, excluding prefix
     */
    get length(): number;
    /**
     * @description The [[FunctionMetadataLatest]] that describes the extrinsic
     */
    get meta(): FunctionMetadataLatest;
    /**
     * @description The [[Call]] this extrinsic wraps
     */
    get method(): Call;
    /**
     * @description The nonce for this extrinsic
     */
    get nonce(): Compact<Index>;
    /**
     * @description The actual [[EcdsaSignature]], [[Ed25519Signature]] or [[Sr25519Signature]]
     */
    get signature(): EcdsaSignature | Ed25519Signature | Sr25519Signature;
    /**
     * @description The [[Address]] that signed
     */
    get signer(): Address;
    /**
     * @description Forwards compat
     */
    get tip(): Compact<Balance>;
    /**
     * @description Returns the raw transaction version (not flagged with signing information)
    */
    get type(): number;
    /**
     * @description Returns the encoded version flag
    */
    get version(): number;
}
/**
 * @name GenericExtrinsic
 * @description
 * Representation of an Extrinsic in the system. It contains the actual call,
 * (optional) signature and encodes with an actual length prefix
 *
 * {@link https://github.com/paritytech/wiki/blob/master/Extrinsic.md#the-extrinsic-format-for-node}.
 *
 * Can be:
 * - signed, to create a transaction
 * - left as is, to create an inherent
 */
export default class Extrinsic extends ExtrinsicBase implements IExtrinsic {
    constructor(registry: Registry, value: Extrinsic | ExtrinsicValue | AnyU8a | Call | undefined, { version }?: CreateOptions);
    /** @internal */
    private static _newFromValue;
    /** @internal */
    private static _decodeExtrinsic;
    /** @internal */
    private static _decodeU8a;
    /**
     * @description Injects an already-generated signature into the extrinsic
     */
    addSignature(signer: Address | Uint8Array | string, signature: Uint8Array | string, payload: ExtrinsicPayloadValue | Uint8Array | string): Extrinsic;
    /**
     * @description Sign the extrinsic with a specific keypair
     */
    sign(account: IKeyringPair, options: SignatureOptions): Extrinsic;
    /**
     * @describe Adds a fake signature to the extrinsic
     */
    signFake(signer: Address | Uint8Array | string, options: SignatureOptions): Extrinsic;
    /**
     * @description Returns a hex string representation of the value
     */
    toHex(isBare?: boolean): string;
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */
    toHuman(isExpanded?: boolean): AnyJson;
    /**
     * @description Converts the Object to JSON, typically used for RPC transfers
     */
    toJSON(): string;
    /**
     * @description Returns the base runtime type name for this instance
     */
    toRawType(): string;
    /**
     * @description Encodes the value as a Uint8Array as per the SCALE specifications
     * @param isBare true when the value is not length-prefixed
     */
    toU8a(isBare?: boolean): Uint8Array;
}
