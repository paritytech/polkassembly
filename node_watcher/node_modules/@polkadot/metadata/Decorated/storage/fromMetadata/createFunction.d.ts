import { StorageEntryMetadataLatest } from '@polkadot/types/interfaces/metadata';
import { Registry } from '@polkadot/types/types';
import { StorageEntry } from '@polkadot/types/primitive/StorageKey';
export interface CreateItemOptions {
    key?: string;
    metaVersion: number;
    skipHashing?: boolean;
}
export interface CreateItemFn {
    meta: StorageEntryMetadataLatest;
    method: string;
    prefix: string;
    section: string;
}
/** @internal */
export default function createFunction(registry: Registry, itemFn: CreateItemFn, options: CreateItemOptions): StorageEntry;
