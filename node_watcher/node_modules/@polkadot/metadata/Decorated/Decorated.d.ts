import { ModulesWithCalls, Registry } from '@polkadot/types/types';
import { Constants, Storage } from './types';
import Metadata from '../Metadata';
/**
 * This class represents a decorated wrapper over the [[Metadata]]. The
 * [[Metadata]] type is a Codec type returned by the node, and `Decorated`
 * composes it and populates the `.query`, `.tx` and `.consts` sections.
 */
export default class Decorated {
    readonly consts: Constants;
    readonly metadata: Metadata;
    readonly registry: Registry;
    readonly query: Storage;
    readonly tx: ModulesWithCalls;
    constructor(registry: Registry, value?: Uint8Array | string | Metadata);
}
