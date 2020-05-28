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
var util_1 = require("../../utils/util");
var chalk_1 = require("chalk");
var fs = require("fs-extra");
var path = require("path");
var graphql_1 = require("graphql");
var prisma_client_lib_1 = require("prisma-client-lib");
var npm_run_1 = require("npm-run");
var child_process_1 = require("child_process");
var prisma_generate_schema_1 = require("prisma-generate-schema");
var prisma_datamodel_1 = require("prisma-datamodel");
var printSchema_1 = require("../deploy/printSchema");
var debug = require('debug')('generate');
var GenerateCommand = /** @class */ (function (_super) {
    __extends(GenerateCommand, _super);
    function GenerateCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GenerateCommand.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            var envFile, before, schemaString, serviceName, stageName, token, cluster, workspace, databaseType, _i, _a, _b, generator, output, resolvedOutput, isMongo, internalTypes, generators;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.flags = this.flags || {};
                        envFile = this.flags['env-file'];
                        return [4 /*yield*/, this.definition.load(this.flags, envFile)];
                    case 1:
                        _c.sent();
                        if (!(this.definition.definition &&
                            this.definition.definition.generate &&
                            Array.isArray(this.definition.definition.generate) &&
                            this.definition.definition.generate.length > 0)) return [3 /*break*/, 24];
                        before = Date.now();
                        schemaString = void 0;
                        if (!this.flags.endpoint) return [3 /*break*/, 5];
                        this.out.action.start("Downloading schema");
                        serviceName = this.definition.service;
                        stageName = this.definition.stage;
                        token = this.definition.getToken(serviceName, stageName);
                        return [4 /*yield*/, this.definition.getCluster()];
                    case 2:
                        cluster = _c.sent();
                        workspace = this.definition.getWorkspace();
                        this.env.setActiveCluster(cluster);
                        return [4 /*yield*/, this.client.initClusterClient(cluster, serviceName, stageName, workspace)];
                    case 3:
                        _c.sent();
                        return [4 /*yield*/, printSchema_1.fetchAndPrintSchema(this.client, serviceName, stageName, token, workspace)];
                    case 4:
                        schemaString = _c.sent();
                        return [3 /*break*/, 8];
                    case 5:
                        this.out.action.start("Generating schema");
                        if (!!this.definition.definition.datamodel) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.out.error("The property " + chalk_1.default.bold('datamodel') + " is missing in your prisma.yml")];
                    case 6:
                        _c.sent();
                        _c.label = 7;
                    case 7:
                        databaseType = this.definition.definition.databaseType === 'document'
                            ? prisma_datamodel_1.DatabaseType.mongo
                            : prisma_datamodel_1.DatabaseType.postgres;
                        schemaString = prisma_generate_schema_1.default(this.definition.typesString, databaseType);
                        _c.label = 8;
                    case 8:
                        if (!!schemaString) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.out.error(chalk_1.default.red("Failed to download/generate the schema"))];
                    case 9:
                        _c.sent();
                        _c.label = 10;
                    case 10:
                        this.out.action.stop(util_1.prettyTime(Date.now() - before));
                        _i = 0, _a = this.definition.definition
                            .generate;
                        _c.label = 11;
                    case 11:
                        if (!(_i < _a.length)) return [3 /*break*/, 24];
                        _b = _a[_i], generator = _b.generator, output = _b.output;
                        resolvedOutput = output.startsWith('/')
                            ? output
                            : path.join(this.config.definitionDir, output);
                        if (!(generator === 'graphql-schema')) return [3 /*break*/, 13];
                        if (!resolvedOutput.endsWith('.graphql')) {
                            throw new Error("Error: " + chalk_1.default.bold('output') + " for generator " + chalk_1.default.bold('graphql-schema') + " should be a " + chalk_1.default.green(chalk_1.default.bold('.graphql')) + "-file. Please change the " + chalk_1.default.bold('output') + " property for this generator in " + chalk_1.default.green(chalk_1.default.bold('prisma.yml')));
                        }
                        fs.mkdirpSync(path.resolve(resolvedOutput, '../'));
                        return [4 /*yield*/, this.generateSchema(resolvedOutput, schemaString)];
                    case 12:
                        _c.sent();
                        return [3 /*break*/, 14];
                    case 13:
                        fs.mkdirpSync(resolvedOutput);
                        _c.label = 14;
                    case 14:
                        isMongo = this.definition.definition &&
                            this.definition.definition.databaseType === 'document';
                        internalTypes = prisma_generate_schema_1.parseInternalTypes(this.definition.typesString, isMongo ? prisma_datamodel_1.DatabaseType.mongo : prisma_datamodel_1.DatabaseType.postgres).types;
                        if (!(generator === 'typescript-client')) return [3 /*break*/, 16];
                        return [4 /*yield*/, this.generateTypescript(resolvedOutput, schemaString, internalTypes)];
                    case 15:
                        _c.sent();
                        _c.label = 16;
                    case 16:
                        if (!(generator === 'javascript-client')) return [3 /*break*/, 18];
                        return [4 /*yield*/, this.generateJavascript(resolvedOutput, schemaString, internalTypes)];
                    case 17:
                        _c.sent();
                        _c.label = 18;
                    case 18:
                        if (!(generator === 'go-client')) return [3 /*break*/, 20];
                        return [4 /*yield*/, this.generateGo(resolvedOutput, schemaString, internalTypes)];
                    case 19:
                        _c.sent();
                        _c.label = 20;
                    case 20:
                        if (!(generator === 'flow-client')) return [3 /*break*/, 22];
                        return [4 /*yield*/, this.generateFlow(resolvedOutput, schemaString, internalTypes)];
                    case 21:
                        _c.sent();
                        _c.label = 22;
                    case 22:
                        generators = [
                            'graphql-schema',
                            'typescript-client',
                            'javascript-client',
                            'go-client',
                            'flow-client',
                        ];
                        if (!generators.includes(generator)) {
                            this.out.error("Please choose one of the supported generators. Possible generators: " + generators
                                .map(function (g) { return "" + g; })
                                .join(", "));
                        }
                        _c.label = 23;
                    case 23:
                        _i++;
                        return [3 /*break*/, 11];
                    case 24: return [2 /*return*/];
                }
            });
        });
    };
    GenerateCommand.prototype.generateSchema = function (output, schemaString) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                fs.writeFileSync(output, schemaString);
                this.out.log("Saving Prisma GraphQL schema (SDL) at " + output);
                return [2 /*return*/];
            });
        });
    };
    GenerateCommand.prototype.generateTypescript = function (output, schemaString, internalTypes) {
        return __awaiter(this, void 0, void 0, function () {
            var schema, generator, endpoint, secret, options, code, typeDefs;
            return __generator(this, function (_a) {
                schema = graphql_1.buildSchema(schemaString);
                generator = new prisma_client_lib_1.TypescriptGenerator({ schema: schema, internalTypes: internalTypes });
                endpoint = prisma_client_lib_1.TypescriptGenerator.replaceEnv(this.definition.rawJson.endpoint);
                secret = this.definition.rawJson.secret
                    ? prisma_client_lib_1.TypescriptGenerator.replaceEnv(this.definition.rawJson.secret)
                    : null;
                options = { endpoint: endpoint };
                if (secret) {
                    options.secret = secret;
                }
                code = generator.render(options);
                fs.writeFileSync(path.join(output, 'index.ts'), code);
                typeDefs = generator.renderTypedefs();
                fs.writeFileSync(path.join(output, 'prisma-schema.ts'), typeDefs);
                this.out.log("Saving Prisma Client (TypeScript) at " + output);
                return [2 /*return*/];
            });
        });
    };
    GenerateCommand.prototype.generateJavascript = function (output, schemaString, internalTypes) {
        return __awaiter(this, void 0, void 0, function () {
            var schema, generator, generatorTS, endpoint, secret, options, javascript, typescript, typeDefs;
            return __generator(this, function (_a) {
                schema = graphql_1.buildSchema(schemaString);
                generator = new prisma_client_lib_1.JavascriptGenerator({ schema: schema, internalTypes: internalTypes });
                generatorTS = new prisma_client_lib_1.TypescriptDefinitionsGenerator({
                    schema: schema,
                    internalTypes: internalTypes,
                });
                endpoint = prisma_client_lib_1.JavascriptGenerator.replaceEnv(this.definition.rawJson.endpoint);
                secret = this.definition.rawJson.secret
                    ? prisma_client_lib_1.JavascriptGenerator.replaceEnv(this.definition.rawJson.secret)
                    : null;
                options = { endpoint: endpoint };
                if (secret) {
                    options.secret = secret;
                }
                javascript = generator.renderJavascript(options);
                fs.writeFileSync(path.join(output, 'index.js'), javascript);
                typescript = generatorTS.render(options);
                fs.writeFileSync(path.join(output, 'index.d.ts'), typescript);
                typeDefs = generatorTS
                    .renderTypedefs()
                    .replace('export const typeDefs = ', '');
                fs.writeFileSync(path.join(output, 'prisma-schema.js'), "module.exports = {\n        typeDefs: " + typeDefs + "\n      }\n    ");
                this.out.log("Saving Prisma Client (JavaScript) at " + output);
                return [2 /*return*/];
            });
        });
    };
    GenerateCommand.prototype.generateGo = function (output, schemaString, internalTypes) {
        return __awaiter(this, void 0, void 0, function () {
            var schema, generator, endpoint, secret, options, goCode, isPackaged, spawnPath;
            return __generator(this, function (_a) {
                schema = graphql_1.buildSchema(schemaString);
                generator = new prisma_client_lib_1.GoGenerator({ schema: schema, internalTypes: internalTypes });
                endpoint = prisma_client_lib_1.GoGenerator.replaceEnv(this.definition.rawJson.endpoint);
                secret = this.definition.rawJson.secret
                    ? prisma_client_lib_1.GoGenerator.replaceEnv(this.definition.rawJson.secret)
                    : null;
                options = { endpoint: endpoint };
                if (secret) {
                    options.secret = secret;
                }
                goCode = generator.render(options);
                fs.writeFileSync(path.join(output, 'prisma.go'), goCode);
                this.out.log("Saving Prisma Client (Go) at " + output);
                isPackaged = fs.existsSync('/snapshot');
                debug({ isPackaged: isPackaged });
                spawnPath = isPackaged ? child_process_1.spawnSync : npm_run_1.spawnSync;
                spawnPath('go', ['fmt', path.join(output, 'prisma.go')]);
                return [2 /*return*/];
            });
        });
    };
    GenerateCommand.prototype.generateFlow = function (output, schemaString, internalTypes) {
        return __awaiter(this, void 0, void 0, function () {
            var schema, generator, endpoint, secret, options, flowCode, typeDefs;
            return __generator(this, function (_a) {
                schema = graphql_1.buildSchema(schemaString);
                generator = new prisma_client_lib_1.FlowGenerator({ schema: schema, internalTypes: internalTypes });
                endpoint = prisma_client_lib_1.FlowGenerator.replaceEnv(this.definition.rawJson.endpoint);
                secret = this.definition.rawJson.secret
                    ? prisma_client_lib_1.FlowGenerator.replaceEnv(this.definition.rawJson.secret)
                    : null;
                options = { endpoint: endpoint };
                if (secret) {
                    options.secret = secret;
                }
                flowCode = generator.render(options);
                fs.writeFileSync(path.join(output, 'index.js'), flowCode);
                typeDefs = generator.renderTypedefs();
                fs.writeFileSync(path.join(output, 'prisma-schema.js'), typeDefs);
                this.out.log("Saving Prisma Client (Flow) at " + output);
                return [2 /*return*/];
            });
        });
    };
    GenerateCommand.topic = 'generate';
    GenerateCommand.description = 'Generate a schema or Prisma Bindings';
    GenerateCommand.flags = (_a = {},
        _a['env-file'] = prisma_cli_engine_1.flags.string({
            description: 'Path to .env file to inject env vars',
            char: 'e',
        }),
        _a['project'] = prisma_cli_engine_1.flags.string({
            description: 'Path to Prisma definition file',
            char: 'p',
        }),
        _a['endpoint'] = prisma_cli_engine_1.flags.boolean({
            description: 'Use a specific endpoint for schema generation or pick endpoint from prisma.yml',
            required: false,
        }),
        _a);
    return GenerateCommand;
}(prisma_cli_engine_1.Command));
exports.default = GenerateCommand;
//# sourceMappingURL=generate.js.map