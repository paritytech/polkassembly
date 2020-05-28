/// <reference types="node" />
import { StorageHasher } from '@polkadot/types/interfaces';
export declare type HasherInput = string | Buffer | Uint8Array;
export declare type HasherFunction = (data: HasherInput) => Uint8Array;
/** @internal */
export default function getHasher(hasher?: StorageHasher): HasherFunction;
