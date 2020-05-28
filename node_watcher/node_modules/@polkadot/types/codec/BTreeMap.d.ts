import { Constructor, Codec, InterfaceTypes } from '../types';
import CodecMap from './Map';
export default class BTreeMap<K extends Codec = Codec, V extends Codec = Codec> extends CodecMap<K, V> {
    static with<K extends Codec, V extends Codec>(keyType: Constructor<K> | keyof InterfaceTypes, valType: Constructor<V> | keyof InterfaceTypes): Constructor<CodecMap<K, V>>;
}
