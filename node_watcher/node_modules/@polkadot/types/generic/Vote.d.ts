import { AnyJson, ArrayElementType, Registry } from '../types';
import { AllConvictions } from '../interfaces/democracy/definitions';
import { Conviction } from '../interfaces/democracy';
import U8aFixed from '../codec/U8aFixed';
declare type InputTypes = boolean | number | Boolean | Uint8Array | {
    aye: boolean;
    conviction?: number | ArrayElementType<typeof AllConvictions>;
};
/**
 * @name Vote
 * @description
 * A number of lock periods, plus a vote, one way or the other.
 */
export default class Vote extends U8aFixed {
    private _aye;
    private _conviction;
    constructor(registry: Registry, value?: InputTypes);
    /**
     * @description returns a V2 conviction
     */
    get conviction(): Conviction;
    /**
     * @description true if the wrapped value is a positive vote
     */
    get isAye(): boolean;
    /**
     * @description true if the wrapped value is a negative vote
     */
    get isNay(): boolean;
    /**
     * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
     */
    toHuman(isExpanded?: boolean): AnyJson;
    /**
     * @description Returns the base runtime type name for this instance
     */
    toRawType(): string;
}
export {};
