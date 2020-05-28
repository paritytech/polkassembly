import { Command, Flags } from 'prisma-cli-engine';
export default class Deploy extends Command {
    static topic: string;
    static description: string;
    static group: string;
    static printVersionSyncWarning: boolean;
    static help: string;
    static flags: Flags;
    private showedHooks;
    run(): Promise<void>;
    private projectExists;
    private addProject;
    private deploy;
    private printHooks;
    private getProgress;
    private seed;
    private printResult;
    private printEndpoints;
}
export declare function isValidProjectName(projectName: string): boolean;
