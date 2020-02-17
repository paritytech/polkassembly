/** ******************************************************************************
 *  (c) 2019 ZondaX GmbH
 *  (c) 2016-2017 Ledger
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 ******************************************************************************* */

const CLA = 0x99;
const CHUNK_SIZE = 250;
const APP_KEY = "DOT";

const INS = {
  GET_VERSION: 0x00,
  GET_ADDR_ED25519: 0x01,
  SIGN_ED25519: 0x02,
};

const PAYLOAD_TYPE = {
  INIT: 0x00,
  ADD: 0x01,
  LAST: 0x02,
};

const ERROR_DESCRIPTION = {
  1: "U2F: Unknown",
  2: "U2F: Bad request",
  3: "U2F: Configuration unsupported",
  4: "U2F: Device Ineligible",
  5: "U2F: Timeout",
  14: "Timeout",
  0x9000: "No errors",
  0x9001: "Device is busy",
  0x6802: "Error deriving keys",
  0x6400: "Execution Error",
  0x6700: "Wrong Length",
  0x6982: "Empty Buffer",
  0x6983: "Output buffer too small",
  0x6984: "Data is invalid",
  0x6985: "Conditions not satisfied",
  0x6986: "Transaction rejected",
  0x6a80: "Bad key handle",
  0x6b00: "Invalid P1/P2",
  0x6d00: "Instruction not supported",
  0x6e00: "Ledger app does not seem to be open",
  0x6f00: "Unknown error",
  0x6f01: "Sign/verify error",
};

function errorCodeToString(statusCode) {
  if (statusCode in ERROR_DESCRIPTION) return ERROR_DESCRIPTION[statusCode];
  return `Unknown Status Code: ${statusCode}`;
}

export default class LedgerApp {
  constructor(transport, scrambleKey = APP_KEY) {
    if (!transport) {
      throw new Error("Transport has not been defined");
    }

    this.transport = transport;
    transport.decorateAppAPIMethods(this, ["getVersion", "getAddress", "sign"], scrambleKey);
  }

  static serializeBIP44(account, change, addressIndex) {
    if (!Number.isInteger(account)) throw new Error("Input must be an integer");
    if (!Number.isInteger(change)) throw new Error("Input must be an integer");
    if (!Number.isInteger(addressIndex)) throw new Error("Input must be an integer");

    const buf = Buffer.alloc(20);
    buf.writeUInt32LE(0x8000002c, 0);
    buf.writeUInt32LE(0x800001b2, 4);
    // eslint-disable-next-line no-bitwise
    buf.writeUInt32LE(account, 8);
    // eslint-disable-next-line no-bitwise
    buf.writeUInt32LE(change, 12);
    // eslint-disable-next-line no-bitwise
    buf.writeUInt32LE(addressIndex, 16);

    return buf;
  }

  static signGetChunks(account, change, addressIndex, message) {
    const chunks = [];
    const bip44Path = LedgerApp.serializeBIP44(account, change, addressIndex);
    chunks.push(bip44Path);

    const buffer = Buffer.from(message);

    for (let i = 0; i < buffer.length; i += CHUNK_SIZE) {
      let end = i + CHUNK_SIZE;
      if (i > buffer.length) {
        end = buffer.length;
      }
      chunks.push(buffer.slice(i, end));
    }

    return chunks;
  }

  static processErrorResponse(response) {
    return {
      return_code: response.statusCode,
      error_message: errorCodeToString(response.statusCode),
    };
  }

  async getVersion() {
    return this.transport.send(CLA, INS.GET_VERSION, 0, 0).then(response => {
      const errorCodeData = response.slice(-2);
      const errorCode = errorCodeData[0] * 256 + errorCodeData[1];

      let targetId = 0;
      if (response.length >= 9) {
        /* eslint-disable no-bitwise */
        targetId = (response[5] << 24) + (response[6] << 16) + (response[7] << 8) + (response[8] << 0);
        /* eslint-enable no-bitwise */
      }

      return {
        return_code: errorCode,
        error_message: errorCodeToString(errorCode),
        //
        test_mode: response[0] !== 0,
        major: response[1],
        minor: response[2],
        patch: response[3],
        device_locked: response[4] === 1,
        target_id: targetId.toString(16),
      };
    }, LedgerApp.processErrorResponse);
  }

  async getAddress(account, change, addressIndex, requireConfirmation = false) {
    const bip44Path = LedgerApp.serializeBIP44(account, change, addressIndex);

    let p1 = 0;
    if (requireConfirmation) p1 = 1;

    return this.transport.send(CLA, INS.GET_ADDR_ED25519, p1, 0, bip44Path).then(response => {
      const errorCodeData = response.slice(-2);
      const errorCode = errorCodeData[0] * 256 + errorCodeData[1];

      return {
        pubKey: response.slice(0, 32).toString("hex"),
        address: response.slice(32, response.length - 2).toString("ascii"),
        return_code: errorCode,
        error_message: errorCodeToString(errorCode),
      };
    }, LedgerApp.processErrorResponse);
  }

  async signSendChunk(chunkIdx, chunkNum, chunk) {
    let payloadType = PAYLOAD_TYPE.ADD;
    if (chunkIdx === 1) {
      payloadType = PAYLOAD_TYPE.INIT;
    }
    if (chunkIdx === chunkNum) {
      payloadType = PAYLOAD_TYPE.LAST;
    }

    return this.transport
      .send(CLA, INS.SIGN_ED25519, payloadType, 0, chunk, [0x9000, 0x6984, 0x6a80])
      .then(response => {
        const errorCodeData = response.slice(-2);
        const returnCode = errorCodeData[0] * 256 + errorCodeData[1];
        let errorMessage = errorCodeToString(returnCode);
        let signature = null;

        if (returnCode === 0x6a80 || returnCode === 0x6984) {
          errorMessage = response.slice(0, response.length - 2).toString("ascii");
        } else if (response.length > 2) {
          signature = response.slice(0, response.length - 2);
        }

        return {
          signature,
          return_code: returnCode,
          error_message: errorMessage,
        };
      }, LedgerApp.processErrorResponse);
  }

  async sign(account, change, addressIndex, message) {
    const chunks = LedgerApp.signGetChunks(account, change, addressIndex, message);
    return this.signSendChunk(1, chunks.length, chunks[0]).then(async result => {
      for (let i = 1; i < chunks.length; i += 1) {
        // eslint-disable-next-line no-await-in-loop,no-param-reassign
        result = await this.signSendChunk(1 + i, chunks.length, chunks[i]);
        if (result.return_code !== 0x9000) {
          break;
        }
      }

      return {
        return_code: result.return_code,
        error_message: result.error_message,
        signature: result.signature,
      };
    }, LedgerApp.processErrorResponse);
  }
}
