import { KeyringPair, KeyringOptions } from './types';
export interface TestKeyringMap {
    [index: string]: KeyringPair;
}
export default function testKeyringPairs(options?: KeyringOptions, isDerived?: boolean): TestKeyringMap;
