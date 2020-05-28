import { Keypair } from '../types';
import '../polyfill';
export default function deriveHard(keypair: Keypair, chainCode: Uint8Array): Keypair;
