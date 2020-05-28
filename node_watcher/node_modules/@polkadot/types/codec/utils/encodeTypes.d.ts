import { TypeDef } from '../../create/types';
export declare const SPECIAL_TYPES: string[];
export declare function paramsNotation(outer: string, inner?: string | any[], transform?: (_: any) => string): string;
export declare function encodeType(typeDef: Pick<TypeDef, any>): string;
export declare function displayType(typeDef: Pick<TypeDef, any>): string;
export declare function withTypeString(typeDef: Pick<TypeDef, any>): Pick<TypeDef, any>;
