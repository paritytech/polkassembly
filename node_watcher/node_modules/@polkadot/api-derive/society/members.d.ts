import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveSocietyMember } from '../types';
import { Observable } from 'rxjs';
/**
 * @description Get the member info for a society
 */
export declare function members(api: ApiInterfaceRx): () => Observable<DeriveSocietyMember[]>;
