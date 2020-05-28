import { Registry } from '@polkadot/types/types';
import MetadataVersioned from './MetadataVersioned';
/**
 * @name Metadata
 * @description
 * The versioned runtime metadata as a decoded structure
 */
export default class Metadata extends MetadataVersioned {
    constructor(registry: Registry, value?: Uint8Array | string);
}
