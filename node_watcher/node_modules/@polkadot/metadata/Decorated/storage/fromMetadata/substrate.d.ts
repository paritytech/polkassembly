import { Registry } from '@polkadot/types/types';
import { StorageEntry } from '@polkadot/types/primitive/StorageKey';
export declare const code: (registry: Registry, metaVersion: number) => StorageEntry;
export declare const heapPages: (registry: Registry, metaVersion: number) => StorageEntry;
export declare const extrinsicIndex: (registry: Registry, metaVersion: number) => StorageEntry;
export declare const changesTrieConfig: (registry: Registry, metaVersion: number) => StorageEntry;
export declare const childStorageKeyPrefix: (registry: Registry, metaVersion: number) => StorageEntry;
