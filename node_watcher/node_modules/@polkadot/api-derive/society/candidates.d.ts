import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveSocietyCandidate } from '../types';
import { Observable } from 'rxjs';
/**
 * @description Get the candidate info for a society
 */
export declare function candidates(api: ApiInterfaceRx): () => Observable<DeriveSocietyCandidate[]>;
