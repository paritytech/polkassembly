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
var graphql_request_1 = require("graphql-request");
var lodash_1 = require("lodash");
var prisma_yml_1 = require("prisma-yml");
var chalk_1 = require("chalk");
var introspectionQuery_1 = require("./introspectionQuery");
var opn = require("opn");
var PrismaDefinition_1 = require("prisma-yml/dist/PrismaDefinition");
var graphql_schema_1 = require("../utils/graphql-schema");
var migrationFragment_1 = require("./migrationFragment");
var debug = require('debug')('client');
var Client = /** @class */ (function () {
    function Client(config, environment, out) {
        this.mocks = {};
        this.config = config;
        this.env = environment;
        this.out = out;
    }
    // always create a new client which points to the latest config for each request
    Client.prototype.initClusterClient = function (cluster, serviceName, stageName, workspaceSlug) {
        return __awaiter(this, void 0, void 0, function () {
            var token, authenticationPayload, serviceCreatedInCloud, e_1, agent, e_2, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 12]);
                        return [4 /*yield*/, cluster.getToken(serviceName, workspaceSlug || undefined, stageName)];
                    case 1:
                        token = _a.sent();
                        debug("is local cluster: " + cluster.local);
                        return [4 /*yield*/, this.isAuthenticated()];
                    case 2:
                        authenticationPayload = _a.sent();
                        if (!(!cluster.local && authenticationPayload.isAuthenticated && !cluster.shared)) return [3 /*break*/, 6];
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, cluster.addServiceToCloudDBIfMissing(serviceName, workspaceSlug || undefined, stageName)];
                    case 4:
                        serviceCreatedInCloud = _a.sent();
                        debug({ serviceCreatedInCloud: serviceCreatedInCloud });
                        return [3 /*break*/, 6];
                    case 5:
                        e_1 = _a.sent();
                        debug('Failed to add service to cloud, most likely this server is not connected to Prisma cloud');
                        debug(e_1.toString());
                        return [3 /*break*/, 6];
                    case 6:
                        agent = prisma_yml_1.getProxyAgent(cluster.getDeployEndpoint());
                        this.clusterClient = new graphql_request_1.GraphQLClient(cluster.getDeployEndpoint(), {
                            headers: __assign({}, (token && { Authorization: "Bearer " + token })),
                            agent: agent,
                        });
                        return [3 /*break*/, 12];
                    case 7:
                        e_2 = _a.sent();
                        debug('Trying manual login');
                        debug(e_2.toString());
                        if (!e_2.message.includes('Not authorized')) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.login()];
                    case 8:
                        _a.sent();
                        if (cluster.shared) {
                            cluster.clusterSecret = this.env.cloudSessionKey;
                        }
                        return [4 /*yield*/, cluster.getToken(serviceName, workspaceSlug, stageName)];
                    case 9:
                        token = _a.sent();
                        this.clusterClient = new graphql_request_1.GraphQLClient(cluster.getDeployEndpoint(), {
                            headers: {
                                Authorization: "Bearer " + token,
                            },
                            agent: prisma_yml_1.getProxyAgent(cluster.getDeployEndpoint()),
                        });
                        return [3 /*break*/, 11];
                    case 10: throw e_2;
                    case 11: return [3 /*break*/, 12];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(Client.prototype, "client", {
        get: function () {
            var _this = this;
            if (!this.env.activeCluster) {
                throw new Error("No cluster set. Please set the \"cluster\" property in your prisma.yml");
            }
            return {
                request: function (query, variables) { return __awaiter(_this, void 0, void 0, function () {
                    var result, e_3, result, result, result, localNotice;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                debug("Sending query to cluster " + this.env.activeCluster.name);
                                debug(this.env.activeCluster.getDeployEndpoint());
                                debug(query);
                                debug(variables);
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 11]);
                                return [4 /*yield*/, this.clusterClient.request(query, variables)];
                            case 2:
                                result = _a.sent();
                                debug(result);
                                return [2 /*return*/, result];
                            case 3:
                                e_3 = _a.sent();
                                if (!(e_3.response && e_3.response.errors && e_3.response.errors[0])) return [3 /*break*/, 5];
                                if (e_3.response.errors[0].code === 3015 &&
                                    e_3.response.errors[0].message.includes('decoded') &&
                                    this.env.activeCluster.local) {
                                    if (!process.env.PRISMA_MANAGEMENT_API_SECRET) {
                                        throw new Error("Server at " + chalk_1.default.bold(this.env.activeCluster.name) + " requires the Management API secret. Please set the the " + chalk_1.default.bold('PRISMA_MANAGEMENT_API_SECRET') + " environment variable.\n\n                  Learn more about this error in the docs: https://bit.ly/authentication-and-security-docs");
                                    }
                                    else {
                                        throw new Error("Can not authenticate against Prisma server. It seems that your " + chalk_1.default.bold('PRISMA_MANAGEMENT_API_SECRET') + " environment variable is set incorrectly. Please make sure that it matches the value that was used when the Prisma server was deployed.\n\n                  For more info visit: https://bit.ly/authentication-and-security-docs");
                                    }
                                }
                                if (!(e_3.response.errors[0].code === 3016 &&
                                    e_3.response.errors[0].message.includes('management$default'))) return [3 /*break*/, 5];
                                // TODO: make url mutable in graphql client
                                ;
                                this.clusterClient.url = this
                                    .clusterClient.url.replace(/management$/, 'cluster');
                                return [4 /*yield*/, this.clusterClient.request(query, variables)];
                            case 4:
                                result = _a.sent();
                                debug(result);
                                return [2 /*return*/, result];
                            case 5:
                                if (!(e_3.message.includes('HTTP method not allowed') &&
                                    this.clusterClient.url.endsWith('management'))) return [3 /*break*/, 7];
                                // TODO: make url mutable in graphql client
                                ;
                                this.clusterClient.url = this
                                    .clusterClient.url.replace(/management$/, 'cluster');
                                return [4 /*yield*/, this.clusterClient.request(query, variables)];
                            case 6:
                                result = _a.sent();
                                debug(result);
                                return [2 /*return*/, result];
                            case 7:
                                if (!e_3.message.includes('ECONNRESET')) return [3 /*break*/, 10];
                                return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 5000); })];
                            case 8:
                                _a.sent();
                                return [4 /*yield*/, this.clusterClient.request(query, variables)];
                            case 9:
                                result = _a.sent();
                                debug(result);
                                return [2 /*return*/, result];
                            case 10:
                                if (e_3.message.includes('ECONNREFUSED') &&
                                    (e_3.message.includes('localhost') || e_3.message.includes('127.0.0.1'))) {
                                    localNotice = this.env.activeCluster.local
                                        ? "Please use " + chalk_1.default.bold.green('docker-compose up -d') + " to start your local Prisma cluster."
                                        : '';
                                    throw new Error("Could not connect to cluster " + chalk_1.default.bold(this.env.activeCluster.name) + ". " + localNotice);
                                }
                                else {
                                    throw e_3;
                                }
                                return [3 /*break*/, 11];
                            case 11: return [2 /*return*/];
                        }
                    });
                }); },
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "cloudClient", {
        get: function () {
            var _this = this;
            var options = {
                headers: {},
                agent: prisma_yml_1.getProxyAgent(this.config.cloudApiEndpoint),
            };
            if (this.env.cloudSessionKey) {
                options.headers = {
                    Authorization: "Bearer " + this.env.cloudSessionKey,
                };
            }
            var client = new graphql_request_1.GraphQLClient(this.config.cloudApiEndpoint, options);
            return {
                request: function (query, variables) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        debug('Sending query to cloud api');
                        debug(this.config.cloudApiEndpoint);
                        debug(query);
                        debug(variables);
                        debug(options);
                        return [2 /*return*/, client.request(query, variables)];
                    });
                }); },
            };
        },
        enumerable: true,
        configurable: true
    });
    Client.prototype.introspect = function (serviceName, stageName, token, workspaceSlug) {
        return __awaiter(this, void 0, void 0, function () {
            var headers, endpoint, client;
            return __generator(this, function (_a) {
                debug('introspecting', { serviceName: serviceName, stageName: stageName, workspaceSlug: workspaceSlug });
                headers = {};
                if (token) {
                    headers.Authorization = "Bearer " + token;
                }
                endpoint = this.env.activeCluster.getApiEndpoint(serviceName, stageName, workspaceSlug);
                client = new graphql_request_1.GraphQLClient(endpoint, {
                    headers: headers,
                    agent: prisma_yml_1.getProxyAgent(this.config.cloudApiEndpoint),
                });
                return [2 /*return*/, client.request(introspectionQuery_1.introspectionQuery)];
            });
        });
    };
    Client.prototype.exec = function (serviceName, stageName, query, token, workspaceSlug) {
        return __awaiter(this, void 0, void 0, function () {
            var headers, client;
            return __generator(this, function (_a) {
                headers = {};
                if (token) {
                    headers.Authorization = "Bearer " + token;
                }
                client = new graphql_request_1.GraphQLClient(this.env.activeCluster.getApiEndpoint(serviceName, stageName, workspaceSlug), {
                    headers: headers,
                    agent: prisma_yml_1.getProxyAgent(this.config.cloudApiEndpoint),
                });
                return [2 /*return*/, client.request(query)];
            });
        });
    };
    Client.prototype.download = function (serviceName, stage, exportData, token, workspaceSlug) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint, result, text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = this.env.activeCluster.getExportEndpoint(serviceName, stage, workspaceSlug);
                        debug("Downloading from " + endpoint);
                        debug(exportData);
                        return [4 /*yield*/, fetch(endpoint, {
                                method: 'post',
                                headers: {
                                    Authorization: "Bearer " + token,
                                    'Content-Type': 'application/json',
                                },
                                body: exportData,
                                agent: prisma_yml_1.getProxyAgent(endpoint),
                            })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.text()];
                    case 2:
                        text = _a.sent();
                        try {
                            return [2 /*return*/, JSON.parse(text)];
                        }
                        catch (e) {
                            throw new Error(text);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.upload = function (serviceName, stage, exportData, token, workspaceSlug) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint, result, text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = this.env.activeCluster.getImportEndpoint(serviceName, stage, workspaceSlug);
                        debug("Uploading to endpoint " + endpoint);
                        return [4 /*yield*/, fetch(endpoint, {
                                method: 'post',
                                headers: {
                                    Authorization: "Bearer " + token,
                                    'Content-Type': 'application/json',
                                },
                                body: exportData,
                                agent: prisma_yml_1.getProxyAgent(endpoint),
                            })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.text()];
                    case 2:
                        text = _a.sent();
                        try {
                            return [2 /*return*/, JSON.parse(text)];
                        }
                        catch (e) {
                            throw new Error(text);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.reset = function (serviceName, stage, token, workspaceSlug) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint, result, text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        endpoint = this.env.activeCluster.getApiEndpoint(serviceName, stage, workspaceSlug) +
                            '/private';
                        return [4 /*yield*/, fetch(endpoint, {
                                method: 'post',
                                headers: {
                                    Authorization: "Bearer " + token,
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    query: "mutation {\n          resetData\n        }",
                                }),
                                agent: prisma_yml_1.getProxyAgent(endpoint),
                            })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.text()];
                    case 2:
                        text = _a.sent();
                        try {
                            return [2 /*return*/, JSON.parse(text)];
                        }
                        catch (e) {
                            throw new Error(text);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.requestCloudToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var mutation, secret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mutation = "mutation {\n      requestCloudToken {\n        secret\n      }\n    }";
                        return [4 /*yield*/, this.cloudClient.request(mutation)];
                    case 1:
                        secret = (_a.sent()).requestCloudToken.secret;
                        return [2 /*return*/, secret];
                }
            });
        });
    };
    Client.prototype.cloudTokenRequest = function (secret) {
        return __awaiter(this, void 0, void 0, function () {
            var query, cloudTokenRequest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "query ($secret: String!) {\n      cloudTokenRequest(secret: $secret) {\n        secret\n        token\n      }\n    }";
                        return [4 /*yield*/, this.cloudClient.request(query, { secret: secret })];
                    case 1:
                        cloudTokenRequest = (_a.sent()).cloudTokenRequest;
                        return [2 /*return*/, cloudTokenRequest];
                }
            });
        });
    };
    Client.prototype.ensureAuth = function () {
        return __awaiter(this, void 0, void 0, function () {
            var authenticationPayload;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isAuthenticated()];
                    case 1:
                        authenticationPayload = _a.sent();
                        if (!!authenticationPayload.isAuthenticated) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.login()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.login = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var token, authenticationPayload, authenticated, secret, url, cloud;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = null;
                        this.out.action.start("Authenticating");
                        if (key) {
                            this.env.globalRC.cloudSessionKey = key;
                        }
                        return [4 /*yield*/, this.isAuthenticated()];
                    case 1:
                        authenticationPayload = _a.sent();
                        authenticated = authenticationPayload.isAuthenticated;
                        if (authenticated) {
                            this.out.action.stop();
                            this.out.log("Authenticated with " + authenticationPayload.account.login[0].email);
                            this.out.log(key ? 'Successfully signed in' : 'Already signed in');
                            if (key) {
                                this.env.saveGlobalRC();
                            }
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.requestCloudToken()];
                    case 2:
                        secret = _a.sent();
                        url = this.config.consoleEndpoint + "/cli-auth?secret=" + secret;
                        this.out.log("Opening " + url + " in the browser\n");
                        opn(url).catch(function (e) {
                            console.error("Could not open the authentication link, maybe this is an environment without a browser. Please open this url in your browser to authenticate: " + url);
                        });
                        _a.label = 3;
                    case 3:
                        if (!!token) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.cloudTokenRequest(secret)];
                    case 4:
                        cloud = _a.sent();
                        if (cloud.token) {
                            token = cloud.token;
                        }
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 1000); })];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 6:
                        this.env.globalRC.cloudSessionKey = token;
                        this.out.action.stop();
                        return [4 /*yield*/, this.isAuthenticated()];
                    case 7:
                        authenticationPayload = _a.sent();
                        return [4 /*yield*/, this.out.log("Authenticated with " + authenticationPayload.account.login[0].email)];
                    case 8:
                        _a.sent();
                        this.env.saveGlobalRC();
                        return [4 /*yield*/, this.env.fetchClusters()];
                    case 9:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.logout = function () {
        delete this.env.globalRC.cloudSessionKey;
        this.env.saveGlobalRC();
    };
    Client.prototype.getAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query, me;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "{\n      me {\n        id\n        name\n        login {\n          email\n        }\n      }\n    }";
                        return [4 /*yield*/, this.cloudClient.request(query)];
                    case 1:
                        me = (_a.sent()).me;
                        return [2 /*return*/, me];
                }
            });
        });
    };
    Client.prototype.getCloudServices = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query, me;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "\n  {\n    me {\n      memberships {\n        workspace {\n          services {\n            id\n            stage\n            name\n            cluster {\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n      ";
                        return [4 /*yield*/, this.cloudClient.request(query)];
                    case 1:
                        me = (_a.sent()).me;
                        return [2 /*return*/, lodash_1.flatten(me.memberships.map(function (m) { return m.workspace.services; }))];
                }
            });
        });
    };
    Client.prototype.generateClusterToken = function (workspaceSlug, clusterName, serviceName, stageName) {
        return __awaiter(this, void 0, void 0, function () {
            var query, clusterToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        debug('Calling generateClusterToken');
                        query = "\n      mutation ($input: GenerateClusterTokenRequest!) {\n        generateClusterToken(input: $input) {\n          clusterToken\n        }\n      }\n    ";
                        return [4 /*yield*/, this.cloudClient.request(query, {
                                input: {
                                    workspaceSlug: workspaceSlug,
                                    clusterName: clusterName,
                                    serviceName: serviceName,
                                    stageName: stageName,
                                },
                            })];
                    case 1:
                        clusterToken = (_a.sent()).generateClusterToken.clusterToken;
                        return [2 /*return*/, clusterToken];
                }
            });
        });
    };
    Client.prototype.isAuthenticated = function () {
        return __awaiter(this, void 0, void 0, function () {
            var authenticated, account, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        authenticated = false;
                        account = null;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.getAccount()];
                    case 2:
                        account = _a.sent();
                        if (account) {
                            authenticated = Boolean(account);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_4 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, {
                            isAuthenticated: authenticated,
                            account: account,
                        }];
                }
            });
        });
    };
    Client.prototype.getWorkspaces = function () {
        return __awaiter(this, void 0, void 0, function () {
            var query, memberships;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "{\n      me {\n        memberships {\n          workspace {\n            id\n            name\n            slug\n            clusters {\n              id\n              name\n              connectInfo {\n                endpoint\n              }\n            }\n          }\n        }\n      }\n    }";
                        return [4 /*yield*/, this.cloudClient.request(query)];
                    case 1:
                        memberships = (_a.sent()).me.memberships;
                        return [2 /*return*/, memberships.map(function (m) { return m.workspace; })];
                }
            });
        });
    };
    Client.prototype.addProject = function (name, stage, secrets) {
        return __awaiter(this, void 0, void 0, function () {
            var mutation, result, project;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mutation = "      mutation addProject($name: String! $stage: String! $secrets: [String!]) {\n        addProject(input: {\n          name: $name,\n          stage: $stage\n          secrets: $secrets\n        }) {\n          project {\n            name\n          }\n        }\n      }\n      ";
                        return [4 /*yield*/, this.client.request(mutation, {
                                name: name,
                                stage: stage,
                                secrets: secrets,
                            })];
                    case 1:
                        result = _a.sent();
                        if (!result) {
                            throw new Error("Could not create service " + name);
                        }
                        project = result.addProject.project;
                        // TODO set project definition, should be possibility in the addProject mutation
                        return [2 /*return*/, project];
                }
            });
        });
    };
    Client.prototype.deleteProject = function (name, stage, workspaceSlug) {
        return __awaiter(this, void 0, void 0, function () {
            var cluster, mutation, mutation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cluster = this.env.activeCluster;
                        if (!(!this.env.activeCluster.shared && !this.env.activeCluster.isPrivate)) return [3 /*break*/, 2];
                        mutation = "      mutation ($input: DeleteProjectInput!) {\n        deleteProject(input: $input) {\n          clientMutationId\n        }\n      }\n      ";
                        return [4 /*yield*/, this.client.request(mutation, {
                                input: {
                                    name: PrismaDefinition_1.concatName(cluster, name, workspaceSlug),
                                    stage: stage,
                                },
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        mutation = "        mutation ($input: ServiceDeletionInput!) {\n          deleteService(input: $input) {\n            id\n          }\n        }\n      ";
                        return [4 /*yield*/, this.cloudClient.request(mutation, {
                                input: {
                                    name: name,
                                    clusterName: cluster.name,
                                    workspaceSlug: workspaceSlug,
                                    stage: stage,
                                },
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.hasStepsApi = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.request(introspectionQuery_1.introspectionQuery)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, graphql_schema_1.hasTypeWithField(result, 'DeployPayload', 'steps')];
                }
            });
        });
    };
    Client.prototype.deploy = function (name, stage, types, dryRun, subscriptions, secrets, force, noMigration) {
        return __awaiter(this, void 0, void 0, function () {
            var oldMutation, introspectionResult, hasStepsApi, hasRelationManifestationApi, steps, noMigrationInput, newMutation, deploy, e_5, deploy;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        oldMutation = "      mutation($name: String!, $stage: String! $types: String! $dryRun: Boolean $secrets: [String!], $subscriptions: [FunctionInput!]) {\n        deploy(input: {\n          name: $name\n          stage: $stage\n          types: $types\n          dryRun: $dryRun\n          secrets: $secrets\n          subscriptions: $subscriptions\n        }) {\n          errors {\n            type\n            field\n            description\n          }\n          migration {\n            ...MigrationFragment\n          }\n        }\n      }\n      " + migrationFragment_1.renderMigrationFragment(false) + "\n    ";
                        return [4 /*yield*/, this.client.request(introspectionQuery_1.introspectionQuery)];
                    case 1:
                        introspectionResult = _a.sent();
                        hasStepsApi = graphql_schema_1.hasTypeWithField(introspectionResult, 'DeployPayload', 'steps');
                        hasRelationManifestationApi = graphql_schema_1.hasTypeWithField(introspectionResult, 'CreateRelation', 'after');
                        steps = hasStepsApi
                            ? "steps { " + migrationFragment_1.renderStepFragment(hasRelationManifestationApi) + " }"
                            : '';
                        if (noMigration &&
                            !graphql_schema_1.hasTypeWithField(introspectionResult, 'DeployInput', 'noMigration')) {
                            throw new Error("You provided the --no-migrate option, but the Prisma server doesn't support it yet. It's supported in Prisma 1.26 and above.");
                        }
                        noMigrationInput = noMigration ? 'noMigration: true' : '';
                        newMutation = "      mutation($name: String!, $stage: String! $types: String! $dryRun: Boolean $secrets: [String!], $subscriptions: [FunctionInput!], $force: Boolean) {\n        deploy(input: {\n          name: $name\n          stage: $stage\n          types: $types\n          dryRun: $dryRun\n          secrets: $secrets\n          subscriptions: $subscriptions\n          force: $force\n          " + noMigrationInput + "\n        }) {\n          errors {\n            type\n            field\n            description\n          }\n          warnings {\n            type\n            field\n            description\n          }\n          migration {\n            ...MigrationFragment\n          }\n          \n          " + steps + "\n        }\n      }\n      " + migrationFragment_1.renderMigrationFragment(hasRelationManifestationApi) + "\n    ";
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 8]);
                        return [4 /*yield*/, this.client.request(newMutation, {
                                name: name,
                                stage: stage,
                                types: types,
                                dryRun: dryRun,
                                secrets: secrets,
                                subscriptions: subscriptions,
                                force: force,
                            })];
                    case 3:
                        deploy = (_a.sent()).deploy;
                        return [2 /*return*/, deploy];
                    case 4:
                        e_5 = _a.sent();
                        if (!e_5.message.includes("Field 'force' is not defined in the input type")) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.client.request(oldMutation, {
                                name: name,
                                stage: stage,
                                types: types,
                                dryRun: dryRun,
                                secrets: secrets,
                                subscriptions: subscriptions,
                            })];
                    case 5:
                        deploy = (_a.sent()).deploy;
                        return [2 /*return*/, deploy];
                    case 6: throw e_5;
                    case 7: return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.listProjects = function () {
        return __awaiter(this, void 0, void 0, function () {
            var listProjects;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.request("\n      {\n        listProjects {\n          name\n          stage\n        }\n      }\n    ")];
                    case 1:
                        listProjects = (_a.sent()).listProjects;
                        return [2 /*return*/, listProjects];
                }
            });
        });
    };
    Client.prototype.getProject = function (name, stage) {
        return __awaiter(this, void 0, void 0, function () {
            var project;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.request("\n      query($name: String! $stage: String!) {\n        project(name: $name stage: $stage) {\n          name\n          stage\n        }\n      }\n    ", { name: name, stage: stage })];
                    case 1:
                        project = (_a.sent()).project;
                        return [2 /*return*/, project];
                }
            });
        });
    };
    Client.prototype.getCluster = function (name, stage) {
        return __awaiter(this, void 0, void 0, function () {
            var foundClusters, _i, _a, cluster, project, e_6, clusterNames;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        foundClusters = [];
                        _i = 0, _a = this.env.clusters;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        cluster = _a[_i];
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.client.request("\n            query ($name: String! $stage: String!) {\n              project (name: $name stage: $stage) {\n                name\n                stage\n              }\n            }\n          ", {
                                name: name,
                                stage: stage,
                            })];
                    case 3:
                        project = (_b.sent()).project;
                        if (project) {
                            foundClusters.push(cluster);
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        e_6 = _b.sent();
                        return [3 /*break*/, 5];
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6:
                        if (foundClusters.length === 1) {
                            return [2 /*return*/, foundClusters[0]];
                        }
                        if (foundClusters.length > 1) {
                            clusterNames = foundClusters.map(function (c) { return c.name; }).join(', ');
                            throw new Error("The service name / stage combination \"" + name + "@" + stage + "\" is ambigious. It exists in clusters " + clusterNames);
                        }
                        return [2 /*return*/, null];
                }
            });
        });
    };
    Client.prototype.getClusterSafe = function (name, stage) {
        return __awaiter(this, void 0, void 0, function () {
            var cluster;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCluster(name, stage)];
                    case 1:
                        cluster = _a.sent();
                        if (!cluster) {
                            throw new Error("No cluster for \"" + name + "@" + stage + "\" found. Please make sure to deploy the stage " + stage);
                        }
                        return [2 /*return*/, cluster];
                }
            });
        });
    };
    Client.prototype.waitForLocalDocker = function (endpoint) {
        return __awaiter(this, void 0, void 0, function () {
            var valid, client, e_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        valid = false;
                        client = new graphql_request_1.GraphQLClient(endpoint, {
                            agent: prisma_yml_1.getProxyAgent(endpoint),
                        });
                        _a.label = 1;
                    case 1:
                        if (!!valid) return [3 /*break*/, 7];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, client.request("\n            {\n              __schema {\n                directives {\n                  description\n                }\n              }\n            }\n            ")];
                    case 3:
                        _a.sent();
                        valid = true;
                        return [3 /*break*/, 5];
                    case 4:
                        e_7 = _a.sent();
                        debug(e_7);
                        valid = false;
                        return [3 /*break*/, 5];
                    case 5: return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 500); })];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    Client.prototype.getMigration = function (name, stage) {
        return __awaiter(this, void 0, void 0, function () {
            var migrationStatus;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.request("query ($name: String! $stage: String!) {\n          migrationStatus(name: $name stage: $stage) {\n            projectId\n            revision\n            status\n            applied\n            rolledBack\n            errors\n          }\n        }\n      ", {
                            stage: stage,
                            name: name,
                        })];
                    case 1:
                        migrationStatus = (_a.sent()).migrationStatus;
                        return [2 /*return*/, migrationStatus];
                }
            });
        });
    };
    Client.prototype.authenticateCustomer = function (endpoint, token) {
        return __awaiter(this, void 0, void 0, function () {
            var client, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = new graphql_request_1.GraphQLClient(endpoint, {
                            agent: prisma_yml_1.getProxyAgent(endpoint),
                        });
                        return [4 /*yield*/, client.request("\n      mutation ($token: String!) {\n        authenticateCustomer(input: {\n          auth0IdToken: $token\n        }) {\n          token\n          user {\n            id\n          }\n        }\n      }\n      ", { token: token })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.authenticateCustomer];
                }
            });
        });
    };
    return Client;
}());
exports.Client = Client;
// only make this available in test mode
// if (process.env.NODE_ENV === 'test') {
//   Client.prototype.mock = function({ request, response }) {
//     if (!this.mocks) {
//       this.mocks = {}
//     }
//     this.mocks[JSON.stringify(request, null, 2)] = response
//   }
// }
function normalizeName(name) {
    return name.toLowerCase().trim();
}
//# sourceMappingURL=Client.js.map