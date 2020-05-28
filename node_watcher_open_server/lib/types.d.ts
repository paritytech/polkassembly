import { Prisma } from './generated/prisma-client';
export interface Context {
    prisma: Prisma;
}
export declare type Selectors = Record<string, any>;
