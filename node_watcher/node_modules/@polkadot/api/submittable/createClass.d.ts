import { Constructor } from '@polkadot/types/types';
import { ApiInterfaceRx, ApiTypes } from '../types';
import { SubmittableExtrinsic } from './types';
import ApiBase from '../base';
interface SubmittableOptions<ApiType extends ApiTypes> {
    api: ApiInterfaceRx;
    apiType: ApiTypes;
    decorateMethod: ApiBase<ApiType>['_decorateMethod'];
}
export default function createClass<ApiType extends ApiTypes>({ api, apiType, decorateMethod }: SubmittableOptions<ApiType>): Constructor<SubmittableExtrinsic<ApiType>>;
export {};
