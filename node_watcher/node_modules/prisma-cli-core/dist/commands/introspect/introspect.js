"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var prisma_cli_engine_1 = require("prisma-cli-engine");
var EndpointDialog_1 = require("../../utils/EndpointDialog");
var prisma_db_introspection_1 = require("prisma-db-introspection");
var path = require("path");
var fs = require("fs");
var util_1 = require("../../utils/util");
var chalk_1 = require("chalk");
var prisma_datamodel_1 = require("prisma-datamodel");
var util_2 = require("./util");
var IntrospectCommand = /** @class */ (function (_super) {
    __extends(IntrospectCommand, _super);
    function IntrospectCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntrospectCommand.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sdl, connectorData, before, _a, newDatamodelSdl, numTables, referenceDatamodelExists, fileName, andDatamodelText;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        sdl = this.flags.sdl;
                        return [4 /*yield*/, this.getConnectorWithDatabase()
                            /**
                             * Introspect the database
                             */
                        ];
                    case 1:
                        connectorData = _b.sent();
                        before = Date.now();
                        if (!sdl) {
                            this.out.action.start("Introspecting database " + chalk_1.default.bold(connectorData.databaseName));
                        }
                        return [4 /*yield*/, this.introspect(connectorData)];
                    case 2:
                        _a = _b.sent(), newDatamodelSdl = _a.sdl, numTables = _a.numTables, referenceDatamodelExists = _a.referenceDatamodelExists;
                        if (!sdl) {
                            this.out.action.stop(util_1.prettyTime(Date.now() - before));
                        }
                        if (!!sdl) return [3 /*break*/, 5];
                        fileName = this.writeDatamodel(newDatamodelSdl);
                        this.out.log("Created datamodel definition based on " + numTables + " database tables.");
                        andDatamodelText = referenceDatamodelExists
                            ? ' and the existing datamodel'
                            : '';
                        this.out.log(chalk_1.default.bold('Created 1 new file:') + "    GraphQL SDL-based datamodel (derived from existing database" + andDatamodelText + ")\n\n  " + chalk_1.default.cyan(fileName) + "\n");
                        if (!(this.definition.definition &&
                            !this.definition.definition.datamodel)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.definition.load(this.flags)];
                    case 3:
                        _b.sent();
                        this.definition.addDatamodel(fileName);
                        this.out.log("Added " + chalk_1.default.bold("datamodel: " + fileName) + " to prisma.yml");
                        _b.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.out.log(newDatamodelSdl);
                        _b.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    IntrospectCommand.prototype.getExistingDatamodel = function (databaseType) {
        if (this.definition.typesString) {
            var ParserInstance = prisma_datamodel_1.DefaultParser.create(databaseType);
            return ParserInstance.parseFromSchemaString(this.definition.typesString);
        }
        return null;
    };
    IntrospectCommand.prototype.introspect = function (_a) {
        var connector = _a.connector, disconnect = _a.disconnect, databaseType = _a.databaseType, databaseName = _a.databaseName;
        return __awaiter(this, void 0, void 0, function () {
            var existingDatamodel, introspection, sdl, _b, renderer, renderedSdl, numTables;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        existingDatamodel = this.getExistingDatamodel(databaseType);
                        return [4 /*yield*/, connector.introspect(databaseName)];
                    case 1:
                        introspection = _c.sent();
                        if (!existingDatamodel) return [3 /*break*/, 3];
                        return [4 /*yield*/, introspection.getNormalizedDatamodel(existingDatamodel)];
                    case 2:
                        _b = _c.sent();
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, introspection.getNormalizedDatamodel()];
                    case 4:
                        _b = _c.sent();
                        _c.label = 5;
                    case 5:
                        sdl = _b;
                        renderer = prisma_datamodel_1.DefaultRenderer.create(introspection.databaseType, true);
                        renderedSdl = renderer.render(sdl);
                        // disconnect from database
                        return [4 /*yield*/, disconnect()];
                    case 6:
                        // disconnect from database
                        _c.sent();
                        numTables = sdl.types.length;
                        if (numTables === 0) {
                            this.out.log(chalk_1.default.red("\n" + chalk_1.default.bold('Error: ') + "The provided database doesn't contain any tables. Please provide another database."));
                            this.out.exit(1);
                        }
                        return [2 /*return*/, {
                                sdl: renderedSdl,
                                numTables: numTables,
                                referenceDatamodelExists: Boolean(existingDatamodel),
                            }];
                }
            });
        });
    };
    IntrospectCommand.prototype.writeDatamodel = function (renderedSdl) {
        var fileName = "datamodel-" + new Date().getTime() + ".prisma";
        var fullFileName = path.join(this.config.definitionDir, fileName);
        fs.writeFileSync(fullFileName, renderedSdl);
        return fileName;
    };
    IntrospectCommand.prototype.hasExecuteRaw = function () {
        return __awaiter(this, void 0, void 0, function () {
            var service, stage, token, workspace, cluster, introspection, introspectionString, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        return [4 /*yield*/, this.definition.load(this.flags)];
                    case 1:
                        _a.sent();
                        service = this.definition.service;
                        stage = this.definition.stage;
                        token = this.definition.getToken(service, stage);
                        workspace = this.definition.getWorkspace();
                        return [4 /*yield*/, this.definition.getCluster()];
                    case 2:
                        cluster = _a.sent();
                        this.env.setActiveCluster(cluster);
                        return [4 /*yield*/, this.client.initClusterClient(cluster, service, stage, workspace)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.client.introspect(service, stage, token, workspace)];
                    case 4:
                        introspection = _a.sent();
                        introspectionString = JSON.stringify(introspection);
                        return [2 /*return*/, introspectionString.includes('executeRaw')];
                    case 5:
                        e_1 = _a.sent();
                        return [2 /*return*/, false];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * This method makes sure, that a concrete database to introspect is selected
     */
    IntrospectCommand.prototype.getConnectorWithDatabase = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, endpointDialog;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getConnector()];
                    case 1:
                        data = _a.sent();
                        endpointDialog = new EndpointDialog_1.EndpointDialog({
                            out: this.out,
                            client: this.client,
                            env: this.env,
                            config: this.config,
                            definition: this.definition,
                            shouldAskForGenerator: false,
                        });
                        return [2 /*return*/, util_2.getConnectorWithDatabase(data, endpointDialog)];
                }
            });
        });
    };
    IntrospectCommand.prototype.getConnector = function () {
        return __awaiter(this, void 0, void 0, function () {
            var hasExecuteRaw, credentials, interactive, _a, connector_1, disconnect_1, client, connector, disconnect, databaseDivider, databaseName;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.hasExecuteRaw()];
                    case 1:
                        hasExecuteRaw = _b.sent();
                        credentials = this.getCredentialsByFlags();
                        interactive = false;
                        if (!!credentials) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getCredentialsInteractively(hasExecuteRaw)];
                    case 2:
                        credentials = _b.sent();
                        interactive = true;
                        if (!hasExecuteRaw && this.flags.sdl) {
                            throw new Error("When using the --sdl flag, either executeRaw or credentials must be available");
                        }
                        _b.label = 3;
                    case 3:
                        if (!credentials) return [3 /*break*/, 5];
                        return [4 /*yield*/, util_2.getConnectedConnectorFromCredentials(credentials)];
                    case 4:
                        _a = _b.sent(), connector_1 = _a.connector, disconnect_1 = _a.disconnect;
                        return [2 /*return*/, {
                                connector: connector_1,
                                disconnect: disconnect_1,
                                databaseType: credentials.type,
                                databaseName: credentials.schema,
                                interactive: interactive,
                            }];
                    case 5:
                        if (!hasExecuteRaw) {
                            throw new Error("This must not happen. No source for the introspection could be determined. Please report this issue to Prisma.");
                        }
                        client = new prisma_db_introspection_1.PrismaDBClient(this.definition);
                        return [4 /*yield*/, client.connect()];
                    case 6:
                        _b.sent();
                        connector = prisma_db_introspection_1.Connectors.create(client.databaseType, client);
                        disconnect = function () { return client.end(); };
                        databaseDivider = client.databaseType === prisma_datamodel_1.DatabaseType.postgres ? '$' : '@';
                        databaseName = "" + this.definition.service + databaseDivider + this.definition.stage;
                        return [2 /*return*/, {
                                connector: connector,
                                disconnect: disconnect,
                                databaseType: client.databaseType,
                                databaseName: databaseName,
                                interactive: false,
                            }];
                }
            });
        });
    };
    IntrospectCommand.prototype.getCredentialsByFlags = function () {
        var requiredPostgresFlags = ['pg-host', 'pg-user', 'pg-password', 'pg-db'];
        var requiredMysqlFlags = ['mysql-host', 'mysql-user', 'mysql-password'];
        var flags = this.getSanitizedFlags();
        var flagsKeys = Object.keys(flags);
        var mysqlFlags = flagsKeys.filter(function (f) { return requiredMysqlFlags.includes(f); });
        var postgresFlags = flagsKeys.filter(function (f) {
            return requiredPostgresFlags.includes(f);
        });
        if (mysqlFlags.length > 0 && postgresFlags.length > 0) {
            throw new Error("You can't provide both MySQL and Postgres connection flags. Please provide either of both.");
        }
        if (mysqlFlags.length > 0 &&
            mysqlFlags.length < requiredMysqlFlags.length) {
            this.handleMissingArgs(requiredMysqlFlags, mysqlFlags, 'mysql');
        }
        if (postgresFlags.length > 0 &&
            postgresFlags.length < requiredPostgresFlags.length) {
            this.handleMissingArgs(requiredPostgresFlags, postgresFlags, 'pg');
        }
        if (mysqlFlags.length >= requiredMysqlFlags.length) {
            return {
                host: flags['mysql-host'],
                port: parseInt(flags['mysql-port'], 10),
                user: flags['mysql-user'],
                password: flags['mysql-password'],
                schema: flags['mysql-db'],
                type: prisma_datamodel_1.DatabaseType.mysql,
            };
        }
        if (postgresFlags.length >= requiredPostgresFlags.length) {
            return {
                host: flags['pg-host'],
                user: flags['pg-user'],
                password: flags['pg-password'],
                database: flags['pg-db'],
                port: parseInt(flags['pg-port'], 10),
                schema: flags['pg-schema'],
                type: prisma_datamodel_1.DatabaseType.postgres,
            };
        }
        if (flags['mongo-uri']) {
            var uri = flags['mongo-uri'];
            var database = flags['mongo-db']; // this is optional and can be undefined
            var credentials = util_2.populateMongoDatabase({ uri: uri, database: database });
            return {
                uri: util_2.sanitizeMongoUri(credentials.uri),
                schema: credentials.database,
                type: prisma_datamodel_1.DatabaseType.mongo,
            };
        }
        return null;
    };
    IntrospectCommand.prototype.getCredentialsInteractively = function (hasExecuteRaw) {
        return __awaiter(this, void 0, void 0, function () {
            var endpointDialog;
            return __generator(this, function (_a) {
                if (this.flags.interactive || !hasExecuteRaw) {
                    endpointDialog = new EndpointDialog_1.EndpointDialog({
                        out: this.out,
                        client: this.client,
                        env: this.env,
                        config: this.config,
                        definition: this.definition,
                        shouldAskForGenerator: false,
                    });
                    return [2 /*return*/, endpointDialog.getDatabase(true)];
                }
                return [2 /*return*/, null];
            });
        });
    };
    IntrospectCommand.prototype.handleMissingArgs = function (requiredArgs, providedArgs, prefix) {
        var missingArgs = requiredArgs.filter(function (arg) { return !providedArgs.some(function (provided) { return arg === provided; }); });
        throw new Error("If you provide one of the " + prefix + "- arguments, you need to provide all of them. The arguments " + missingArgs.join(', ') + " are missing.");
    };
    IntrospectCommand.topic = 'introspect';
    IntrospectCommand.description = 'Introspect database schema(s) of service';
    IntrospectCommand.printVersionSyncWarning = true;
    IntrospectCommand.flags = (_a = {
            interactive: prisma_cli_engine_1.flags.boolean({
                char: 'i',
                description: 'Interactive mode',
            })
        },
        _a['env-file'] = prisma_cli_engine_1.flags.string({
            description: 'Path to .env file to inject env vars',
            char: 'e',
        }),
        _a['project'] = prisma_cli_engine_1.flags.string({
            description: 'Path to Prisma definition file',
            char: 'p',
        }),
        /**
         * Postgres Params
         */
        _a['pg-host'] = prisma_cli_engine_1.flags.string({
            description: 'Name of the Postgres host',
        }),
        _a['pg-port'] = prisma_cli_engine_1.flags.string({
            description: 'The Postgres port. Default: 5432',
            defaultValue: '5432',
        }),
        _a['pg-user'] = prisma_cli_engine_1.flags.string({
            description: 'The Postgres user',
        }),
        _a['pg-password'] = prisma_cli_engine_1.flags.string({
            description: 'The Postgres password',
        }),
        _a['pg-db'] = prisma_cli_engine_1.flags.string({
            description: 'The Postgres database',
        }),
        _a['pg-ssl'] = prisma_cli_engine_1.flags.boolean({
            description: 'Enable ssl for postgres',
        }),
        _a['pg-schema'] = prisma_cli_engine_1.flags.string({
            description: 'Name of the Postgres schema',
        }),
        /**
         * MySQL Params
         */
        _a['mysql-host'] = prisma_cli_engine_1.flags.string({
            description: 'Name of the MySQL host',
        }),
        _a['mysql-port'] = prisma_cli_engine_1.flags.string({
            description: 'The MySQL port. Default: 3306',
            defaultValue: '3306',
        }),
        _a['mysql-user'] = prisma_cli_engine_1.flags.string({
            description: 'The MySQL user',
        }),
        _a['mysql-password'] = prisma_cli_engine_1.flags.string({
            description: 'The MySQL password',
        }),
        _a['mysql-db'] = prisma_cli_engine_1.flags.string({
            description: 'The MySQL database',
        }),
        /**
         * Mongo Params
         */
        _a['mongo-uri'] = prisma_cli_engine_1.flags.string({
            description: 'Mongo connection string',
        }),
        _a['mongo-db'] = prisma_cli_engine_1.flags.string({
            description: 'Mongo database',
        }),
        _a['sdl'] = prisma_cli_engine_1.flags.boolean({
            description: 'Omit any CLI output and just print the resulting datamodel. Requires an existing Prisma project with executeRaw. Useful for scripting',
        }),
        _a);
    IntrospectCommand.hidden = false;
    return IntrospectCommand;
}(prisma_cli_engine_1.Command));
exports.default = IntrospectCommand;
//# sourceMappingURL=introspect.js.map