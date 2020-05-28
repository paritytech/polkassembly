import { Observable } from 'rxjs';
export declare type DrrResult = <T>(source$: Observable<T>) => Observable<T>;
interface Options {
    skipChange?: boolean;
    skipTimeout?: boolean;
}
/**
 * Shorthand for distinctUntilChanged(), publishReplay(1) and refCount().
 *
 * @ignore
 * @internal
 */
export declare const drr: ({ skipChange, skipTimeout }?: Options) => DrrResult;
export {};
