import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveSociety } from '../types';
import { Observable } from 'rxjs';
/**
 * @description Get the overall info for a society
 */
export declare function info(api: ApiInterfaceRx): () => Observable<DeriveSociety>;
