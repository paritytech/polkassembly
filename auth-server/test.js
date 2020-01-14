const api = require('@polkadot/api');

const keyring = new api.Keyring({ type: 'sr25519' });

const publicKey = keyring.decodeAddress(process.argv[2]);

console.log(publicKey);
