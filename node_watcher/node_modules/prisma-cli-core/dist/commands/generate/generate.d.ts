import { Command, Flags } from 'prisma-cli-engine';
import { IGQLType } from 'prisma-datamodel';
export default class GenerateCommand extends Command {
    static topic: string;
    static description: string;
    static flags: Flags;
    run(): Promise<void>;
    generateSchema(output: string, schemaString: string): Promise<void>;
    generateTypescript(output: string, schemaString: string, internalTypes: IGQLType[]): Promise<void>;
    generateJavascript(output: string, schemaString: string, internalTypes: IGQLType[]): Promise<void>;
    generateGo(output: string, schemaString: string, internalTypes: IGQLType[]): Promise<void>;
    generateFlow(output: string, schemaString: string, internalTypes: IGQLType[]): Promise<void>;
}
