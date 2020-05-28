import { Keypair } from '../../types';
import '../../polyfill';
/**
 * @name schnorrkelKeypairFromSeed
 * @description Returns a object containing a `publicKey` & `secretKey` generated from the supplied seed.
 */
export default function schnorrkelKeypairFromSeed(seed: Uint8Array): Keypair;
