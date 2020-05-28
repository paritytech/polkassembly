import { Command, Flags } from 'prisma-cli-engine';
export default class Seed extends Command {
    static topic: string;
    static description: string;
    static printVersionSyncWarning: boolean;
    static flags: Flags;
    run(): Promise<void>;
}
