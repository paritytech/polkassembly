import { Codec } from '@polkadot/types/types';
import Vec from '@polkadot/types/codec/Vec';
export interface MetadataInterface<Modules extends Codec> extends Codec {
    modules: Vec<Modules>;
}
