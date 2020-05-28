"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Metadata = _interopRequireDefault(require("../Metadata"));

var _fromMetadata = _interopRequireDefault(require("./consts/fromMetadata"));

var _fromMetadata2 = _interopRequireDefault(require("./extrinsics/fromMetadata"));

var _fromMetadata3 = _interopRequireDefault(require("./storage/fromMetadata"));

// Copyright 2017-2020 @polkadot/metadata authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/**
 * This class represents a decorated wrapper over the [[Metadata]]. The
 * [[Metadata]] type is a Codec type returned by the node, and `Decorated`
 * composes it and populates the `.query`, `.tx` and `.consts` sections.
 */
class Decorated {
  constructor(registry, value) {
    this.consts = void 0;
    this.metadata = void 0;
    this.registry = void 0;
    this.query = void 0;
    this.tx = void 0;
    this.registry = registry;
    this.metadata = value instanceof _Metadata.default ? value : new _Metadata.default(registry, value); // decoration

    this.tx = (0, _fromMetadata2.default)(registry, this.metadata);
    this.query = (0, _fromMetadata3.default)(registry, this.metadata);
    this.consts = (0, _fromMetadata.default)(registry, this.metadata);
  }

}

exports.default = Decorated;