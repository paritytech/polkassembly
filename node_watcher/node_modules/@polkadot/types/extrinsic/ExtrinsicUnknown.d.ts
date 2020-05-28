import { Registry } from '../types';
import { ExtrinsicOptions } from './types';
import Struct from '../codec/Struct';
/**
 * @name GenericExtrinsicUnknown
 * @description
 * A default handler for extrinsics where the version is not known (default throw)
 */
export default class ExtrinsicUnknown extends Struct {
    constructor(registry: Registry, value?: unknown, { isSigned, version }?: Partial<ExtrinsicOptions>);
}
