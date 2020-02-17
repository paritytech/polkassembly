"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _events = _interopRequireDefault(require("events"));

var _hwTransportNodeHidNoevents = require("@ledgerhq/hw-transport-node-hid-noevents");

var _logs = require("@ledgerhq/logs");

var _usb = _interopRequireDefault(require("usb"));

var _debounce = _interopRequireDefault(require("lodash/debounce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (delay, listenDevicesPollingSkip) => {
  const events = new _events.default();
  events.setMaxListeners(0);
  let listDevices = (0, _hwTransportNodeHidNoevents.getDevices)();

  const flatDevice = d => d.path;

  const getFlatDevices = () => [...new Set((0, _hwTransportNodeHidNoevents.getDevices)().map(d => flatDevice(d)))];

  const getDeviceByPaths = paths => listDevices.find(d => paths.includes(flatDevice(d)));

  let lastDevices = getFlatDevices();

  const poll = () => {
    if (!listenDevicesPollingSkip()) {
      (0, _logs.log)("hid-listen", "Polling for added or removed devices");
      let changeFound = false;
      const currentDevices = getFlatDevices();
      const newDevices = currentDevices.filter(d => !lastDevices.includes(d));

      if (newDevices.length > 0) {
        (0, _logs.log)("hid-listen", "New device found:", newDevices);
        listDevices = (0, _hwTransportNodeHidNoevents.getDevices)();
        events.emit("add", getDeviceByPaths(newDevices));
        changeFound = true;
      } else {
        (0, _logs.log)("hid-listen", "No new device found");
      }

      const removeDevices = lastDevices.filter(d => !currentDevices.includes(d));

      if (removeDevices.length > 0) {
        (0, _logs.log)("hid-listen", "Removed device found:", removeDevices);
        events.emit("remove", getDeviceByPaths(removeDevices));
        listDevices = listDevices.filter(d => !removeDevices.includes(flatDevice(d)));
        changeFound = true;
      } else {
        (0, _logs.log)("hid-listen", "No removed device found");
      }

      if (changeFound) {
        lastDevices = currentDevices;
      }
    } else {
      (0, _logs.log)("hid-listen", "Polling skipped, re-debouncing");
      debouncedPoll();
    }
  };

  const debouncedPoll = (0, _debounce.default)(poll, delay);

  const attachDetected = device => {
    (0, _logs.log)("hid-listen", "Device add detected:", device);
    debouncedPoll();
  };

  _usb.default.on("attach", attachDetected);

  (0, _logs.log)("hid-listen", "attach listener added");

  const detachDetected = device => {
    (0, _logs.log)("hid-listen", "Device removal detected:", device);
    debouncedPoll();
  };

  _usb.default.on("detach", detachDetected);

  (0, _logs.log)("hid-listen", "detach listener added");
  return {
    stop: () => {
      (0, _logs.log)("hid-listen", "Stop received, removing listeners and cancelling pending debounced polls");
      debouncedPoll.cancel();

      _usb.default.removeListener("attach", attachDetected);

      _usb.default.removeListener("detach", detachDetected);
    },
    events
  };
};

exports.default = _default;
//# sourceMappingURL=listenDevices.js.map