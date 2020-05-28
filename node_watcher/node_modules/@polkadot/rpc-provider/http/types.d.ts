import { Logger } from '@polkadot/util/types';
import Coder from '../coder';
export interface HttpState {
    coder: Coder;
    endpoint: string;
    l: Logger;
}
