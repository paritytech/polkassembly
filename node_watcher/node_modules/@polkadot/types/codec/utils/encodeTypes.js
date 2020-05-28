"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paramsNotation = paramsNotation;
exports.encodeType = encodeType;
exports.displayType = displayType;
exports.withTypeString = withTypeString;
exports.SPECIAL_TYPES = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _types = require("../../create/types");

var _util = require("@polkadot/util");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

const SPECIAL_TYPES = ['AccountId', 'AccountIndex', 'Address', 'Balance'];
exports.SPECIAL_TYPES = SPECIAL_TYPES;

const identity = value => value;

function paramsNotation(outer, inner, transform = identity) {
  let arrayStr = '';

  if (inner) {
    arrayStr = '<' + (Array.isArray(inner) ? inner : [inner]).map(transform).join(', ') + '>';
  }

  return `${outer}${arrayStr}`;
} // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment


function encodeWithParams(typeDef, outer = typeDef.displayName || typeDef.type) {
  const {
    info,
    params,
    sub
  } = typeDef;

  switch (info) {
    case _types.TypeDefInfo.BTreeMap:
    case _types.TypeDefInfo.BTreeSet:
    case _types.TypeDefInfo.Compact:
    case _types.TypeDefInfo.HashMap:
    case _types.TypeDefInfo.Linkage:
    case _types.TypeDefInfo.Option:
    case _types.TypeDefInfo.Result:
    case _types.TypeDefInfo.Vec:
      return paramsNotation(outer, params || sub, // eslint-disable-next-line @typescript-eslint/no-use-before-define
      param => displayType(param));

    default:
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return outer;
  }
}

function encodeDoNotConstruct({
  displayName
}) {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  return `DoNotEncode<${displayName}>`;
}

function encodeSubTypes(sub, asEnum) {
  const inner = sub.reduce((result, type) => {
    return _objectSpread(_objectSpread({}, result), {}, {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      [type.name]: encodeType(type)
    });
  }, {});
  return JSON.stringify(asEnum ? {
    _enum: inner
  } : inner);
}

function encodeEnum(typeDef) {
  (0, _util.assert)(typeDef.sub && Array.isArray(typeDef.sub), 'Unable to encode Enum type');
  const sub = typeDef.sub;
  const isClikeEnum = sub.reduce((bool, {
    type
  }) => bool && type === 'Null', true);

  if (isClikeEnum) {
    return `[${sub // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    .map(({
      name
    }) => `"${name}"`).join(', ')}]`;
  }

  return encodeSubTypes(sub, true);
}

function encodeStruct(typeDef) {
  (0, _util.assert)(typeDef.sub && Array.isArray(typeDef.sub), 'Unable to encode Struct type');
  const sub = typeDef.sub;
  return encodeSubTypes(sub);
}

function encodeTuple(typeDef) {
  (0, _util.assert)(typeDef.sub && Array.isArray(typeDef.sub), 'Unable to encode Tuple type');
  const sub = typeDef.sub;
  return `(${sub // eslint-disable-next-line @typescript-eslint/no-use-before-define
  .map(type => encodeType(type)).join(', ')})`;
}

function encodeUInt({
  length
}, type) {
  (0, _util.assert)((0, _util.isNumber)(length), 'Unable to encode VecFixed type');
  return `${type}<${length}>`;
}

function encodeVecFixed({
  length,
  sub
}) {
  (0, _util.assert)((0, _util.isNumber)(length) && !(0, _util.isUndefined)(sub), 'Unable to encode VecFixed type'); // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/restrict-template-expressions

  return `[${sub.type};${length}]`;
} // We setup a record here to ensure we have comprehensive coverage (any item not covered will result
// in a compile-time error with the missing index)


const encoders = {
  [_types.TypeDefInfo.BTreeMap]: typeDef => encodeWithParams(typeDef, 'BTreeMap'),
  [_types.TypeDefInfo.BTreeSet]: typeDef => encodeWithParams(typeDef, 'BTreeSet'),
  [_types.TypeDefInfo.Compact]: typeDef => encodeWithParams(typeDef, 'Compact'),
  [_types.TypeDefInfo.DoNotConstruct]: typeDef => encodeDoNotConstruct(typeDef),
  [_types.TypeDefInfo.Enum]: typeDef => encodeEnum(typeDef),
  [_types.TypeDefInfo.HashMap]: typeDef => encodeWithParams(typeDef, 'HashMap'),
  [_types.TypeDefInfo.Int]: typeDef => encodeUInt(typeDef, 'Int'),
  [_types.TypeDefInfo.Linkage]: typeDef => encodeWithParams(typeDef, 'Linkage'),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [_types.TypeDefInfo.Null]: typeDef => 'Null',
  [_types.TypeDefInfo.Option]: typeDef => encodeWithParams(typeDef, 'Option'),
  [_types.TypeDefInfo.Plain]: typeDef => typeDef.displayName || typeDef.type,
  [_types.TypeDefInfo.Result]: typeDef => encodeWithParams(typeDef, 'Result'),
  [_types.TypeDefInfo.Set]: typeDef => typeDef.type,
  [_types.TypeDefInfo.Struct]: typeDef => encodeStruct(typeDef),
  [_types.TypeDefInfo.Tuple]: typeDef => encodeTuple(typeDef),
  [_types.TypeDefInfo.UInt]: typeDef => encodeUInt(typeDef, 'UInt'),
  [_types.TypeDefInfo.Vec]: typeDef => encodeWithParams(typeDef, 'Vec'),
  [_types.TypeDefInfo.VecFixed]: typeDef => encodeVecFixed(typeDef)
};

function encodeType(typeDef) {
  const encoder = encoders[typeDef.info];
  (0, _util.assert)(encoder, `Cannot encode type: ${typeDef.toString()}`);
  return encoder(typeDef);
}

function displayType(typeDef) {
  if (typeDef.displayName) {
    return encodeWithParams(typeDef);
  }

  switch (typeDef.info) {
    case _types.TypeDefInfo.Struct:
    case _types.TypeDefInfo.Enum:
      return encodeWithParams(typeDef);

    default:
      return encodeType(typeDef);
  }
}

function withTypeString(typeDef) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const type = SPECIAL_TYPES.includes(typeDef.displayName) ? typeDef.displayName : encodeType(typeDef);
  return _objectSpread(_objectSpread({}, typeDef), {}, {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    type
  });
}