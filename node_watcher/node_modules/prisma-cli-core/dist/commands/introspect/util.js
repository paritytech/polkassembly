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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var mongodb_1 = require("mongodb");
var mysql_1 = require("mysql");
var lodash_1 = require("lodash");
var prisma_db_introspection_1 = require("prisma-db-introspection");
var prisma_datamodel_1 = require("prisma-datamodel");
var url_1 = require("url");
function replaceLocalDockerHost(credentials) {
    if (credentials.host) {
        var replaceMap = {
            'host.docker.internal': 'localhost',
            'docker.for.mac.localhost': 'localhost',
        };
        return __assign({}, credentials, { host: replaceMap[credentials.host] || credentials.host });
    }
    return credentials;
}
function getConnectedConnectorFromCredentials(credentials) {
    return __awaiter(this, void 0, void 0, function () {
        var client, disconnect, _a, connector;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = credentials.type;
                    switch (_a) {
                        case prisma_datamodel_1.DatabaseType.mongo: return [3 /*break*/, 1];
                        case prisma_datamodel_1.DatabaseType.mysql: return [3 /*break*/, 3];
                        case prisma_datamodel_1.DatabaseType.postgres: return [3 /*break*/, 5];
                    }
                    return [3 /*break*/, 7];
                case 1: return [4 /*yield*/, getConnectedMongoClient(credentials)];
                case 2:
                    client = _b.sent();
                    disconnect = function () { return client.close(); };
                    return [3 /*break*/, 7];
                case 3: return [4 /*yield*/, getConnectedMysqlClient(credentials)];
                case 4:
                    client = _b.sent();
                    disconnect = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, client.end()];
                    }); }); };
                    return [3 /*break*/, 7];
                case 5: return [4 /*yield*/, getConnectedPostgresClient(credentials)];
                case 6:
                    client = _b.sent();
                    disconnect = function () { return client.end(); };
                    return [3 /*break*/, 7];
                case 7:
                    connector = prisma_db_introspection_1.Connectors.create(credentials.type, client);
                    return [2 /*return*/, { connector: connector, disconnect: disconnect }];
            }
        });
    });
}
exports.getConnectedConnectorFromCredentials = getConnectedConnectorFromCredentials;
function getConnectorWithDatabase(connectorData, endpointDialog) {
    return __awaiter(this, void 0, void 0, function () {
        var connector, disconnect, databaseType, interactive, result, databaseName, schemas, e_1, schemaWord;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    connector = connectorData.connector, disconnect = connectorData.disconnect, databaseType = connectorData.databaseType, interactive = connectorData.interactive, result = __rest(connectorData, ["connector", "disconnect", "databaseType", "interactive"]);
                    databaseName = result.databaseName;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, connector.listSchemas()];
                case 2:
                    schemas = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    throw new Error("Could not connect to database. " + e_1.message);
                case 4:
                    if (!databaseName && !interactive) {
                        throw new Error("Please provide a database name");
                    }
                    if (databaseName && !schemas.includes(databaseName)) {
                        schemaWord = databaseType === prisma_datamodel_1.DatabaseType.postgres ? 'schema' : 'database';
                        throw new Error("The provided " + schemaWord + " \"" + databaseName + "\" does not exist. The following are available: " + schemas.join(', '));
                    }
                    if (!!databaseName) return [3 /*break*/, 6];
                    return [4 /*yield*/, endpointDialog.selectSchema(schemas)];
                case 5:
                    databaseName = _a.sent();
                    _a.label = 6;
                case 6: return [2 /*return*/, { connector: connector, disconnect: disconnect, databaseType: databaseType, databaseName: databaseName }];
            }
        });
    });
}
exports.getConnectorWithDatabase = getConnectorWithDatabase;
function getConnectedMysqlClient(credentials) {
    return __awaiter(this, void 0, void 0, function () {
        var credentialsWithoutSsl, client;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    credentialsWithoutSsl = lodash_1.omit(replaceLocalDockerHost(credentials), 'ssl');
                    client = mysql_1.createConnection(credentialsWithoutSsl);
                    return [4 /*yield*/, new Promise(function (resolve, reject) {
                            client.connect(function (err) {
                                if (err) {
                                    reject(err);
                                }
                                else {
                                    resolve();
                                }
                            });
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, client];
            }
        });
    });
}
function getConnectedPostgresClient(credentials) {
    return __awaiter(this, void 0, void 0, function () {
        var sanitizedCredentials, client;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    sanitizedCredentials = replaceLocalDockerHost(credentials);
                    client = new pg_1.Client(sanitizedCredentials);
                    return [4 /*yield*/, client.connect()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, client];
            }
        });
    });
}
function getConnectedMongoClient(credentials) {
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
}
function sanitizeMongoUri(mongoUri) {
    var url = new url_1.URL(mongoUri);
    if (url.pathname === '/' || url.pathname.length === 0) {
        url.pathname = 'admin';
    }
    return url.toString();
}
exports.sanitizeMongoUri = sanitizeMongoUri;
function populateMongoDatabase(_a) {
    var uri = _a.uri, database = _a.database;
    var url = new url_1.URL(uri);
    if ((url.pathname === '/' || url.pathname.length === 0) && !database) {
        throw new Error("Please provide a Mongo database in your connection string.\nRead more here https://docs.mongodb.com/manual/reference/connection-string/");
    }
    if (!database) {
        database = url.pathname.slice(1);
    }
    return {
        uri: uri,
        database: database,
    };
}
exports.populateMongoDatabase = populateMongoDatabase;
function hasAuthSource(uri) {
    return new url_1.URL(uri).searchParams.has('authSource');
}
exports.hasAuthSource = hasAuthSource;
//# sourceMappingURL=util.js.map