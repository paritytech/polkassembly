import { BlockNumber } from '@polkadot/types/interfaces';
import { Observable } from 'rxjs';
import { ApiInterfaceRx } from '@polkadot/api/types';
export declare function sessionProgress(api: ApiInterfaceRx): () => Observable<BlockNumber>;
