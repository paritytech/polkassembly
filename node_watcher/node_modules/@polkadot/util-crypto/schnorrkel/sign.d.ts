import { Keypair } from '../types';
import '../polyfill';
/**
 * @name schnorrkelSign
 * @description Returns message signature of `message`, using the supplied pair
 */
export default function schnorrkelSign(message: Uint8Array | string, { publicKey, secretKey }: Partial<Keypair>): Uint8Array;
