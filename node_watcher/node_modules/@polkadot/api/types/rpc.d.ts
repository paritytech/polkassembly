import { AnyFunction, Callback, Codec } from '@polkadot/types/types';
import { Observable } from 'rxjs';
import { ApiTypes, Push, PromiseResult, RxResult, UnsubscribePromise } from './base';
export interface RpcRxResult<F extends AnyFunction> extends RxResult<F> {
    raw(...args: Parameters<F>): Observable<Uint8Array & Codec>;
}
export interface RpcPromiseResult<F extends AnyFunction> extends PromiseResult<F> {
    raw(...args: Parameters<F>): Promise<Uint8Array & Codec>;
    raw(...args: Push<Parameters<F>, Callback<Uint8Array & Codec>>): UnsubscribePromise;
}
export declare type RpcMethodResult<ApiType extends ApiTypes, F extends AnyFunction> = ApiType extends 'rxjs' ? RpcRxResult<F> : RpcPromiseResult<F>;
export declare type DecoratedRpcSection<ApiType extends ApiTypes, Section> = {
    [Method in keyof Section]: Section[Method] extends AnyFunction ? RpcMethodResult<ApiType, Section[Method]> : never;
};
export declare type DecoratedRpc<ApiType extends ApiTypes, AllSections> = {
    [Section in keyof AllSections]: DecoratedRpcSection<ApiType, AllSections[Section]>;
};
