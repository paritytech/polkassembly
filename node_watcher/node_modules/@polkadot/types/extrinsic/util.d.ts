import { SignOptions } from '@polkadot/keyring/types';
import { IKeyringPair } from '../types';
export declare function sign(signerPair: IKeyringPair, u8a: Uint8Array, options?: SignOptions): Uint8Array;
