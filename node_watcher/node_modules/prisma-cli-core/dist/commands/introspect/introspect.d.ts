import { Command, Flags } from 'prisma-cli-engine';
import { DatabaseCredentials } from '../../utils/EndpointDialog';
import { DatabaseType, ISDL } from 'prisma-datamodel';
import { ConnectorData, IntermediateConnectorData } from './util';
export default class IntrospectCommand extends Command {
    static topic: string;
    static description: string;
    static printVersionSyncWarning: boolean;
    static flags: Flags;
    static hidden: boolean;
    run(): Promise<void>;
    getExistingDatamodel(databaseType: DatabaseType): ISDL | null;
    introspect({ connector, disconnect, databaseType, databaseName, }: ConnectorData): Promise<{
        sdl: string;
        numTables: number;
        referenceDatamodelExists: boolean;
    }>;
    writeDatamodel(renderedSdl: string): string;
    hasExecuteRaw(): Promise<boolean>;
    /**
     * This method makes sure, that a concrete database to introspect is selected
     */
    getConnectorWithDatabase(): Promise<ConnectorData>;
    getConnector(): Promise<IntermediateConnectorData>;
    getCredentialsByFlags(): DatabaseCredentials | null;
    getCredentialsInteractively(hasExecuteRaw: boolean): Promise<DatabaseCredentials | null>;
    handleMissingArgs(requiredArgs: string[], providedArgs: string[], prefix: string): void;
}
