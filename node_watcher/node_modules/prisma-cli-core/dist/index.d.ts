import Deploy from './commands/deploy/deploy';
import Init from './commands/init/init';
import Info from './commands/info/index';
import Admin from './commands/admin/admin';
import Playground from './commands/playground/index';
import List from './commands/list/index';
import Account from './commands/account/account';
import Reset from './commands/reset/reset';
import Import from './commands/import/index';
import Export from './commands/export/index';
import Token from './commands/token/token';
import Login from './commands/login/login';
import Logout from './commands/logout/logout';
import Delete from './commands/delete/index';
import InitPrisma from './commands/init-prisma';
import IntrospectCommand from './commands/introspect/introspect';
import Seed from './commands/seed/seed';
import Generate from './commands/generate/generate';
export declare const groups: {
    key: string;
    name: string;
}[];
export declare const topics: ({
    name: string;
    description: string;
    group: string;
} | {
    name: string;
    description: string;
    group?: undefined;
})[];
export declare const commands: (typeof Init | typeof Account)[];
export { Deploy, Init, Info, Admin, Playground, List, Seed, Delete, Reset, Account, Import, Export, Token, Login, Logout, InitPrisma, IntrospectCommand, Generate, };
