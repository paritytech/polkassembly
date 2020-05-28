import { Constructor, Registry } from '../types';
import Null from './Null';
/**
 * @name DoNotConstruct
 * @description
 * An unknown type that fails on construction with the type info
 */
export default class DoNotConstruct extends Null {
    constructor(registry: Registry, typeName: string);
    static with(typeName?: string): Constructor;
}
