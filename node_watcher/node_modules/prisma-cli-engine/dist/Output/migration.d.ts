import { Output } from './index';
import { SchemaError, MigrationStep } from '../Client/types';
interface StepWithName {
    name: string;
}
export declare class MigrationPrinter {
    out: Output;
    constructor(out: Output);
    printMessages(steps: MigrationStep[]): void;
    printTypes(allSteps: MigrationStep[]): void;
    printStep: (step: MigrationStep) => void;
    getUpdateFieldActions(step: MigrationStep): string;
    printType(typeName: string, isRequired: boolean, isList?: boolean): string;
    printEnums(steps: MigrationStep[]): void;
    printRelations(steps: MigrationStep[]): void;
    printRelationName(step: StepWithName): void;
    printEnumName(step: StepWithName): void;
    printErrors(errors: SchemaError[]): void;
    printWarnings(warnings: SchemaError[]): void;
    private printMigrationMessage;
    private getType;
    private getSymbol;
}
export {};
