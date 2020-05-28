import { AnyFunction, CallBase } from '@polkadot/types/types';
import { SubmittableExtrinsic } from '../submittable/types';
import { ApiTypes } from './base';
export interface AugmentedSubmittables<ApiType extends ApiTypes> {
}
export declare type AugmentedSubmittable<T extends AnyFunction> = T & CallBase;
export interface SubmittableExtrinsicFunction<ApiType extends ApiTypes> extends CallBase {
    (...params: any[]): SubmittableExtrinsic<ApiType>;
}
export interface SubmittableModuleExtrinsics<ApiType extends ApiTypes> {
    [index: string]: SubmittableExtrinsicFunction<ApiType>;
}
