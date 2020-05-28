import { ApiInterfaceRx } from '@polkadot/api/types';
import { DeriveSessionIndexes } from '../types';
import { Observable } from 'rxjs';
export declare function indexes(api: ApiInterfaceRx): () => Observable<DeriveSessionIndexes>;
