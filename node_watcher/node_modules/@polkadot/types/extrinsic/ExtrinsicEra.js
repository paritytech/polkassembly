"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.MortalEra = exports.ImmortalEra = void 0;

var _util = require("@polkadot/util");

var _Enum = _interopRequireDefault(require("../codec/Enum"));

var _Tuple = _interopRequireDefault(require("../codec/Tuple"));

var _Raw = _interopRequireDefault(require("../codec/Raw"));

var _U = _interopRequireDefault(require("../primitive/U64"));

var _constants = require("./constants");

// Copyright 2017-2020 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
function getTrailingZeros(period) {
  const binary = period.toString(2);
  let index = 0;

  while (binary[binary.length - 1 - index] === '0') {
    index++;
  }

  return index;
}
/**
 * @name ImmortalEra
 * @description
 * The ImmortalEra for an extrinsic
 */


class ImmortalEra extends _Raw.default {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(registry, value) {
    // For immortals, we always provide the known value (i.e. treated as a
    // constant no matter how it is constructed - it is a fixed structure)
    super(registry, _constants.IMMORTAL_ERA);
  }

}
/**
 * @name MortalEra
 * @description
 * The MortalEra for an extrinsic, indicating period and phase
 */


exports.ImmortalEra = ImmortalEra;

class MortalEra extends _Tuple.default {
  constructor(registry, value) {
    super(registry, {
      period: _U.default,
      phase: _U.default
    }, MortalEra._decodeMortalEra(registry, value));
  }
  /** @internal */


  static _decodeMortalEra(registry, value) {
    if ((0, _util.isHex)(value)) {
      return MortalEra._decodeMortalU8a(registry, (0, _util.hexToU8a)(value));
    } else if (Array.isArray(value)) {
      return MortalEra._decodeMortalU8a(registry, new Uint8Array(value));
    } else if ((0, _util.isU8a)(value)) {
      return MortalEra._decodeMortalU8a(registry, value);
    } else if ((0, _util.isObject)(value)) {
      return MortalEra._decodeMortalObject(registry, value);
    } else if (!value) {
      return [new _U.default(registry), new _U.default(registry)];
    }

    throw new Error('Invalid data passed to Mortal era');
  }
  /** @internal */


  static _decodeMortalObject(registry, value) {
    const {
      current,
      period
    } = value;
    let calPeriod = Math.pow(2, Math.ceil(Math.log2(period)));
    calPeriod = Math.min(Math.max(calPeriod, 4), 1 << 16);
    const phase = current % calPeriod;
    const quantizeFactor = Math.max(calPeriod >> 12, 1);
    const quantizedPhase = phase / quantizeFactor * quantizeFactor;
    return [new _U.default(registry, calPeriod), new _U.default(registry, quantizedPhase)];
  }
  /** @internal */


  static _decodeMortalU8a(registry, value) {
    if (value.length === 0) {
      return [new _U.default(registry), new _U.default(registry)];
    }

    const first = (0, _util.u8aToBn)(value.subarray(0, 1)).toNumber();
    const second = (0, _util.u8aToBn)(value.subarray(1, 2)).toNumber();
    const encoded = first + (second << 8);
    const period = 2 << encoded % (1 << 4);
    const quantizeFactor = Math.max(period >> 12, 1);
    const phase = (encoded >> 4) * quantizeFactor;
    (0, _util.assert)(period >= 4 && phase < period, 'Invalid data passed to Mortal era');
    return [new _U.default(registry, period), new _U.default(registry, phase)];
  }
  /**
   * @description Encoded length for mortals occupy 2 bytes, different from the actual Tuple since it is encoded. This is a shortcut fro `toU8a().length`
   */


  get encodedLength() {
    return 2;
  }
  /**
   * @description The period of this Mortal wraps as a [[U64]]
   */


  get period() {
    return this[0];
  }
  /**
   * @description The phase of this Mortal wraps as a [[U64]]
   */


  get phase() {
    return this[1];
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */


  toHuman() {
    return {
      period: (0, _util.formatNumber)(this.period),
      phase: (0, _util.formatNumber)(this.phase)
    };
  }
  /**
   * @description Returns a JSON representation of the actual value
   */


  toJSON() {
    return this.toHex();
  }
  /**
   * @description Encodes the value as a Uint8Array as per the parity-codec specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   * Period and phase are encoded:
   *   - The period of validity from the block hash found in the signing material.
   *   - The phase in the period that this transaction's lifetime begins (and, importantly,
   *     implies which block hash is included in the signature material). If the `period` is
   *     greater than 1 << 12, then it will be a factor of the times greater than 1<<12 that
   *     `period` is.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  toU8a(isBare) {
    const period = this.period.toNumber();
    const phase = this.phase.toNumber();
    const quantizeFactor = Math.max(period >> 12, 1);
    const trailingZeros = getTrailingZeros(period);
    const encoded = Math.min(15, Math.max(1, trailingZeros - 1)) + (phase / quantizeFactor << 4);
    const first = encoded >> 8;
    const second = encoded & 0xff;
    return new Uint8Array([second, first]);
  }
  /**
   * @description Get the block number of the start of the era whose properties this object describes that `current` belongs to.
   */


  birth(current) {
    // FIXME No toNumber() here
    return Math.floor((Math.max((0, _util.bnToBn)(current).toNumber(), this.phase.toNumber()) - this.phase.toNumber()) / this.period.toNumber()) * this.period.toNumber() + this.phase.toNumber();
  }
  /**
   * @description Get the block number of the first block at which the era has ended.
   */


  death(current) {
    // FIXME No toNumber() here
    return this.birth(current) + this.period.toNumber();
  }

}
/**
 * @name GenericExtrinsicEra
 * @description
 * The era for an extrinsic, indicating either a mortal or immortal extrinsic
 */


exports.MortalEra = MortalEra;

class ExtrinsicEra extends _Enum.default {
  constructor(registry, value) {
    super(registry, {
      ImmortalEra,
      MortalEra
    }, ExtrinsicEra._decodeExtrinsicEra(value));
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/ban-types


  static _decodeExtrinsicEra(value = new Uint8Array()) {
    if (value instanceof ExtrinsicEra) {
      return ExtrinsicEra._decodeExtrinsicEra(value.toU8a());
    } else if ((0, _util.isHex)(value)) {
      return ExtrinsicEra._decodeExtrinsicEra((0, _util.hexToU8a)(value));
    } else if (!value || (0, _util.isU8a)(value)) {
      return !(value === null || value === void 0 ? void 0 : value.length) || value[0] === 0 ? new Uint8Array([0]) : new Uint8Array([1, value[0], value[1]]);
    } else if ((0, _util.isObject)(value)) {
      // this is to de-serialize from JSON
      return value.MortalEra ? {
        MortalEra: value.MortalEra
      } : value.ImmortalEra ? {
        ImmortalEra: value.ImmortalEra
      } : {
        MortalEra: value
      };
    }

    throw new Error('Invalid data passed to Era');
  }
  /**
   * @description Override the encoded length method
   */


  get encodedLength() {
    return this.isImmortalEra ? this.asImmortalEra.encodedLength : this.asMortalEra.encodedLength;
  }
  /**
   * @description Returns the item as a [[ImmortalEra]]
   */


  get asImmortalEra() {
    (0, _util.assert)(this.isImmortalEra, `Cannot convert '${this.type}' via asImmortalEra`);
    return this.value;
  }
  /**
   * @description Returns the item as a [[MortalEra]]
   */


  get asMortalEra() {
    (0, _util.assert)(this.isMortalEra, `Cannot convert '${this.type}' via asMortalEra`);
    return this.value;
  }
  /**
   * @description `true` if Immortal
   */


  get isImmortalEra() {
    return this.index === 0;
  }
  /**
   * @description `true` if Mortal
   */


  get isMortalEra() {
    return this.index > 0;
  }
  /**
   * @description Encodes the value as a Uint8Array as per the parity-codec specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */


  toU8a(isBare) {
    return this.isMortalEra ? this.asMortalEra.toU8a(isBare) : this.asImmortalEra.toU8a(isBare);
  }

}

exports.default = ExtrinsicEra;