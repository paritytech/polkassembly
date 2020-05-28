import { Command, Flags } from 'prisma-cli-engine';
export default class Admin extends Command {
    static topic: string;
    static description: string;
    static flags: Flags;
    run(): Promise<void>;
    normalizeVersion(version: string): string;
}
