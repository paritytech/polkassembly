import { PairInfo } from './types';
export default function encode({ publicKey, secretKey }: PairInfo, passphrase?: string): Uint8Array;
