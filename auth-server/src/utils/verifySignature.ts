import { Keyring } from '@polkadot/api';
import { schnorrkelVerify } from '@polkadot/util-crypto';

const keyring = new Keyring({ type: 'sr25519' });

export default (message: string, address: string, signature: string) => {
	const publicKey = keyring.decodeAddress(address);

	return schnorrkelVerify(message, signature, publicKey);
};
