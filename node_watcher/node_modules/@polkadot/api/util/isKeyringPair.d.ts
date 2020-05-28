import { AccountId, Address } from '@polkadot/types/interfaces';
import { IKeyringPair } from '@polkadot/types/types';
export default function isKeyringPair(account: string | IKeyringPair | AccountId | Address): account is IKeyringPair;
