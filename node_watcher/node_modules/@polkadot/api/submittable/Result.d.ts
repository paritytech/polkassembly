import { ExtrinsicStatus, EventRecord } from '@polkadot/types/interfaces';
import { AnyJson, ISubmittableResult } from '@polkadot/types/types';
import { SubmittableResultValue } from './types';
export default class SubmittableResult implements ISubmittableResult {
    readonly events: EventRecord[];
    readonly status: ExtrinsicStatus;
    constructor({ events, status }: SubmittableResultValue);
    get isCompleted(): boolean;
    get isError(): boolean;
    get isFinalized(): boolean;
    get isInBlock(): boolean;
    get isWarning(): boolean;
    /**
     * @description Filters EventRecords for the specified method & section (there could be multiple)
     */
    filterRecords(section: string, method: string): EventRecord[];
    /**
     * @description Finds an EventRecord for the specified method & section
     */
    findRecord(section: string, method: string): EventRecord | undefined;
    /**
     * @description Creates a human representation of the output
     */
    toHuman(isExtended?: boolean): AnyJson;
}
