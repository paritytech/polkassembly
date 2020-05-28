import DeriveJunction from './DeriveJunction';
export interface ExtractResult {
    parts: null | string[];
    path: DeriveJunction[];
}
/**
 * @description Extract derivation juntions from the supplied path
 */
export default function keyExtractPath(derivePath: string): ExtractResult;
