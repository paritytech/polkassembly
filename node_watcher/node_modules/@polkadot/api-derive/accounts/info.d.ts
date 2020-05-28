import { ApiInterfaceRx } from '@polkadot/api/types';
import { AccountId, AccountIndex, Address } from '@polkadot/types/interfaces';
import { DeriveAccountInfo } from '../types';
import { Observable } from 'rxjs';
/**
 * @name info
 * @description Returns aux. info with regards to an account, current that includes the accountId, accountIndex and nickname
 */
export declare function info(api: ApiInterfaceRx): (address?: AccountIndex | AccountId | Address | string | null) => Observable<DeriveAccountInfo>;
