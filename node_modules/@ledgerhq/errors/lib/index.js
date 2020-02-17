"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransportError = TransportError;
exports.getAltStatusMessage = getAltStatusMessage;
exports.TransportStatusError = TransportStatusError;
Object.defineProperty(exports, "serializeError", {
  enumerable: true,
  get: function () {
    return _helpers.serializeError;
  }
});
Object.defineProperty(exports, "deserializeError", {
  enumerable: true,
  get: function () {
    return _helpers.deserializeError;
  }
});
Object.defineProperty(exports, "createCustomErrorClass", {
  enumerable: true,
  get: function () {
    return _helpers.createCustomErrorClass;
  }
});
Object.defineProperty(exports, "addCustomErrorDeserializer", {
  enumerable: true,
  get: function () {
    return _helpers.addCustomErrorDeserializer;
  }
});
exports.StatusCodes = exports.DBNotReset = exports.DBWrongPassword = exports.NoDBPathGiven = exports.FirmwareOrAppUpdateRequired = exports.LedgerAPI5xx = exports.LedgerAPI4xx = exports.GenuineCheckFailed = exports.PairingFailed = exports.SyncError = exports.FeeTooHigh = exports.FeeRequired = exports.FeeNotLoaded = exports.CantScanQRCode = exports.ETHAddressNonEIP = exports.WrongAppForCurrency = exports.WrongDeviceForAccount = exports.WebsocketConnectionFailed = exports.WebsocketConnectionError = exports.DeviceShouldStayInApp = exports.TransportWebUSBGestureRequired = exports.TransportRaceCondition = exports.TransportInterfaceNotAvailable = exports.TransportOpenUserCancelled = exports.UserRefusedOnDevice = exports.UserRefusedAllowManager = exports.UserRefusedFirmwareUpdate = exports.UserRefusedAddress = exports.UserRefusedDeviceNameChange = exports.UpdateYourApp = exports.UpdateIncorrectSig = exports.UpdateIncorrectHash = exports.UpdateFetchFileFail = exports.UnavailableTezosOriginatedAccountSend = exports.UnavailableTezosOriginatedAccountReceive = exports.RecipientRequired = exports.MCUNotGenuineToDashboard = exports.UnexpectedBootloader = exports.TimeoutTagged = exports.RecommendUndelegation = exports.RecommendSubAccountsToEmpty = exports.PasswordIncorrectError = exports.PasswordsDontMatchError = exports.GasLessThanEstimate = exports.NotSupportedLegacyAddress = exports.NotEnoughGas = exports.NoAccessToCamera = exports.NotEnoughBalanceBecauseDestinationNotCreated = exports.NotEnoughSpendableBalance = exports.NotEnoughBalanceInParentAccount = exports.NotEnoughBalanceToDelegate = exports.NotEnoughBalance = exports.NoAddressesFound = exports.NetworkDown = exports.ManagerUninstallBTCDep = exports.ManagerNotEnoughSpaceError = exports.ManagerFirmwareNotEnoughSpaceError = exports.ManagerDeviceLockedError = exports.ManagerAppDepUninstallRequired = exports.ManagerAppDepInstallRequired = exports.ManagerAppRelyOnBTCError = exports.ManagerAppAlreadyInstalledError = exports.LedgerAPINotAvailable = exports.LedgerAPIErrorWithMessage = exports.LedgerAPIError = exports.UnknownMCU = exports.LatestMCUInstalledError = exports.InvalidAddressBecauseDestinationIsAlsoSource = exports.InvalidAddress = exports.InvalidXRPTag = exports.HardResetFail = exports.FirmwareNotRecognized = exports.FeeEstimationFailed = exports.EthAppPleaseEnableContractData = exports.EnpointConfigError = exports.DisconnectedDeviceDuringOperation = exports.DisconnectedDevice = exports.DeviceSocketNoBulkStatus = exports.DeviceSocketFail = exports.DeviceNameInvalid = exports.DeviceHalted = exports.DeviceInOSUExpected = exports.DeviceOnDashboardUnexpected = exports.DeviceOnDashboardExpected = exports.DeviceNotGenuineError = exports.DeviceGenuineSocketEarlyClose = exports.DeviceAppVerifyNotSupported = exports.CurrencyNotSupported = exports.CashAddrNotSupported = exports.CantOpenDevice = exports.BtcUnmatchedApp = exports.BluetoothRequired = exports.AmountRequired = exports.AccountNotSupported = exports.AccountNameRequiredError = void 0;

var _helpers = require("./helpers");

const AccountNameRequiredError = (0, _helpers.createCustomErrorClass)("AccountNameRequired");
exports.AccountNameRequiredError = AccountNameRequiredError;
const AccountNotSupported = (0, _helpers.createCustomErrorClass)("AccountNotSupported");
exports.AccountNotSupported = AccountNotSupported;
const AmountRequired = (0, _helpers.createCustomErrorClass)("AmountRequired");
exports.AmountRequired = AmountRequired;
const BluetoothRequired = (0, _helpers.createCustomErrorClass)("BluetoothRequired");
exports.BluetoothRequired = BluetoothRequired;
const BtcUnmatchedApp = (0, _helpers.createCustomErrorClass)("BtcUnmatchedApp");
exports.BtcUnmatchedApp = BtcUnmatchedApp;
const CantOpenDevice = (0, _helpers.createCustomErrorClass)("CantOpenDevice");
exports.CantOpenDevice = CantOpenDevice;
const CashAddrNotSupported = (0, _helpers.createCustomErrorClass)("CashAddrNotSupported");
exports.CashAddrNotSupported = CashAddrNotSupported;
const CurrencyNotSupported = (0, _helpers.createCustomErrorClass)("CurrencyNotSupported");
exports.CurrencyNotSupported = CurrencyNotSupported;
const DeviceAppVerifyNotSupported = (0, _helpers.createCustomErrorClass)("DeviceAppVerifyNotSupported");
exports.DeviceAppVerifyNotSupported = DeviceAppVerifyNotSupported;
const DeviceGenuineSocketEarlyClose = (0, _helpers.createCustomErrorClass)("DeviceGenuineSocketEarlyClose");
exports.DeviceGenuineSocketEarlyClose = DeviceGenuineSocketEarlyClose;
const DeviceNotGenuineError = (0, _helpers.createCustomErrorClass)("DeviceNotGenuine");
exports.DeviceNotGenuineError = DeviceNotGenuineError;
const DeviceOnDashboardExpected = (0, _helpers.createCustomErrorClass)("DeviceOnDashboardExpected");
exports.DeviceOnDashboardExpected = DeviceOnDashboardExpected;
const DeviceOnDashboardUnexpected = (0, _helpers.createCustomErrorClass)("DeviceOnDashboardUnexpected");
exports.DeviceOnDashboardUnexpected = DeviceOnDashboardUnexpected;
const DeviceInOSUExpected = (0, _helpers.createCustomErrorClass)("DeviceInOSUExpected");
exports.DeviceInOSUExpected = DeviceInOSUExpected;
const DeviceHalted = (0, _helpers.createCustomErrorClass)("DeviceHalted");
exports.DeviceHalted = DeviceHalted;
const DeviceNameInvalid = (0, _helpers.createCustomErrorClass)("DeviceNameInvalid");
exports.DeviceNameInvalid = DeviceNameInvalid;
const DeviceSocketFail = (0, _helpers.createCustomErrorClass)("DeviceSocketFail");
exports.DeviceSocketFail = DeviceSocketFail;
const DeviceSocketNoBulkStatus = (0, _helpers.createCustomErrorClass)("DeviceSocketNoBulkStatus");
exports.DeviceSocketNoBulkStatus = DeviceSocketNoBulkStatus;
const DisconnectedDevice = (0, _helpers.createCustomErrorClass)("DisconnectedDevice");
exports.DisconnectedDevice = DisconnectedDevice;
const DisconnectedDeviceDuringOperation = (0, _helpers.createCustomErrorClass)("DisconnectedDeviceDuringOperation");
exports.DisconnectedDeviceDuringOperation = DisconnectedDeviceDuringOperation;
const EnpointConfigError = (0, _helpers.createCustomErrorClass)("EnpointConfig");
exports.EnpointConfigError = EnpointConfigError;
const EthAppPleaseEnableContractData = (0, _helpers.createCustomErrorClass)("EthAppPleaseEnableContractData");
exports.EthAppPleaseEnableContractData = EthAppPleaseEnableContractData;
const FeeEstimationFailed = (0, _helpers.createCustomErrorClass)("FeeEstimationFailed");
exports.FeeEstimationFailed = FeeEstimationFailed;
const FirmwareNotRecognized = (0, _helpers.createCustomErrorClass)("FirmwareNotRecognized");
exports.FirmwareNotRecognized = FirmwareNotRecognized;
const HardResetFail = (0, _helpers.createCustomErrorClass)("HardResetFail");
exports.HardResetFail = HardResetFail;
const InvalidXRPTag = (0, _helpers.createCustomErrorClass)("InvalidXRPTag");
exports.InvalidXRPTag = InvalidXRPTag;
const InvalidAddress = (0, _helpers.createCustomErrorClass)("InvalidAddress");
exports.InvalidAddress = InvalidAddress;
const InvalidAddressBecauseDestinationIsAlsoSource = (0, _helpers.createCustomErrorClass)("InvalidAddressBecauseDestinationIsAlsoSource");
exports.InvalidAddressBecauseDestinationIsAlsoSource = InvalidAddressBecauseDestinationIsAlsoSource;
const LatestMCUInstalledError = (0, _helpers.createCustomErrorClass)("LatestMCUInstalledError");
exports.LatestMCUInstalledError = LatestMCUInstalledError;
const UnknownMCU = (0, _helpers.createCustomErrorClass)("UnknownMCU");
exports.UnknownMCU = UnknownMCU;
const LedgerAPIError = (0, _helpers.createCustomErrorClass)("LedgerAPIError");
exports.LedgerAPIError = LedgerAPIError;
const LedgerAPIErrorWithMessage = (0, _helpers.createCustomErrorClass)("LedgerAPIErrorWithMessage");
exports.LedgerAPIErrorWithMessage = LedgerAPIErrorWithMessage;
const LedgerAPINotAvailable = (0, _helpers.createCustomErrorClass)("LedgerAPINotAvailable");
exports.LedgerAPINotAvailable = LedgerAPINotAvailable;
const ManagerAppAlreadyInstalledError = (0, _helpers.createCustomErrorClass)("ManagerAppAlreadyInstalled");
exports.ManagerAppAlreadyInstalledError = ManagerAppAlreadyInstalledError;
const ManagerAppRelyOnBTCError = (0, _helpers.createCustomErrorClass)("ManagerAppRelyOnBTC");
exports.ManagerAppRelyOnBTCError = ManagerAppRelyOnBTCError;
const ManagerAppDepInstallRequired = (0, _helpers.createCustomErrorClass)("ManagerAppDepInstallRequired");
exports.ManagerAppDepInstallRequired = ManagerAppDepInstallRequired;
const ManagerAppDepUninstallRequired = (0, _helpers.createCustomErrorClass)("ManagerAppDepUninstallRequired");
exports.ManagerAppDepUninstallRequired = ManagerAppDepUninstallRequired;
const ManagerDeviceLockedError = (0, _helpers.createCustomErrorClass)("ManagerDeviceLocked");
exports.ManagerDeviceLockedError = ManagerDeviceLockedError;
const ManagerFirmwareNotEnoughSpaceError = (0, _helpers.createCustomErrorClass)("ManagerFirmwareNotEnoughSpace");
exports.ManagerFirmwareNotEnoughSpaceError = ManagerFirmwareNotEnoughSpaceError;
const ManagerNotEnoughSpaceError = (0, _helpers.createCustomErrorClass)("ManagerNotEnoughSpace");
exports.ManagerNotEnoughSpaceError = ManagerNotEnoughSpaceError;
const ManagerUninstallBTCDep = (0, _helpers.createCustomErrorClass)("ManagerUninstallBTCDep");
exports.ManagerUninstallBTCDep = ManagerUninstallBTCDep;
const NetworkDown = (0, _helpers.createCustomErrorClass)("NetworkDown");
exports.NetworkDown = NetworkDown;
const NoAddressesFound = (0, _helpers.createCustomErrorClass)("NoAddressesFound");
exports.NoAddressesFound = NoAddressesFound;
const NotEnoughBalance = (0, _helpers.createCustomErrorClass)("NotEnoughBalance");
exports.NotEnoughBalance = NotEnoughBalance;
const NotEnoughBalanceToDelegate = (0, _helpers.createCustomErrorClass)("NotEnoughBalanceToDelegate");
exports.NotEnoughBalanceToDelegate = NotEnoughBalanceToDelegate;
const NotEnoughBalanceInParentAccount = (0, _helpers.createCustomErrorClass)("NotEnoughBalanceInParentAccount");
exports.NotEnoughBalanceInParentAccount = NotEnoughBalanceInParentAccount;
const NotEnoughSpendableBalance = (0, _helpers.createCustomErrorClass)("NotEnoughSpendableBalance");
exports.NotEnoughSpendableBalance = NotEnoughSpendableBalance;
const NotEnoughBalanceBecauseDestinationNotCreated = (0, _helpers.createCustomErrorClass)("NotEnoughBalanceBecauseDestinationNotCreated");
exports.NotEnoughBalanceBecauseDestinationNotCreated = NotEnoughBalanceBecauseDestinationNotCreated;
const NoAccessToCamera = (0, _helpers.createCustomErrorClass)("NoAccessToCamera");
exports.NoAccessToCamera = NoAccessToCamera;
const NotEnoughGas = (0, _helpers.createCustomErrorClass)("NotEnoughGas");
exports.NotEnoughGas = NotEnoughGas;
const NotSupportedLegacyAddress = (0, _helpers.createCustomErrorClass)("NotSupportedLegacyAddress");
exports.NotSupportedLegacyAddress = NotSupportedLegacyAddress;
const GasLessThanEstimate = (0, _helpers.createCustomErrorClass)("GasLessThanEstimate");
exports.GasLessThanEstimate = GasLessThanEstimate;
const PasswordsDontMatchError = (0, _helpers.createCustomErrorClass)("PasswordsDontMatch");
exports.PasswordsDontMatchError = PasswordsDontMatchError;
const PasswordIncorrectError = (0, _helpers.createCustomErrorClass)("PasswordIncorrect");
exports.PasswordIncorrectError = PasswordIncorrectError;
const RecommendSubAccountsToEmpty = (0, _helpers.createCustomErrorClass)("RecommendSubAccountsToEmpty");
exports.RecommendSubAccountsToEmpty = RecommendSubAccountsToEmpty;
const RecommendUndelegation = (0, _helpers.createCustomErrorClass)("RecommendUndelegation");
exports.RecommendUndelegation = RecommendUndelegation;
const TimeoutTagged = (0, _helpers.createCustomErrorClass)("TimeoutTagged");
exports.TimeoutTagged = TimeoutTagged;
const UnexpectedBootloader = (0, _helpers.createCustomErrorClass)("UnexpectedBootloader");
exports.UnexpectedBootloader = UnexpectedBootloader;
const MCUNotGenuineToDashboard = (0, _helpers.createCustomErrorClass)("MCUNotGenuineToDashboard");
exports.MCUNotGenuineToDashboard = MCUNotGenuineToDashboard;
const RecipientRequired = (0, _helpers.createCustomErrorClass)("RecipientRequired");
exports.RecipientRequired = RecipientRequired;
const UnavailableTezosOriginatedAccountReceive = (0, _helpers.createCustomErrorClass)("UnavailableTezosOriginatedAccountReceive");
exports.UnavailableTezosOriginatedAccountReceive = UnavailableTezosOriginatedAccountReceive;
const UnavailableTezosOriginatedAccountSend = (0, _helpers.createCustomErrorClass)("UnavailableTezosOriginatedAccountSend");
exports.UnavailableTezosOriginatedAccountSend = UnavailableTezosOriginatedAccountSend;
const UpdateFetchFileFail = (0, _helpers.createCustomErrorClass)("UpdateFetchFileFail");
exports.UpdateFetchFileFail = UpdateFetchFileFail;
const UpdateIncorrectHash = (0, _helpers.createCustomErrorClass)("UpdateIncorrectHash");
exports.UpdateIncorrectHash = UpdateIncorrectHash;
const UpdateIncorrectSig = (0, _helpers.createCustomErrorClass)("UpdateIncorrectSig");
exports.UpdateIncorrectSig = UpdateIncorrectSig;
const UpdateYourApp = (0, _helpers.createCustomErrorClass)("UpdateYourApp");
exports.UpdateYourApp = UpdateYourApp;
const UserRefusedDeviceNameChange = (0, _helpers.createCustomErrorClass)("UserRefusedDeviceNameChange");
exports.UserRefusedDeviceNameChange = UserRefusedDeviceNameChange;
const UserRefusedAddress = (0, _helpers.createCustomErrorClass)("UserRefusedAddress");
exports.UserRefusedAddress = UserRefusedAddress;
const UserRefusedFirmwareUpdate = (0, _helpers.createCustomErrorClass)("UserRefusedFirmwareUpdate");
exports.UserRefusedFirmwareUpdate = UserRefusedFirmwareUpdate;
const UserRefusedAllowManager = (0, _helpers.createCustomErrorClass)("UserRefusedAllowManager");
exports.UserRefusedAllowManager = UserRefusedAllowManager;
const UserRefusedOnDevice = (0, _helpers.createCustomErrorClass)("UserRefusedOnDevice"); // TODO rename because it's just for transaction refusal

exports.UserRefusedOnDevice = UserRefusedOnDevice;
const TransportOpenUserCancelled = (0, _helpers.createCustomErrorClass)("TransportOpenUserCancelled");
exports.TransportOpenUserCancelled = TransportOpenUserCancelled;
const TransportInterfaceNotAvailable = (0, _helpers.createCustomErrorClass)("TransportInterfaceNotAvailable");
exports.TransportInterfaceNotAvailable = TransportInterfaceNotAvailable;
const TransportRaceCondition = (0, _helpers.createCustomErrorClass)("TransportRaceCondition");
exports.TransportRaceCondition = TransportRaceCondition;
const TransportWebUSBGestureRequired = (0, _helpers.createCustomErrorClass)("TransportWebUSBGestureRequired");
exports.TransportWebUSBGestureRequired = TransportWebUSBGestureRequired;
const DeviceShouldStayInApp = (0, _helpers.createCustomErrorClass)("DeviceShouldStayInApp");
exports.DeviceShouldStayInApp = DeviceShouldStayInApp;
const WebsocketConnectionError = (0, _helpers.createCustomErrorClass)("WebsocketConnectionError");
exports.WebsocketConnectionError = WebsocketConnectionError;
const WebsocketConnectionFailed = (0, _helpers.createCustomErrorClass)("WebsocketConnectionFailed");
exports.WebsocketConnectionFailed = WebsocketConnectionFailed;
const WrongDeviceForAccount = (0, _helpers.createCustomErrorClass)("WrongDeviceForAccount");
exports.WrongDeviceForAccount = WrongDeviceForAccount;
const WrongAppForCurrency = (0, _helpers.createCustomErrorClass)("WrongAppForCurrency");
exports.WrongAppForCurrency = WrongAppForCurrency;
const ETHAddressNonEIP = (0, _helpers.createCustomErrorClass)("ETHAddressNonEIP");
exports.ETHAddressNonEIP = ETHAddressNonEIP;
const CantScanQRCode = (0, _helpers.createCustomErrorClass)("CantScanQRCode");
exports.CantScanQRCode = CantScanQRCode;
const FeeNotLoaded = (0, _helpers.createCustomErrorClass)("FeeNotLoaded");
exports.FeeNotLoaded = FeeNotLoaded;
const FeeRequired = (0, _helpers.createCustomErrorClass)("FeeRequired");
exports.FeeRequired = FeeRequired;
const FeeTooHigh = (0, _helpers.createCustomErrorClass)("FeeTooHigh");
exports.FeeTooHigh = FeeTooHigh;
const SyncError = (0, _helpers.createCustomErrorClass)("SyncError");
exports.SyncError = SyncError;
const PairingFailed = (0, _helpers.createCustomErrorClass)("PairingFailed");
exports.PairingFailed = PairingFailed;
const GenuineCheckFailed = (0, _helpers.createCustomErrorClass)("GenuineCheckFailed");
exports.GenuineCheckFailed = GenuineCheckFailed;
const LedgerAPI4xx = (0, _helpers.createCustomErrorClass)("LedgerAPI4xx");
exports.LedgerAPI4xx = LedgerAPI4xx;
const LedgerAPI5xx = (0, _helpers.createCustomErrorClass)("LedgerAPI5xx");
exports.LedgerAPI5xx = LedgerAPI5xx;
const FirmwareOrAppUpdateRequired = (0, _helpers.createCustomErrorClass)("FirmwareOrAppUpdateRequired"); // db stuff, no need to translate

exports.FirmwareOrAppUpdateRequired = FirmwareOrAppUpdateRequired;
const NoDBPathGiven = (0, _helpers.createCustomErrorClass)("NoDBPathGiven");
exports.NoDBPathGiven = NoDBPathGiven;
const DBWrongPassword = (0, _helpers.createCustomErrorClass)("DBWrongPassword");
exports.DBWrongPassword = DBWrongPassword;
const DBNotReset = (0, _helpers.createCustomErrorClass)("DBNotReset");
/**
 * TransportError is used for any generic transport errors.
 * e.g. Error thrown when data received by exchanges are incorrect or if exchanged failed to communicate with the device for various reason.
 */

exports.DBNotReset = DBNotReset;

function TransportError(message, id) {
  this.name = "TransportError";
  this.message = message;
  this.stack = new Error().stack;
  this.id = id;
} //$FlowFixMe


TransportError.prototype = new Error();
(0, _helpers.addCustomErrorDeserializer)("TransportError", e => new TransportError(e.message, e.id));
const StatusCodes = {
  PIN_REMAINING_ATTEMPTS: 0x63c0,
  INCORRECT_LENGTH: 0x6700,
  COMMAND_INCOMPATIBLE_FILE_STRUCTURE: 0x6981,
  SECURITY_STATUS_NOT_SATISFIED: 0x6982,
  CONDITIONS_OF_USE_NOT_SATISFIED: 0x6985,
  INCORRECT_DATA: 0x6a80,
  NOT_ENOUGH_MEMORY_SPACE: 0x6a84,
  REFERENCED_DATA_NOT_FOUND: 0x6a88,
  FILE_ALREADY_EXISTS: 0x6a89,
  INCORRECT_P1_P2: 0x6b00,
  INS_NOT_SUPPORTED: 0x6d00,
  CLA_NOT_SUPPORTED: 0x6e00,
  TECHNICAL_PROBLEM: 0x6f00,
  OK: 0x9000,
  MEMORY_PROBLEM: 0x9240,
  NO_EF_SELECTED: 0x9400,
  INVALID_OFFSET: 0x9402,
  FILE_NOT_FOUND: 0x9404,
  INCONSISTENT_FILE: 0x9408,
  ALGORITHM_NOT_SUPPORTED: 0x9484,
  INVALID_KCV: 0x9485,
  CODE_NOT_INITIALIZED: 0x9802,
  ACCESS_CONDITION_NOT_FULFILLED: 0x9804,
  CONTRADICTION_SECRET_CODE_STATUS: 0x9808,
  CONTRADICTION_INVALIDATION: 0x9810,
  CODE_BLOCKED: 0x9840,
  MAX_VALUE_REACHED: 0x9850,
  GP_AUTH_FAILED: 0x6300,
  LICENSING: 0x6f42,
  HALTED: 0x6faa
};
exports.StatusCodes = StatusCodes;

function getAltStatusMessage(code) {
  switch (code) {
    // improve text of most common errors
    case 0x6700:
      return "Incorrect length";

    case 0x6982:
      return "Security not satisfied (dongle locked or have invalid access rights)";

    case 0x6985:
      return "Condition of use not satisfied (denied by the user?)";

    case 0x6a80:
      return "Invalid data received";

    case 0x6b00:
      return "Invalid parameter received";
  }

  if (0x6f00 <= code && code <= 0x6fff) {
    return "Internal error, please report";
  }
}
/**
 * Error thrown when a device returned a non success status.
 * the error.statusCode is one of the `StatusCodes` exported by this library.
 */


function TransportStatusError(statusCode) {
  this.name = "TransportStatusError";
  const statusText = Object.keys(StatusCodes).find(k => StatusCodes[k] === statusCode) || "UNKNOWN_ERROR";
  const smsg = getAltStatusMessage(statusCode) || statusText;
  const statusCodeStr = statusCode.toString(16);
  this.message = `Ledger device: ${smsg} (0x${statusCodeStr})`;
  this.stack = new Error().stack;
  this.statusCode = statusCode;
  this.statusText = statusText;
} //$FlowFixMe


TransportStatusError.prototype = new Error();
(0, _helpers.addCustomErrorDeserializer)("TransportStatusError", e => new TransportStatusError(e.statusCode));
//# sourceMappingURL=index.js.map