import { TypeDef } from "@polkadot/types/types";
import BN = require("bn.js");

export type tokenType = string | null

export interface PostAndProposalTypeInfo {
  authorId:number,
  depositAmount: BN,
  methodName: string,
  methodArguments?: string // serialized JSON
}

export interface PostAndProposalType extends PostAndProposalTypeInfo {
  onchainId: number
}

export type RawParamValue = any | undefined;

export type RawParamValueArray = (RawParamValue | RawParamValue[])[];

export type RawParamValues = RawParamValue | RawParamValueArray;

export interface RawParam {
  isValid: boolean;
  value: RawParamValues;
}

export interface RawParamOnChangeValue {
  isValid: boolean;
  value: RawParamValues;
}
export type RawParamOnChange = (value: RawParamOnChangeValue) => void;
export type RawParamOnEnter = () => void;

export type RawParams = RawParam[];

export interface ParamDef {
    name?: string;
    type: TypeDef;
}