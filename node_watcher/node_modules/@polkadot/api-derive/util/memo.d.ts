import { Observable } from 'rxjs';
declare type ObsFn<T> = (...params: any[]) => Observable<T>;
/** @internal */
export declare function memo<T>(inner: ObsFn<T>): ObsFn<T>;
export {};
