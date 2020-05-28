import { QueryableStorageEntry as QueryableStorageEntryBase, SubmittableExtrinsicFunction as SubmittableExtrinsicFunctionBase } from '../types';
import { SubmittableExtrinsic as SubmittableExtrinsicBase } from '../submittable/types';
export declare type QueryableStorageEntry = QueryableStorageEntryBase<'promise'>;
export declare type SubmittableExtrinsic = SubmittableExtrinsicBase<'promise'>;
export declare type SubmittableExtrinsicFunction = SubmittableExtrinsicFunctionBase<'promise'>;
