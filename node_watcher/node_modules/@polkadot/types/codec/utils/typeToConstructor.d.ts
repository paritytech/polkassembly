import { Codec, Constructor, InterfaceTypes, Registry } from '../../types';
export default function typeToConstructor<T = Codec>(registry: Registry, type: keyof InterfaceTypes | Constructor<T>): Constructor<T>;
