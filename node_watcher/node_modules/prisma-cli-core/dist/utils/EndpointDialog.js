"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var prisma_cli_engine_1 = require("prisma-cli-engine");
var inquirer = require("inquirer");
var chalk_1 = require("chalk");
var prisma_yml_1 = require("prisma-yml");
var util_1 = require("./util");
var sillyname = require("sillyname");
var path = require("path");
var fs = require("fs");
var mongodb_1 = require("mongodb");
var yaml = require("js-yaml");
var prisma_datamodel_1 = require("prisma-datamodel");
var util_2 = require("../commands/introspect/util");
var debug = require('debug')('endpoint-dialog');
var encodeMap = {
    'prisma-eu1': 'demo-eu1',
    'prisma-us1': 'demo-us1',
};
var decodeMap = {
    'demo-eu1': 'prisma-eu1',
    'demo-us1': 'prisma-us1',
};
var defaultPorts = {
    postgres: 5432,
    mysql: 3306,
    mongo: 27017,
};
var databaseServiceDefinitions = {
    postgres: "\n  postgres:\n    image: postgres\n    restart: always\n    # Uncomment the next two lines to connect to your your database from outside the Docker environment, e.g. using a database GUI like Postico\n    # ports:\n    # - \"5432:5432\"\n    environment:\n      POSTGRES_USER: prisma\n      POSTGRES_PASSWORD: prisma\n    volumes:\n      - postgres:/var/lib/postgresql/data\nvolumes:\n  postgres:\n",
    mysql: "\n  mysql:\n    image: mysql:5.7\n    restart: always\n    # Uncomment the next two lines to connect to your your database from outside the Docker environment, e.g. using a database GUI like Workbench\n    # ports:\n    # - \"3306:3306\"\n    environment:\n      MYSQL_ROOT_PASSWORD: prisma\n    volumes:\n      - mysql:/var/lib/mysql\nvolumes:\n  mysql:\n",
    mongo: "\n  mongo:\n    image: mongo:3.6\n    restart: always\n    # Uncomment the next two lines to connect to your your database from outside the Docker environment, e.g. using a database GUI like Compass\n    # ports:\n    # - \"27017:27017\"\n    environment:\n      MONGO_INITDB_ROOT_USERNAME: prisma\n      MONGO_INITDB_ROOT_PASSWORD: prisma\n    ports:\n      - \"27017:27017\"\n    volumes:\n      - mongo:/var/lib/mongo\nvolumes:\n  mongo:",
};
var EndpointDialog = /** @class */ (function () {
    function EndpointDialog(_a) {
        var _this = this;
        var out = _a.out, client = _a.client, env = _a.env, config = _a.config, definition = _a.definition, shouldAskForGenerator = _a.shouldAskForGenerator;
        this.getClusterChoice = function (c) {
            return [_this.getClusterName(c), _this.getClusterDescription(c)];
        };
        this.out = out;
        this.client = client;
        this.env = env;
        this.config = config;
        this.definition = definition;
        this.shouldAskForGenerator = shouldAskForGenerator;
    }
    EndpointDialog.prototype.getEndpoint = function () {
        return __awaiter(this, void 0, void 0, function () {
            var localClusterRunning, folderName, authenticationPayload, loggedIn, clusters, files, hasDockerComposeYml, question, choice;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isClusterOnline('http://localhost:4466')];
                    case 1:
                        localClusterRunning = _a.sent();
                        folderName = path.basename(this.config.definitionDir);
                        folderName =
                            folderName === 'prisma'
                                ? path.basename(path.join(this.config.definitionDir, '../'))
                                : folderName;
                        if (/^\d+/.test(folderName)) {
                            folderName = "service-" + folderName;
                        }
                        return [4 /*yield*/, this.client.isAuthenticated()];
                    case 2:
                        authenticationPayload = _a.sent();
                        loggedIn = authenticationPayload.isAuthenticated;
                        clusters = this.getCloudClusters();
                        files = this.listFiles();
                        hasDockerComposeYml = files.includes('docker-compose.yml');
                        question = this.getClusterQuestion(!loggedIn && !localClusterRunning, hasDockerComposeYml, clusters, loggedIn);
                        return [4 /*yield*/, this.out.prompt(question)];
                    case 3:
                        choice = (_a.sent()).choice;
                        return [2 /*return*/, this.handleChoice({
                                choice: this.decodeName(choice),
                                loggedIn: loggedIn,
                                folderName: folderName,
                                localClusterRunning: localClusterRunning,
                                clusters: clusters,
                            })];
                }
            });
        });
    };
    EndpointDialog.prototype.encodeName = function (name) {
        return encodeMap[name] || name;
    };
    EndpointDialog.prototype.decodeName = function (name) {
        var replaced = name;
        Object.keys(decodeMap).forEach(function (item) {
            if (replaced.includes(item)) {
                replaced = replaced.replace(item, decodeMap[item]);
            }
        });
        return replaced;
    };
    EndpointDialog.prototype.printDatabaseConfig = function (credentials) {
        var data = __assign({ connector: credentials.type, host: credentials.host
                ? this.replaceLocalhost(credentials.host)
                : undefined, database: credentials.database && credentials.database.length > 0
                ? credentials.database
                : undefined, schema: credentials.schema && credentials.schema.length > 0
                ? credentials.schema
                : undefined, user: credentials.user, password: credentials.password, uri: credentials.uri ? this.replaceLocalhost(credentials.uri) : undefined }, (credentials.type === prisma_datamodel_1.DatabaseType.postgres
            ? __assign({ ssl: credentials.ssl }) : {}));
        if (credentials.type !== prisma_datamodel_1.DatabaseType.mongo) {
            data = __assign({}, data, { rawAccess: true, port: credentials.port || defaultPorts[credentials.type], migrations: !credentials.alreadyData });
        }
        var defaultDB = JSON.parse(JSON.stringify(data));
        return yaml
            .safeDump({
            databases: {
                default: defaultDB,
            },
        })
            .split('\n')
            .filter(function (l) { return l.trim().length > 0; })
            .map(function (l) { return "        " + l; })
            .join('\n');
    };
    EndpointDialog.prototype.printDatabaseService = function (type) {
        return databaseServiceDefinitions[type];
    };
    EndpointDialog.prototype.handleChoice = function (_a) {
        var choice = _a.choice, loggedIn = _a.loggedIn, folderName = _a.folderName, localClusterRunning = _a.localClusterRunning, _b = _a.clusters, clusters = _b === void 0 ? this.getCloudClusters() : _b;
        return __awaiter(this, void 0, void 0, function () {
            var clusterEndpoint, cluster, workspace, service, stage, credentials, dockerComposeYml, datamodel, newDatabase, managementSecret, writeDockerComposeYml, _c, needsAuth, type, _d, defaultHosts, intermediateConnectorData, connectorData, connector, databaseName, databaseType, disconnect, schemas, e_1, schemaWord, before, introspection, isdl, renderer, tableName, demoCluster, result_1, _e, _f, generator, _g;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        service = 'default';
                        stage = 'default';
                        dockerComposeYml = util_1.defaultDockerCompose;
                        datamodel = util_1.defaultDataModel;
                        newDatabase = false;
                        writeDockerComposeYml = true;
                        _c = choice;
                        switch (_c) {
                            case 'Use other server': return [3 /*break*/, 1];
                            case 'local': return [3 /*break*/, 8];
                            case 'Create new database': return [3 /*break*/, 8];
                            case 'Use existing database': return [3 /*break*/, 12];
                            case 'Demo server + MySQL database': return [3 /*break*/, 25];
                        }
                        return [3 /*break*/, 27];
                    case 1: return [4 /*yield*/, this.customEndpointSelector()];
                    case 2:
                        clusterEndpoint = _h.sent();
                        cluster = new prisma_yml_1.Cluster(this.out, 'custom', clusterEndpoint);
                        return [4 /*yield*/, cluster.needsAuth()];
                    case 3:
                        needsAuth = _h.sent();
                        if (!needsAuth) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.ask({
                                message: 'Enter the management API secret',
                                key: 'managementSecret',
                                inputType: 'password',
                            })];
                    case 4:
                        managementSecret = _h.sent();
                        _h.label = 5;
                    case 5: return [4 /*yield*/, this.ask({
                            message: 'Choose a name for your service',
                            key: 'serviceName',
                            defaultValue: folderName,
                        })];
                    case 6:
                        service = _h.sent();
                        return [4 /*yield*/, this.ask({
                                message: 'Choose a name for your stage',
                                key: 'stageName',
                                defaultValue: 'dev',
                            })];
                    case 7:
                        stage = _h.sent();
                        writeDockerComposeYml = false;
                        return [3 /*break*/, 28];
                    case 8:
                        cluster =
                            (this.env.clusters || []).find(function (c) { return c.name === 'local'; }) ||
                                new prisma_yml_1.Cluster(this.out, 'local', 'http://localhost:4466');
                        if (!(choice === 'Create new database')) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.askForDatabaseType()];
                    case 9:
                        _d = _h.sent();
                        return [3 /*break*/, 11];
                    case 10:
                        _d = prisma_datamodel_1.DatabaseType.postgres;
                        _h.label = 11;
                    case 11:
                        type = _d;
                        if (type === prisma_datamodel_1.DatabaseType.mongo) {
                            datamodel = util_1.defaultMongoDataModel;
                        }
                        defaultHosts = {
                            mysql: 'mysql',
                            mongo: 'mongo',
                            postgres: 'postgres',
                        };
                        credentials = {
                            user: type === prisma_datamodel_1.DatabaseType.mysql ? 'root' : 'prisma',
                            password: 'prisma',
                            type: type,
                            host: defaultHosts[type],
                            port: defaultPorts[type],
                        };
                        if (type === prisma_datamodel_1.DatabaseType.mongo) {
                            credentials = {
                                type: type,
                                uri: 'mongodb://prisma:prisma@mongo',
                            };
                        }
                        dockerComposeYml += this.printDatabaseConfig(credentials);
                        dockerComposeYml += this.printDatabaseService(type);
                        newDatabase = true;
                        return [3 /*break*/, 28];
                    case 12: return [4 /*yield*/, this.getDatabase()
                        /**
                         * Get connector
                         */
                    ];
                    case 13:
                        /**
                         * Get database credentials
                         */
                        credentials = _h.sent();
                        return [4 /*yield*/, util_2.getConnectedConnectorFromCredentials(credentials)];
                    case 14:
                        intermediateConnectorData = _h.sent();
                        return [4 /*yield*/, util_2.getConnectorWithDatabase(__assign({}, intermediateConnectorData, { databaseType: credentials.type, interactive: true }), this)];
                    case 15:
                        connectorData = _h.sent();
                        connector = connectorData.connector, databaseName = connectorData.databaseName, databaseType = connectorData.databaseType, disconnect = connectorData.disconnect;
                        schemas = void 0;
                        _h.label = 16;
                    case 16:
                        _h.trys.push([16, 18, , 19]);
                        return [4 /*yield*/, connector.listSchemas()];
                    case 17:
                        schemas = _h.sent();
                        return [3 /*break*/, 19];
                    case 18:
                        e_1 = _h.sent();
                        throw new Error("Could not connect to database: " + e_1.message);
                    case 19:
                        if (databaseName && !schemas.includes(databaseName)) {
                            schemaWord = databaseType === prisma_datamodel_1.DatabaseType.postgres ? 'schema' : 'database';
                            throw new Error("The provided " + schemaWord + " \"" + databaseName + "\" does not exist. The following are available: " + schemas.join(', '));
                        }
                        if (databaseName) {
                            credentials.schema = databaseName;
                        }
                        if (!credentials.alreadyData) return [3 /*break*/, 23];
                        before = Date.now();
                        this.out.action.start("Introspecting database " + chalk_1.default.bold(databaseName));
                        return [4 /*yield*/, connector.introspect(databaseName)];
                    case 20:
                        introspection = _h.sent();
                        return [4 /*yield*/, introspection.getNormalizedDatamodel()];
                    case 21:
                        isdl = _h.sent();
                        renderer = prisma_datamodel_1.DefaultRenderer.create(databaseType, true);
                        datamodel = renderer.render(isdl);
                        tableName = databaseType === prisma_datamodel_1.DatabaseType.mongo ? 'Mongo collections' : 'tables';
                        return [4 /*yield*/, disconnect()];
                    case 22:
                        _h.sent();
                        this.out.action.stop(util_1.prettyTime(Date.now() - before));
                        this.out.log("Created datamodel definition based on " + isdl.types.length + " " + tableName + ".");
                        return [3 /*break*/, 24];
                    case 23:
                        switch (credentials.type) {
                            case prisma_datamodel_1.DatabaseType.mongo: {
                                datamodel = util_1.defaultMongoDataModel;
                                break;
                            }
                            case prisma_datamodel_1.DatabaseType.mysql:
                            case prisma_datamodel_1.DatabaseType.postgres: {
                                datamodel = util_1.defaultDataModel;
                            }
                        }
                        _h.label = 24;
                    case 24:
                        /**
                         * Add the database credentials to the docker compose file
                         */
                        dockerComposeYml += this.printDatabaseConfig(credentials);
                        /**
                         * The cluster instance is later used by the init command
                         */
                        cluster = new prisma_yml_1.Cluster(this.out, 'custom', 'http://localhost:4466');
                        return [3 /*break*/, 28];
                    case 25:
                        writeDockerComposeYml = false;
                        return [4 /*yield*/, this.getDemoCluster()];
                    case 26:
                        demoCluster = _h.sent();
                        if (!demoCluster) {
                            return [2 /*return*/, this.getEndpoint()];
                        }
                        else {
                            cluster = demoCluster;
                        }
                        return [3 /*break*/, 28];
                    case 27:
                        {
                            result_1 = this.getClusterAndWorkspaceFromChoice(choice);
                            if (!result_1.workspace) {
                                cluster = clusters.find(function (c) { return c.name === result_1.cluster; });
                                if (!loggedIn && cluster && cluster.shared) {
                                    workspace = this.getPublicName();
                                }
                            }
                            else {
                                cluster = clusters.find(function (c) {
                                    return c.name === result_1.cluster && c.workspaceSlug === result_1.workspace;
                                });
                                workspace = result_1.workspace;
                            }
                        }
                        _h.label = 28;
                    case 28:
                        if (!cluster) {
                            throw new Error("Oops. Could not get cluster.");
                        }
                        this.env.setActiveCluster(cluster);
                        _e = !cluster.local;
                        if (_e) return [3 /*break*/, 30];
                        return [4 /*yield*/, this.projectExists(cluster, service, stage, workspace)];
                    case 29:
                        _e = (_h.sent());
                        _h.label = 30;
                    case 30:
                        if (!_e) return [3 /*break*/, 32];
                        return [4 /*yield*/, this.askForService(folderName)];
                    case 31:
                        service = _h.sent();
                        _h.label = 32;
                    case 32:
                        _f = !cluster.local;
                        if (_f) return [3 /*break*/, 34];
                        return [4 /*yield*/, this.projectExists(cluster, service, stage, workspace)];
                    case 33:
                        _f = (_h.sent());
                        _h.label = 34;
                    case 34:
                        if (!_f) return [3 /*break*/, 36];
                        return [4 /*yield*/, this.askForStage('dev')];
                    case 35:
                        stage = _h.sent();
                        _h.label = 36;
                    case 36:
                        if (!this.shouldAskForGenerator) return [3 /*break*/, 38];
                        return [4 /*yield*/, this.askForGenerator()];
                    case 37:
                        _g = _h.sent();
                        return [3 /*break*/, 39];
                    case 38:
                        _g = undefined;
                        _h.label = 39;
                    case 39:
                        generator = _g;
                        workspace = workspace || cluster.workspaceSlug;
                        return [2 /*return*/, {
                                endpoint: cluster.getApiEndpoint(service, stage, workspace),
                                cluster: cluster,
                                workspace: workspace,
                                service: service,
                                stage: stage,
                                localClusterRunning: localClusterRunning,
                                database: credentials,
                                dockerComposeYml: dockerComposeYml,
                                datamodel: datamodel,
                                newDatabase: newDatabase,
                                managementSecret: managementSecret,
                                generator: generator,
                                writeDockerComposeYml: writeDockerComposeYml,
                            }];
                }
            });
        });
    };
    EndpointDialog.prototype.connectToMongo = function (credentials) {
        return new Promise(function (resolve, reject) {
            if (!credentials.uri) {
                throw new Error("Please provide the MongoDB connection string");
            }
            mongodb_1.MongoClient.connect(credentials.uri, { useNewUrlParser: true }, function (err, client) {
                if (err) {
                    reject(err);
                }
                else {
                    if (credentials.database) {
                        client.db(credentials.database);
                    }
                    resolve(client);
                }
            });
        });
    };
    EndpointDialog.prototype.replaceLocalhost = function (host) {
        return host.replace('localhost', 'host.docker.internal');
    };
    EndpointDialog.prototype.getDatabase = function (introspection) {
        if (introspection === void 0) { introspection = false; }
        return __awaiter(this, void 0, void 0, function () {
            var type, credentials, alreadyData, _a, askForSchema, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, database;
            return __generator(this, function (_o) {
                switch (_o.label) {
                    case 0: return [4 /*yield*/, this.askForDatabaseType(introspection)];
                    case 1:
                        type = _o.sent();
                        credentials = {
                            type: type,
                        };
                        if (!(type === prisma_datamodel_1.DatabaseType.mysql || type === prisma_datamodel_1.DatabaseType.postgres)) return [3 /*break*/, 18];
                        _a = introspection;
                        if (_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.askForExistingData()];
                    case 2:
                        _a = (_o.sent());
                        _o.label = 3;
                    case 3:
                        alreadyData = _a;
                        askForSchema = introspection ? true : alreadyData ? true : false;
                        credentials.alreadyData = alreadyData;
                        _b = credentials;
                        return [4 /*yield*/, this.ask({
                                message: 'Enter database host',
                                key: 'host',
                                defaultValue: 'localhost',
                            })];
                    case 4:
                        _b.host = _o.sent();
                        _c = credentials;
                        return [4 /*yield*/, this.ask({
                                message: 'Enter database port',
                                key: 'port',
                                defaultValue: String(defaultPorts[type]),
                            })];
                    case 5:
                        _c.port = _o.sent();
                        _d = credentials;
                        return [4 /*yield*/, this.ask({
                                message: 'Enter database user',
                                key: 'user',
                            })];
                    case 6:
                        _d.user = _o.sent();
                        _e = credentials;
                        return [4 /*yield*/, this.ask({
                                message: 'Enter database password',
                                key: 'password',
                                inputType: 'password',
                            })];
                    case 7:
                        _e.password = _o.sent();
                        _f = credentials;
                        if (!(type === prisma_datamodel_1.DatabaseType.postgres)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.ask({
                                message: "Enter database name (the database includes the schema)",
                                key: 'database',
                            })];
                    case 8:
                        _g = _o.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        _g = null;
                        _o.label = 10;
                    case 10:
                        _f.database = _g;
                        _h = credentials;
                        if (!(type === prisma_datamodel_1.DatabaseType.postgres)) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.ask({
                                message: 'Use SSL?',
                                inputType: 'confirm',
                                key: 'ssl',
                                defaultValue: !credentials.host.includes('localhost'),
                            })];
                    case 11:
                        _j = _o.sent();
                        return [3 /*break*/, 13];
                    case 12:
                        _j = undefined;
                        _o.label = 13;
                    case 13:
                        _h.ssl = _j;
                        if (!!alreadyData) return [3 /*break*/, 17];
                        // list all schemas at this point
                        _k = credentials;
                        if (!askForSchema) return [3 /*break*/, 15];
                        return [4 /*yield*/, this.ask({
                                message: "Enter name of existing schema (e.g. default$default)",
                                key: 'schema',
                            })];
                    case 14:
                        _l = _o.sent();
                        return [3 /*break*/, 16];
                    case 15:
                        _l = undefined;
                        _o.label = 16;
                    case 16:
                        // list all schemas at this point
                        _k.schema = _l;
                        _o.label = 17;
                    case 17: return [3 /*break*/, 20];
                    case 18:
                        if (!(type === prisma_datamodel_1.DatabaseType.mongo)) return [3 /*break*/, 20];
                        _m = credentials;
                        return [4 /*yield*/, this.ask({
                                message: 'Enter MongoDB connection string',
                                key: 'uri',
                            })];
                    case 19:
                        _m.uri = _o.sent();
                        credentials.uri = util_2.sanitizeMongoUri(credentials.uri);
                        if (util_2.hasAuthSource(credentials.uri)) {
                            database = util_2.populateMongoDatabase({ uri: credentials.uri }).database;
                            credentials.schema = database;
                        }
                        _o.label = 20;
                    case 20: return [2 /*return*/, credentials];
                }
            });
        });
    };
    EndpointDialog.prototype.selectSchema = function (schemas) {
        return __awaiter(this, void 0, void 0, function () {
            var filteredSchemas, metaSchemasText, choices, choice;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        filteredSchemas = schemas.filter(function (s) {
                            return !s.startsWith('prisma-temporary-service') &&
                                !['performance_schema', 'sys', 'mysql', 'prisma'].includes(s);
                        });
                        if (filteredSchemas.length === 0) {
                            metaSchemasText = schemas.length > 0
                                ? " The schemas " + schemas.join(', ') + " are system schemas that can't be introspected."
                                : '';
                            throw new Error("There is no schema in the database to be selected for introspection." + metaSchemasText);
                        }
                        if (filteredSchemas.length === 1) {
                            return [2 /*return*/, filteredSchemas[0]];
                        }
                        choices = filteredSchemas.map(function (s) { return ({
                            value: s,
                            name: s,
                        }); });
                        return [4 /*yield*/, this.out.prompt({
                                message: 'Please select the schema you want to introspect',
                                name: 'choice',
                                type: 'list',
                                choices: choices,
                                pageSize: Math.min(choices.length, 20),
                            })];
                    case 1:
                        choice = (_a.sent()).choice;
                        return [2 /*return*/, choice];
                }
            });
        });
    };
    EndpointDialog.prototype.getClusterAndWorkspaceFromChoice = function (choice) {
        var splitted = choice.split('/');
        var workspace = splitted.length > 1 ? splitted[0] : null;
        var cluster = splitted.slice(-1)[0];
        return { workspace: workspace, cluster: cluster };
    };
    EndpointDialog.prototype.getCloudClusters = function () {
        if (!this.env.clusters) {
            return [];
        }
        return this.env.clusters.filter(function (c) { return c.shared || c.isPrivate; });
    };
    EndpointDialog.prototype.projectExists = function (cluster, name, stage, workspace) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = Boolean;
                        return [4 /*yield*/, this.client.getProject(util_1.concatName(cluster, name, workspace || null), stage)];
                    case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                    case 2:
                        e_2 = _b.sent();
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    EndpointDialog.prototype.listFiles = function () {
        try {
            return fs.readdirSync(this.config.definitionDir);
        }
        catch (e) {
            debug("EndpointDialog workflow called without existing directory.");
            debug(e.toString());
            return [];
        }
    };
    EndpointDialog.prototype.isClusterOnline = function (endpoint) {
        return __awaiter(this, void 0, void 0, function () {
            var cluster;
            return __generator(this, function (_a) {
                cluster = new prisma_yml_1.Cluster(this.out, 'local', endpoint, undefined, true);
                return [2 /*return*/, cluster.isOnline()];
            });
        });
    };
    EndpointDialog.prototype.getClusterQuestion = function (fromScratch, hasDockerComposeYml, clusters, isAuthenticated) {
        var sandboxChoices = [
            [
                'Demo server + MySQL database',
                "Free demo environment hosted in Prisma Cloud " + (!isAuthenticated ? " (requires login)" : ""),
            ],
            [
                'Use other server',
                'Manually provide endpoint of a running Prisma server',
            ],
        ];
        if (fromScratch && !hasDockerComposeYml) {
            var fixChoices = [
                ['Use existing database', 'Connect to existing database'],
                ['Create new database', 'Set up a local database using Docker'],
            ];
            var rawChoices = fixChoices.concat(sandboxChoices);
            var choices = this.convertChoices(rawChoices);
            var finalChoices = [
                new inquirer.Separator('                       '),
                new inquirer.Separator(chalk_1.default.bold('You can set up Prisma for local development (based on docker-compose)'))
            ].concat(choices.slice(0, fixChoices.length), [
                new inquirer.Separator('                       '),
                new inquirer.Separator(chalk_1.default.bold('Or deploy to an existing Prisma server:'))
            ], choices.slice(fixChoices.length, 5));
            return {
                name: 'choice',
                type: 'list',
                // message: `Connect to your database, set up a new one or use hosted sandbox?`,
                message: "Set up a new Prisma server or deploy to an existing server?",
                choices: finalChoices,
                pageSize: finalChoices.length,
            };
        }
        else {
            var clusterChoices = clusters.length > 0
                ? clusters.filter(function (c) { return !c.shared; }).map(this.getClusterChoice)
                : sandboxChoices;
            var rawChoices = [
                ['Use existing database', 'Connect to existing database'],
                ['Create new database', 'Set up a local database using Docker']
            ].concat(clusterChoices, [
                [
                    'Demo server + MySQL database',
                    "Free development environment hosted in Prisma Cloud" + (!isAuthenticated ? " (requires login)" : ""),
                ],
                [
                    'Use other server',
                    'Manually provide endpoint of a running Prisma server',
                ],
            ]);
            var choices = this.convertChoices(rawChoices);
            var dockerChoices = hasDockerComposeYml
                ? []
                : [
                    new inquirer.Separator(chalk_1.default.bold('Set up a new Prisma server for local development (based on docker-compose):'))
                ].concat(choices.slice(0, 2));
            var finalChoices = [
                new inquirer.Separator('                       ')
            ].concat(dockerChoices, [
                new inquirer.Separator('                       '),
                new inquirer.Separator(chalk_1.default.bold('Or deploy to an existing Prisma server:'))
            ], choices.slice(2));
            return {
                name: 'choice',
                type: 'list',
                message: "Set up a new Prisma server or deploy to an existing server?",
                choices: finalChoices,
                pageSize: finalChoices.length,
            };
        }
    };
    EndpointDialog.prototype.getClusterName = function (c) {
        return "" + (c.workspaceSlug ? c.workspaceSlug + "/" : '') + this.encodeName(c.name);
    };
    EndpointDialog.prototype.getDemoCluster = function () {
        return __awaiter(this, void 0, void 0, function () {
            var authenticationPayload, isAuthenticated;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.isAuthenticated()];
                    case 1:
                        authenticationPayload = _a.sent();
                        isAuthenticated = authenticationPayload.isAuthenticated;
                        if (!!isAuthenticated) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.client.login()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, this.askForDemoCluster()];
                }
            });
        });
    };
    EndpointDialog.prototype.askForDemoCluster = function () {
        return __awaiter(this, void 0, void 0, function () {
            var eu1Ping, us1Ping, clusters, rawChoices, choices, cluster;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, prisma_cli_engine_1.getPing('EU_WEST_1')];
                    case 1:
                        eu1Ping = _a.sent();
                        return [4 /*yield*/, prisma_cli_engine_1.getPing('US_WEST_2')];
                    case 2:
                        us1Ping = _a.sent();
                        clusters = this.getCloudClusters().filter(function (c) { return c.name === 'prisma-eu1' || c.name === 'prisma-us1'; });
                        rawChoices = clusters.map(function (c) {
                            var clusterName = _this.getClusterName(c);
                            var clusterRegion = c.name === 'prisma-eu1' ? "eu-west-1" : "us-west-2";
                            var pingTime = c.name === 'prisma-eu1' ? eu1Ping.toFixed() : us1Ping.toFixed();
                            return [
                                clusterName,
                                "Hosted on AWS in " + clusterRegion + " using MySQL [" + pingTime + "ms latency]",
                            ];
                        });
                        choices = this.convertChoices(rawChoices);
                        return [4 /*yield*/, this.out.prompt({
                                name: 'cluster',
                                type: 'list',
                                message: "Choose the region of your demo server",
                                choices: choices,
                            })];
                    case 3:
                        cluster = (_a.sent()).cluster;
                        return [2 /*return*/, clusters.find(function (c) {
                                var clusterName = _this.getClusterName(c);
                                return clusterName === cluster;
                            })];
                }
            });
        });
    };
    EndpointDialog.prototype.getClusterDescription = function (c) {
        if (c.shared) {
            return 'Free development environment hosted in Prisma Cloud';
        }
        return "Production Prisma cluster";
    };
    EndpointDialog.prototype.askForDatabaseType = function (introspect) {
        if (introspect === void 0) { introspect = false; }
        return __awaiter(this, void 0, void 0, function () {
            var choices, dbType, databaseTypeMap;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        choices = [];
                        choices.push({
                            value: 'mysql',
                            name: 'MySQL             MySQL compliant databases like MySQL or MariaDB',
                            short: 'MySQL',
                        });
                        choices.push({
                            value: 'postgres',
                            name: 'PostgreSQL        PostgreSQL database',
                            short: 'PostgreSQL',
                        });
                        choices.push({
                            value: 'mongo',
                            name: 'MongoDB           Mongo Database',
                            short: 'MongoDB',
                        });
                        return [4 /*yield*/, this.out.prompt({
                                name: 'dbType',
                                type: 'list',
                                message: "What kind of database do you want to " + (introspect ? 'introspect' : 'deploy to') + "?",
                                choices: choices,
                            })];
                    case 1:
                        dbType = (_a.sent()).dbType;
                        databaseTypeMap = {
                            mongo: prisma_datamodel_1.DatabaseType.mongo,
                            mysql: prisma_datamodel_1.DatabaseType.mysql,
                            postgres: prisma_datamodel_1.DatabaseType.postgres,
                            sqlite: prisma_datamodel_1.DatabaseType.sqlite,
                        };
                        return [2 /*return*/, databaseTypeMap[dbType]];
                }
            });
        });
    };
    EndpointDialog.prototype.convertChoices = function (choices) {
        var padded = this.out.printPadded(choices, 0, 6).split('\n');
        return padded.map(function (name, index) { return ({
            name: name,
            value: choices[index][0],
            short: choices[index][0],
        }); });
    };
    EndpointDialog.prototype.askForStage = function (defaultName) {
        return __awaiter(this, void 0, void 0, function () {
            var question, stage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        question = {
                            name: 'stage',
                            type: 'input',
                            message: 'Choose a name for your stage',
                            default: defaultName,
                        };
                        return [4 /*yield*/, this.out.prompt(question)];
                    case 1:
                        stage = (_a.sent()).stage;
                        return [2 /*return*/, stage];
                }
            });
        });
    };
    EndpointDialog.prototype.askForGenerator = function () {
        return __awaiter(this, void 0, void 0, function () {
            var choices, generator;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        choices = [
                            {
                                name: 'Prisma TypeScript Client',
                                value: 'typescript-client',
                            },
                            {
                                name: 'Prisma Flow Client',
                                value: 'flow-client',
                            },
                            {
                                name: 'Prisma JavaScript Client',
                                value: 'javascript-client',
                            },
                            {
                                name: 'Prisma Go Client',
                                value: 'go-client',
                            },
                            {
                                name: "Don't generate",
                                value: 'no-generation',
                            },
                        ];
                        return [4 /*yield*/, this.out.prompt({
                                name: 'generator',
                                type: 'list',
                                message: 'Select the programming language for the generated Prisma client',
                                pageSize: choices.length,
                                choices: choices,
                            })];
                    case 1:
                        generator = (_a.sent()).generator;
                        return [2 /*return*/, generator];
                }
            });
        });
    };
    EndpointDialog.prototype.askForService = function (defaultName) {
        return __awaiter(this, void 0, void 0, function () {
            var question, service;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        question = {
                            name: 'service',
                            type: 'input',
                            message: 'Choose a name for your service',
                            default: defaultName,
                        };
                        return [4 /*yield*/, this.out.prompt(question)];
                    case 1:
                        service = (_a.sent()).service;
                        return [2 /*return*/, service];
                }
            });
        });
    };
    EndpointDialog.prototype.customEndpointSelector = function () {
        return __awaiter(this, void 0, void 0, function () {
            var question, endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        question = {
                            name: 'endpoint',
                            type: 'input',
                            message: "Enter the endpoint of your Prisma server",
                        };
                        return [4 /*yield*/, this.out.prompt(question)];
                    case 1:
                        endpoint = (_a.sent()).endpoint;
                        return [2 /*return*/, endpoint];
                }
            });
        });
    };
    EndpointDialog.prototype.askForExistingDataMongo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var question, existingData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        question = {
                            name: 'existingData',
                            type: 'list',
                            message: "Does your database contain existing data?",
                            choices: [
                                {
                                    value: 'yes',
                                    name: 'Yes: Use existing data',
                                    short: 'Yes',
                                },
                                {
                                    value: 'no',
                                    name: 'No: Set up without existing data',
                                },
                            ],
                            pageSize: 5,
                        };
                        return [4 /*yield*/, this.out.prompt(question)];
                    case 1:
                        existingData = (_a.sent()).existingData;
                        return [2 /*return*/, existingData === 'yes'];
                }
            });
        });
    };
    EndpointDialog.prototype.askForExistingData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var question, existingData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        question = {
                            name: 'existingData',
                            type: 'list',
                            message: "Does your database contain existing data?",
                            choices: [
                                {
                                    value: 'no',
                                    name: 'No',
                                },
                                {
                                    value: 'yes',
                                    name: 'Yes',
                                    short: 'Yes',
                                },
                            ],
                            pageSize: 10,
                        };
                        return [4 /*yield*/, this.out.prompt(question)];
                    case 1:
                        existingData = (_a.sent()).existingData;
                        return [2 /*return*/, existingData === 'yes'];
                }
            });
        });
    };
    EndpointDialog.prototype.ask = function (_a) {
        var message = _a.message, defaultValue = _a.defaultValue, key = _a.key, validate = _a.validate, required = _a.required, _b = _a.inputType, inputType = _b === void 0 ? 'input' : _b;
        return __awaiter(this, void 0, void 0, function () {
            var question, result;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        question = {
                            name: key,
                            type: inputType,
                            message: message,
                            default: defaultValue,
                            validate: defaultValue || !required
                                ? undefined
                                : validate ||
                                    (function (value) {
                                        return value && value.length > 0
                                            ? true
                                            : "Please provide a valid " + key;
                                    }),
                        };
                        return [4 /*yield*/, this.out.prompt(question)];
                    case 1:
                        result = _c.sent();
                        return [2 /*return*/, result[key]];
                }
            });
        });
    };
    EndpointDialog.prototype.getSillyName = function () {
        return slugify(sillyname()).split('-')[0] + "-" + Math.round(Math.random() * 1000);
    };
    EndpointDialog.prototype.getPublicName = function () {
        return "public-" + this.getSillyName();
    };
    return EndpointDialog;
}());
exports.EndpointDialog = EndpointDialog;
function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
}
//# sourceMappingURL=EndpointDialog.js.map