import { ApprovalFlag } from '@polkadot/types/interfaces/elections';
import { Vec } from '@polkadot/types';
/** @internal */
export declare function approvalFlagsToBools(flags: Vec<ApprovalFlag> | ApprovalFlag[]): boolean[];
