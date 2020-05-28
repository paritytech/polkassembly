import { Registry } from '../types';
import { ExtrinsicPayloadOptions } from './types';
import Struct from '../codec/Struct';
/**
 * @name GenericExtrinsicPayloadUnknown
 * @description
 * A default handler for payloads where the version is not known (default throw)
 */
export default class ExtrinsicPayloadUnknown extends Struct {
    constructor(registry: Registry, value?: unknown, { version }?: Partial<ExtrinsicPayloadOptions>);
}
