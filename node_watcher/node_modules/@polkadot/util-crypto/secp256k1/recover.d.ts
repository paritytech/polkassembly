/**
 * @name secp256k1Recover
 * @description Recovers a publicKey from the supplied signature
 */
export default function secp256k1Recover(message: Uint8Array, signature: Uint8Array, recovery: number): Uint8Array;
