import { ToBn } from '../types';
import BN from 'bn.js';
export default function formatElapsed<ExtToBn extends ToBn>(now?: Date | null, value?: BN | ExtToBn | Date | number | null): string;
