"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetaRegistryItem = exports.MetaTypeInfo = exports.TypeDefInfo = void 0;
// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
// Type which says: if `K` is in the InterfaceTypes, then return InterfaceTypes[K], else fallback to T
let TypeDefInfo;
exports.TypeDefInfo = TypeDefInfo;

(function (TypeDefInfo) {
  TypeDefInfo[TypeDefInfo["BTreeMap"] = 0] = "BTreeMap";
  TypeDefInfo[TypeDefInfo["BTreeSet"] = 1] = "BTreeSet";
  TypeDefInfo[TypeDefInfo["Compact"] = 2] = "Compact";
  TypeDefInfo[TypeDefInfo["Enum"] = 3] = "Enum";
  TypeDefInfo[TypeDefInfo["Linkage"] = 4] = "Linkage";
  TypeDefInfo[TypeDefInfo["Option"] = 5] = "Option";
  TypeDefInfo[TypeDefInfo["Plain"] = 6] = "Plain";
  TypeDefInfo[TypeDefInfo["Result"] = 7] = "Result";
  TypeDefInfo[TypeDefInfo["Set"] = 8] = "Set";
  TypeDefInfo[TypeDefInfo["Struct"] = 9] = "Struct";
  TypeDefInfo[TypeDefInfo["Tuple"] = 10] = "Tuple";
  TypeDefInfo[TypeDefInfo["Vec"] = 11] = "Vec";
  TypeDefInfo[TypeDefInfo["VecFixed"] = 12] = "VecFixed";
  TypeDefInfo[TypeDefInfo["HashMap"] = 13] = "HashMap";
  TypeDefInfo[TypeDefInfo["Int"] = 14] = "Int";
  TypeDefInfo[TypeDefInfo["UInt"] = 15] = "UInt";
  TypeDefInfo[TypeDefInfo["DoNotConstruct"] = 16] = "DoNotConstruct";
  TypeDefInfo[TypeDefInfo["Null"] = 17] = "Null";
})(TypeDefInfo || (exports.TypeDefInfo = TypeDefInfo = {}));

let MetaTypeInfo;
exports.MetaTypeInfo = MetaTypeInfo;

(function (MetaTypeInfo) {
  MetaTypeInfo[MetaTypeInfo["BuiltinPlain"] = 0] = "BuiltinPlain";
  MetaTypeInfo[MetaTypeInfo["BuiltinTuple"] = 1] = "BuiltinTuple";
  MetaTypeInfo[MetaTypeInfo["BuiltinVec"] = 2] = "BuiltinVec";
  MetaTypeInfo[MetaTypeInfo["BuiltinVecFixed"] = 3] = "BuiltinVecFixed";
  MetaTypeInfo[MetaTypeInfo["Enum"] = 4] = "Enum";
  MetaTypeInfo[MetaTypeInfo["ClikeEnum"] = 5] = "ClikeEnum";
  MetaTypeInfo[MetaTypeInfo["Struct"] = 6] = "Struct";
  MetaTypeInfo[MetaTypeInfo["TupleStruct"] = 7] = "TupleStruct";
  MetaTypeInfo[MetaTypeInfo["Null"] = 8] = "Null";
})(MetaTypeInfo || (exports.MetaTypeInfo = MetaTypeInfo = {}));

let MetaRegistryItem;
exports.MetaRegistryItem = MetaRegistryItem;

(function (MetaRegistryItem) {
  MetaRegistryItem[MetaRegistryItem["String"] = 0] = "String";
  MetaRegistryItem[MetaRegistryItem["Type"] = 1] = "Type";
  MetaRegistryItem[MetaRegistryItem["TypeDef"] = 2] = "TypeDef";
})(MetaRegistryItem || (exports.MetaRegistryItem = MetaRegistryItem = {}));