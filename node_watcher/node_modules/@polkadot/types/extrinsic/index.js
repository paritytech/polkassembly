"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  GenericExtrinsic: true,
  GenericExtrinsicEra: true,
  GenericMortalEra: true,
  GenericImmortalEra: true,
  GenericExtrinsicPayload: true,
  GenericExtrinsicPayloadUnknown: true,
  GenericExtrinsicUnknown: true,
  GenericSignerPayload: true
};
Object.defineProperty(exports, "GenericExtrinsic", {
  enumerable: true,
  get: function () {
    return _Extrinsic.default;
  }
});
Object.defineProperty(exports, "GenericExtrinsicEra", {
  enumerable: true,
  get: function () {
    return _ExtrinsicEra.default;
  }
});
Object.defineProperty(exports, "GenericMortalEra", {
  enumerable: true,
  get: function () {
    return _ExtrinsicEra.MortalEra;
  }
});
Object.defineProperty(exports, "GenericImmortalEra", {
  enumerable: true,
  get: function () {
    return _ExtrinsicEra.ImmortalEra;
  }
});
Object.defineProperty(exports, "GenericExtrinsicPayload", {
  enumerable: true,
  get: function () {
    return _ExtrinsicPayload.default;
  }
});
Object.defineProperty(exports, "GenericExtrinsicPayloadUnknown", {
  enumerable: true,
  get: function () {
    return _ExtrinsicPayloadUnknown.default;
  }
});
Object.defineProperty(exports, "GenericExtrinsicUnknown", {
  enumerable: true,
  get: function () {
    return _ExtrinsicUnknown.default;
  }
});
Object.defineProperty(exports, "GenericSignerPayload", {
  enumerable: true,
  get: function () {
    return _SignerPayload.default;
  }
});

var _Extrinsic = _interopRequireDefault(require("./Extrinsic"));

var _ExtrinsicEra = _interopRequireWildcard(require("./ExtrinsicEra"));

var _ExtrinsicPayload = _interopRequireDefault(require("./ExtrinsicPayload"));

var _ExtrinsicPayloadUnknown = _interopRequireDefault(require("./ExtrinsicPayloadUnknown"));

var _ExtrinsicUnknown = _interopRequireDefault(require("./ExtrinsicUnknown"));

var _SignerPayload = _interopRequireDefault(require("./SignerPayload"));

var _v = require("./v1");

Object.keys(_v).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _v[key];
    }
  });
});

var _v2 = require("./v2");

Object.keys(_v2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _v2[key];
    }
  });
});

var _v3 = require("./v3");

Object.keys(_v3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _v3[key];
    }
  });
});

var _v4 = require("./v4");

Object.keys(_v4).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _v4[key];
    }
  });
});