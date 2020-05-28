import { StorageEntryMetadataLatest, StorageEntryTypeLatest } from '../interfaces/metadata';
import { AnyJson, AnyU8a, Codec, InterfaceTypes, Registry } from '../types';
import Bytes from './Bytes';
export interface StorageEntry {
    (arg?: any): Uint8Array;
    iterKey?: (arg?: any) => Uint8Array & Codec;
    keyPrefix: (arg?: any) => Uint8Array;
    meta: StorageEntryMetadataLatest;
    method: string;
    prefix: string;
    section: string;
    toJSON: () => any;
}
interface StorageKeyExtra {
    method: string;
    section: string;
}
/** @internal */
export declare function unwrapStorageType(type: StorageEntryTypeLatest, isOptional?: boolean): keyof InterfaceTypes;
/**
 * @name StorageKey
 * @description
 * A representation of a storage key (typically hashed) in the system. It can be
 * constructed by passing in a raw key or a StorageEntry with (optional) arguments.
 */
export default class StorageKey extends Bytes {
    private _args;
    private _meta?;
    private _outputType;
    private readonly _method?;
    private readonly _section?;
    constructor(registry: Registry, value?: AnyU8a | StorageKey | StorageEntry | [StorageEntry, any], override?: Partial<StorageKeyExtra>);
    static getMeta(value: StorageKey | StorageEntry | [StorageEntry, any]): StorageEntryMetadataLatest | undefined;
    static getType(value: StorageKey | StorageEntry | [StorageEntry, any]): string;
    /**
     * @description Return the decoded arguments (applicable to map/doublemap with decodable values)
     */
    get args(): Codec[];
    /**
     * @description The metadata or `undefined` when not available
     */
    get meta(): StorageEntryMetadataLatest | undefined;
    /**
     * @description The key method or `undefined` when not specified
     */
    get method(): string | undefined;
    /**
     * @description The output type
     */
    get outputType(): string;
    /**
     * @description The key section or `undefined` when not specified
     */
    get section(): string | undefined;
    /**
     * @description Sets the meta for this key
     */
    setMeta(meta?: StorageEntryMetadataLatest): this;
    /**
     * @description Returns the Human representation for this type
     */
    toHuman(): AnyJson;
    /**
     * @description Returns the raw type for this
     */
    toRawType(): string;
}
export {};
