import { StorageEntry } from '@polkadot/types/primitive/StorageKey';
export * from './consts/types';
export interface ModuleStorage {
    [key: string]: StorageEntry;
}
export interface Storage {
    [key: string]: ModuleStorage;
    substrate: {
        [key: string]: StorageEntry;
    };
}
