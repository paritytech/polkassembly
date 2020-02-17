import LedgerApp from "index.js";
import TransportNodeHid from "@ledgerhq/hw-transport-node-hid";
import { expect, test } from "jest";
import { blake2bInit, blake2bUpdate, blake2bFinal } from "blakejs";

const ed25519 = require("ed25519");

test("get version", async () => {
  const transport = await TransportNodeHid.create(1000);

  const app = new LedgerApp(transport);
  const version = await app.getVersion();
  console.log(version);
});

test("get address", async () => {
  const transport = await TransportNodeHid.create(1000);

  const app = new LedgerApp(transport);

  const pathAccount = 0x80000000;
  const pathChange = 0x80000000;
  const pathIndex = 0x80000005;

  const response = await app.getAddress(pathAccount, pathChange, pathIndex);
  console.log(response);

  expect(response.pubKey).toEqual("1d07175b57f9d73de246035dd1f91c806b03ae5bead5f9e59692c9b82d337cc0");
  expect(response.address).toEqual("DEP1hv6bkuhZdvgBdzKYwvPKnA6Quadsta7L74n3S4V9S9Z");
});

test("show address", async () => {
  jest.setTimeout(60000);

  const transport = await TransportNodeHid.create(1000);

  const app = new LedgerApp(transport);

  const pathAccount = 0x80000000;
  const pathChange = 0x80000000;
  const pathIndex = 0x8000000a;
  const response = await app.getAddress(pathAccount, pathChange, pathIndex, true);

  console.log(response);

  // FIXME: Address
  expect(response.pubKey).toEqual("51f412e4c0b84d911751df1352ce9b6e7404dd37b5cbc04e79b4710c938ce8ca");
  expect(response.address).toEqual("ERmuEwD1LJaBrMsivMXpukWXR7ZQkF55VzfbrpgnhVmMpFH");
});

test("sign1", async () => {
  jest.setTimeout(60000);

  const transport = await TransportNodeHid.create(1000);

  const txBlobStr =
    "0400ff8d16d62802ca55326ec52bf76a8543b90e2aba5bcf6cd195c0d6fc1ef38fa1b3000600ae11030000c" +
    "80100003fd7b9eb6a00376e5be61f01abb429ffb0b104be05eaff4d458da48fcd425baf3fd7b9eb6a00376e" +
    "5be61f01abb429ffb0b104be05eaff4d458da48fcd425baf";

  const txBlob = Buffer.from(txBlobStr, "hex");

  const app = new LedgerApp(transport);

  const pathAccount = 0x80000000;
  const pathChange = 0x80000000;
  const pathIndex = 0x80000000;
  const response = await app.sign(pathAccount, pathChange, pathIndex, txBlob);

  console.log(response);
});

test("sign2_and_verify", async () => {
  jest.setTimeout(60000);

  const transport = await TransportNodeHid.create(1000);

  const txBlobStr =
    "0400fff27d305943815cdbefa6aabbeeb9dec0cd17591bdaf412ed6bce8f9e93708c6c0b63ce64c10c05d503ae1103006d0fef030000e3777fa922cafbff200cadeaea1a76bd7898ad5b89f7848999058b50e715f6361578af1cc2dfbd5393020eb7ab87e7d784ddd525f68e82cb4192af352713fd85";

  const txBlob = Buffer.from(txBlobStr, "hex");

  const app = new LedgerApp(transport);
  const pathAccount = 0x80000000;
  const pathChange = 0x80000000;
  const pathIndex = 0x80000000;

  const responseAddr = await app.getAddress(pathAccount, pathChange, pathIndex);
  const responseSign = await app.sign(pathAccount, pathChange, pathIndex, txBlob);

  const pubkey = Buffer.from(responseAddr.pubKey, "hex");

  console.log(responseAddr);
  console.log(responseSign);

  // Check signature is valid
  let prehash = txBlob;
  if (txBlob.length > 256) {
    const context = blake2bInit(64, null);
    blake2bUpdate(context, txBlob);
    prehash = Buffer.from(blake2bFinal(context));
  }

  const valid = ed25519.Verify(prehash, responseSign.signature.slice(1), pubkey);
  expect(valid).toEqual(true);
});
