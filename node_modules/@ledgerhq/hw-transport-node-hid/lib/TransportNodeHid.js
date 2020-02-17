"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nodeHid = _interopRequireDefault(require("node-hid"));

var _hwTransportNodeHidNoevents = _interopRequireWildcard(require("@ledgerhq/hw-transport-node-hid-noevents"));

var _devices = require("@ledgerhq/devices");

var _errors = require("@ledgerhq/errors");

var _listenDevices = _interopRequireDefault(require("./listenDevices"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let listenDevicesDebounce = 500;

let listenDevicesPollingSkip = () => false;
/**
 * node-hid Transport implementation
 * @example
 * import TransportNodeHid from "@ledgerhq/hw-transport-node-hid";
 * ...
 * TransportNodeHid.create().then(transport => ...)
 */


class TransportNodeHid extends _hwTransportNodeHidNoevents.default {
  /**
   *
   */

  /**
   *
   */

  /**
   *
   */

  /**
   *
   */

  /**
   *
   */

  /**
   */

  /**
   * if path="" is not provided, the library will take the first device
   */
  static open(path) {
    return Promise.resolve().then(() => {
      if (path) {
        return new TransportNodeHid(new _nodeHid.default.HID(path));
      }

      const device = (0, _hwTransportNodeHidNoevents.getDevices)()[0];
      if (!device) throw new _errors.TransportError("NoDevice", "NoDevice");
      return new TransportNodeHid(new _nodeHid.default.HID(device.path));
    });
  }

}

exports.default = TransportNodeHid;
TransportNodeHid.isSupported = _hwTransportNodeHidNoevents.default.isSupported;
TransportNodeHid.list = _hwTransportNodeHidNoevents.default.list;

TransportNodeHid.setListenDevicesDebounce = delay => {
  listenDevicesDebounce = delay;
};

TransportNodeHid.setListenDevicesPollingSkip = conditionToSkip => {
  listenDevicesPollingSkip = conditionToSkip;
};

TransportNodeHid.setListenDevicesDebug = () => {
  console.warn("setListenDevicesDebug is deprecated. Use @ledgerhq/logs instead. No logs will get emitted there anymore.");
};

TransportNodeHid.listen = observer => {
  let unsubscribed = false;
  Promise.resolve((0, _hwTransportNodeHidNoevents.getDevices)()).then(devices => {
    // this needs to run asynchronously so the subscription is defined during this phase
    for (const device of devices) {
      if (!unsubscribed) {
        const descriptor = device.path;
        const deviceModel = (0, _devices.identifyUSBProductId)(device.productId);
        observer.next({
          type: "add",
          descriptor,
          device,
          deviceModel
        });
      }
    }
  });
  const {
    events,
    stop
  } = (0, _listenDevices.default)(listenDevicesDebounce, listenDevicesPollingSkip);

  const onAdd = device => {
    if (unsubscribed || !device) return;
    const deviceModel = (0, _devices.identifyUSBProductId)(device.productId);
    observer.next({
      type: "add",
      descriptor: device.path,
      deviceModel,
      device
    });
  };

  const onRemove = device => {
    if (unsubscribed || !device) return;
    const deviceModel = (0, _devices.identifyUSBProductId)(device.productId);
    observer.next({
      type: "remove",
      descriptor: device.path,
      deviceModel,
      device
    });
  };

  events.on("add", onAdd);
  events.on("remove", onRemove);

  function unsubscribe() {
    unsubscribed = true;
    events.removeListener("add", onAdd);
    events.removeListener("remove", onRemove);
    stop();
  }

  return {
    unsubscribe
  };
};
//# sourceMappingURL=TransportNodeHid.js.map