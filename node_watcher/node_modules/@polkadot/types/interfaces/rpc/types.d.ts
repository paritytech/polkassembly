import { Struct, Vec } from '@polkadot/types/codec';
import { Text, u32 } from '@polkadot/types/primitive';
/** @name RpcMethods */
export interface RpcMethods extends Struct {
    readonly version: u32;
    readonly methods: Vec<Text>;
}
export declare type PHANTOM_RPC = 'rpc';
