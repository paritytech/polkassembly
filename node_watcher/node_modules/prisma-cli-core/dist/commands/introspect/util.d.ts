import { DatabaseCredentials, EndpointDialog } from '../../utils/EndpointDialog';
import { DatabaseType } from 'prisma-datamodel';
import { IConnector } from 'prisma-db-introspection/dist/common/connector';
export interface ConnectorAndDisconnect {
    /**
     * The introspection connector instance
     */
    connector: IConnector;
    /**
     * Callback to let the client disconnect
     */
    disconnect: () => Promise<void>;
}
/**
 * This data is needed to perform the introspection
 */
export interface ConnectorData extends ConnectorAndDisconnect {
    /**
     * The concrete database type used by the Connector that is included in this object
     */
    databaseType: DatabaseType;
    /**
     * The database name either directly provided by the user or chosen in the select schema dialog
     */
    databaseName: string;
}
/**
 * As we use a separate function to guarantee for the databaseName, it's optional ehre
 */
export interface IntermediateConnectorData extends ConnectorAndDisconnect {
    databaseType: DatabaseType;
    databaseName?: string;
    interactive: boolean;
}
export declare function getConnectedConnectorFromCredentials(credentials: DatabaseCredentials): Promise<ConnectorAndDisconnect>;
export declare function getConnectorWithDatabase(connectorData: IntermediateConnectorData, endpointDialog: EndpointDialog): Promise<ConnectorData>;
export declare function sanitizeMongoUri(mongoUri: string): string;
export declare function populateMongoDatabase({ uri, database, }: {
    uri: string;
    database?: string;
}): {
    uri: string;
    database: string;
};
export declare function hasAuthSource(uri: string): boolean;
