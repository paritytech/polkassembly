import { TypeDef } from '../create/types';
import { EventMetadataLatest } from '../interfaces/metadata';
import { EventId } from '../interfaces/system';
import { AnyJson, Constructor, Registry, RegistryMetadataEvent } from '../types';
import Struct from '../codec/Struct';
import Tuple from '../codec/Tuple';
import Null from '../primitive/Null';
/**
 * @name EventData
 * @description
 * Wrapper for the actual data that forms part of an [[Event]]
 */
export declare class EventData extends Tuple {
    #private;
    constructor(registry: Registry, Types: Constructor[], value: Uint8Array, typeDef: TypeDef[], meta: RegistryMetadataEvent, section: string, method: string);
    /**
     * @description The wrapped [[EventMetadata]]
     */
    get meta(): EventMetadataLatest;
    /**
     * @description The method as a string
     */
    get method(): string;
    /**
     * @description The section as a string
     */
    get section(): string;
    /**
     * @description The [[TypeDef]] for this event
     */
    get typeDef(): TypeDef[];
}
/**
 * @name Event
 * @description
 * A representation of a system event. These are generated via the [[Metadata]] interfaces and
 * specific to a specific Substrate runtime
 */
export default class Event extends Struct {
    constructor(registry: Registry, _value?: Uint8Array);
    /** @internal */
    static decodeEvent(registry: Registry, value?: Uint8Array): {
        DataType: Constructor<Null> | Constructor<EventData>;
        value?: {
            index: Uint8Array;
            data: Uint8Array;
        };
    };
    /**
     * @description The wrapped [[EventData]]
     */
    get data(): EventData;
    /**
     * @description The [[EventId]], identifying the raw event
     */
    get index(): EventId;
    /**
     * @description The [[EventMetadata]] with the documentation
     */
    get meta(): EventMetadataLatest;
    /**
     * @description The method string identifying the event
     */
    get method(): string;
    /**
     * @description The section string identifying the event
     */
    get section(): string;
    /**
     * @description The [[TypeDef]] for the event
     */
    get typeDef(): TypeDef[];
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */
    toHuman(isExpanded?: boolean): AnyJson;
}
