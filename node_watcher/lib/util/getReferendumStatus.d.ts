import { Option } from '@polkadot/types';
import { ReferendumInfo, ReferendumInfoTo239, ReferendumStatus } from '@polkadot/types/interfaces';
export declare function getReferendumStatus(info: Option<ReferendumInfo | ReferendumInfoTo239>): ReferendumStatus | ReferendumInfoTo239 | null;
