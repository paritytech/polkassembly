import { ApiInterfaceRx } from '@polkadot/api/types';
import { Observable } from 'rxjs';
import { HeaderExtended } from '../type';
/**
 * @name subscribeNewHeads
 * @returns An array containing the block header and the block author
 * @description An observable of the current block header and it's author
 * @example
 * <BR>
 *
 * ```javascript
 * api.derive.chain.subscribeNewHeads((header) => {
 *   console.log(`block #${header.number} was authored by ${header.author}`);
 * });
 * ```
 */
export declare function subscribeNewHeads(api: ApiInterfaceRx): () => Observable<HeaderExtended>;
