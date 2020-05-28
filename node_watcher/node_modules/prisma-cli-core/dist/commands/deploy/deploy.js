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
var chalk_1 = require("chalk");
var path = require("path");
var fs = require("fs-extra");
var Seeder_1 = require("../seed/Seeder");
var debug = require('debug')('deploy');
var util_1 = require("../../utils/util");
var EndpointDialog_1 = require("../../utils/EndpointDialog");
var npm_run_1 = require("npm-run");
var child_process_1 = require("child_process");
var figures = require("figures");
var satisfiesVersion_1 = require("../../utils/satisfiesVersion");
var generate_1 = require("../generate/generate");
var Deploy = /** @class */ (function (_super) {
    __extends(Deploy, _super);
    function Deploy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.showedHooks = false;
        return _this;
    }
    Deploy.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            var force, interactive, envFile, dryRun, noMigrate, noGenerate, noHook, serviceName, stage, workspace, cluster, endpointDialog, results, _a, projectNew;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        force = this.flags.force;
                        interactive = this.flags.new // new is a reserved keyword, so we use interactive instead
                        ;
                        envFile = this.flags['env-file'];
                        dryRun = this.flags['dry-run'];
                        noMigrate = this.flags['no-migrate'];
                        noGenerate = this.flags['no-generate'];
                        noHook = this.flags['skip-hooks'];
                        if (!(envFile && !fs.pathExistsSync(path.join(this.config.cwd, envFile)))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.out.error("--env-file path '" + envFile + "' does not exist")];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2: 
                    /**
                     * Get prisma.yml content
                     */
                    return [4 /*yield*/, this.definition.load(this.flags, envFile)];
                    case 3:
                        /**
                         * Get prisma.yml content
                         */
                        _b.sent();
                        if (!!this.definition.definition.datamodel) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.out.error("The property " + chalk_1.default.bold('datamodel') + " is missing in your prisma.yml")];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5:
                        serviceName = this.definition.service;
                        stage = this.definition.stage;
                        workspace = this.definition.getWorkspace();
                        if (!(!serviceName || !stage || interactive)) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.env.fetchClusters()];
                    case 6:
                        _b.sent();
                        endpointDialog = new EndpointDialog_1.EndpointDialog({
                            out: this.out,
                            client: this.client,
                            env: this.env,
                            config: this.config,
                            definition: this.definition,
                            shouldAskForGenerator: false,
                        });
                        return [4 /*yield*/, endpointDialog.getEndpoint()];
                    case 7:
                        results = _b.sent();
                        cluster = results.cluster;
                        workspace = results.workspace;
                        serviceName = results.service;
                        stage = results.stage;
                        this.definition.replaceEndpoint(results.endpoint);
                        // Reload definition because we are changing the yml file
                        return [4 /*yield*/, this.definition.load(this.flags, envFile)];
                    case 8:
                        // Reload definition because we are changing the yml file
                        _b.sent();
                        this.out.log("\nWritten endpoint `" + chalk_1.default.bold(results.endpoint) + "` to prisma.yml\n");
                        return [3 /*break*/, 11];
                    case 9: return [4 /*yield*/, this.definition.getCluster(false)];
                    case 10:
                        cluster = _b.sent();
                        _b.label = 11;
                    case 11:
                        _a = cluster && cluster.local;
                        if (!_a) return [3 /*break*/, 13];
                        return [4 /*yield*/, cluster.isOnline()];
                    case 12:
                        _a = !(_b.sent());
                        _b.label = 13;
                    case 13:
                        if (_a) {
                            throw new Error("Could not connect to server at " + cluster.baseUrl + ". Please check if your server is running.");
                        }
                        /**
                         * Abort when no cluster is set
                         */
                        if (cluster) {
                            this.env.setActiveCluster(cluster);
                        }
                        else {
                            throw new Error("Cluster " + cluster + " does not exist.");
                        }
                        if (!(cluster && !cluster.local && cluster.isPrivate)) return [3 /*break*/, 15];
                        if (!workspace) {
                            workspace = this.definition.getWorkspace();
                        }
                        if (!(workspace &&
                            !workspace.startsWith('public-') &&
                            !process.env.PRISMA_MANAGEMENT_API_SECRET &&
                            (!this.env.cloudSessionKey || this.env.cloudSessionKey === ''))) return [3 /*break*/, 15];
                        return [4 /*yield*/, this.client.login()];
                    case 14:
                        _b.sent();
                        cluster.clusterSecret = this.env.cloudSessionKey;
                        _b.label = 15;
                    case 15: return [4 /*yield*/, this.client.initClusterClient(cluster, serviceName, stage, workspace)];
                    case 16:
                        _b.sent();
                        projectNew = false;
                        debug('checking if project exists');
                        return [4 /*yield*/, this.projectExists(cluster, serviceName, stage, workspace)];
                    case 17:
                        if (!!(_b.sent())) return [3 /*break*/, 19];
                        debug('adding project');
                        return [4 /*yield*/, this.addProject(cluster, serviceName, stage, workspace)];
                    case 18:
                        _b.sent();
                        projectNew = true;
                        _b.label = 19;
                    case 19: return [4 /*yield*/, this.deploy(stage, serviceName, cluster, cluster.name, force, dryRun, projectNew, workspace, noMigrate, noGenerate, noHook)];
                    case 20:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Deploy.prototype.projectExists = function (cluster, name, stage, workspace) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = Boolean;
                        return [4 /*yield*/, this.client.getProject(util_1.concatName(cluster, name, workspace), stage)];
                    case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()])];
                    case 2:
                        e_1 = _b.sent();
                        return [2 /*return*/, false];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Deploy.prototype.addProject = function (cluster, name, stage, workspace) {
        return __awaiter(this, void 0, void 0, function () {
            var createdProject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.out.action.start("Creating stage " + stage + " for service " + name);
                        return [4 /*yield*/, this.client.addProject(util_1.concatName(cluster, name, workspace), stage, this.definition.secrets)];
                    case 1:
                        createdProject = _a.sent();
                        this.out.action.stop();
                        return [2 /*return*/];
                }
            });
        });
    };
    Deploy.prototype.deploy = function (stageName, serviceName, cluster, completeClusterName, force, dryRun, projectNew, workspace, noMigrate, noGenerate, noHook) {
        return __awaiter(this, void 0, void 0, function () {
            var before, b, verb, migrationResult, done, migration, hooks, _i, hooks_1, hook, splittedHook, isPackaged, spawnPath, child, stderr, stdout, status_1, error, done, migration, isGenerateHookPresent, generateCommand;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        before = Date.now();
                        b = function (s) { return "`" + chalk_1.default.bold(s) + "`"; };
                        verb = dryRun ? 'Performing dry run for' : 'Deploying';
                        this.out.action.start(verb + " service " + b(serviceName) + " to stage " + b(stageName) + " to server " + b(completeClusterName));
                        return [4 /*yield*/, this.client.deploy(util_1.concatName(cluster, serviceName, workspace), stageName, this.definition.typesString, dryRun, this.definition.getSubscriptions(), this.definition.secrets, force, noMigrate)];
                    case 1:
                        migrationResult = _a.sent();
                        this.out.action.stop(util_1.prettyTime(Date.now() - before));
                        this.printResult(migrationResult, force, dryRun);
                        if (!(migrationResult.migration &&
                            migrationResult.migration.revision > 0 &&
                            !dryRun)) return [3 /*break*/, 6];
                        before = Date.now();
                        this.out.action.start("Applying changes", this.getProgress(0, migrationResult.migration.steps.length));
                        done = false;
                        _a.label = 2;
                    case 2:
                        if (!!done) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.client.getMigration(util_1.concatName(cluster, serviceName, workspace), stageName)];
                    case 3:
                        migration = _a.sent();
                        if (migration.errors && migration.errors.length > 0) {
                            this.out.action.stop(util_1.prettyTime(Date.now() - before));
                            throw new Error("The Migration failed and has not been performed. This is very likely not a transient issue.\n" +
                                migration.errors.join('\n'));
                        }
                        /**
                         * Read more here about the different deployment statuses https://github.com/prisma/prisma/issues/3326
                         */
                        if (migration.applied === migrationResult.migration.steps.length ||
                            ['SUCCESS', 'ROLLBACK_SUCCESS', 'ROLLBACK_FAILURE'].includes(migration.status)) {
                            done = true;
                        }
                        this.out.action.status = this.getProgress(migration.applied, migrationResult.migration.steps.length);
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 500); })];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 2];
                    case 5:
                        this.out.action.stop(util_1.prettyTime(Date.now() - before));
                        _a.label = 6;
                    case 6:
                        hooks = this.definition.getHooks('post-deploy');
                        if (!noHook) {
                            if (hooks.length > 0) {
                                this.out.log("\n" + chalk_1.default.bold('post-deploy') + ":");
                            }
                            for (_i = 0, hooks_1 = hooks; _i < hooks_1.length; _i++) {
                                hook = hooks_1[_i];
                                splittedHook = hook.split(' ');
                                this.out.action.start("Running " + chalk_1.default.cyan(hook));
                                isPackaged = fs.existsSync('/snapshot');
                                debug({ isPackaged: isPackaged });
                                spawnPath = isPackaged ? child_process_1.spawnSync : npm_run_1.spawnSync;
                                child = spawnPath(splittedHook[0], splittedHook.slice(1));
                                stderr = child.stderr && child.stderr.toString();
                                if (stderr && stderr.length > 0) {
                                    this.out.log(chalk_1.default.red(stderr));
                                }
                                stdout = child.stdout && child.stdout.toString();
                                if (stdout && stdout.length > 0) {
                                    this.out.log(stdout);
                                }
                                status_1 = child.status, error = child.error;
                                if (error || status_1 !== 0) {
                                    if (error) {
                                        this.out.log(chalk_1.default.red(error.message));
                                    }
                                    this.out.action.stop(chalk_1.default.red(figures.cross));
                                }
                                else {
                                    this.out.action.stop();
                                }
                            }
                        }
                        else {
                            debug('Hooks are disabled by the --skip-hooks flag');
                        }
                        if (!(migrationResult &&
                            migrationResult.migration &&
                            migrationResult.migration.revision > 0 &&
                            !dryRun &&
                            !noGenerate)) return [3 /*break*/, 11];
                        done = false;
                        _a.label = 7;
                    case 7:
                        if (!!done) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.client.getMigration(util_1.concatName(cluster, serviceName, workspace), stageName)];
                    case 8:
                        migration = _a.sent();
                        if ((migration.errors &&
                            migration.errors.length === 0 &&
                            migration.applied === migrationResult.migration.steps.length) ||
                            ['SUCCESS'].includes(migration.status)) {
                            done = true;
                            isGenerateHookPresent = hooks.some(function (hook) { return hook.includes('prisma') && hook.includes('generate'); });
                            if (!noHook && isGenerateHookPresent) {
                                this.out.log(chalk_1.default.yellow("Warning: The `prisma generate` command was executed twice. Since Prisma 1.31, the Prisma client is generated automatically after running `prisma deploy`. It is not necessary to generate it via a `post-deploy` hook any more, you can therefore remove the hook if you do not need it otherwise."));
                            }
                            generateCommand = new generate_1.default({
                                config: this.config
                            });
                            generateCommand.run();
                        }
                        else {
                            debug('skipping implicit generate at migration polling');
                        }
                        return [4 /*yield*/, new Promise(function (r) { return setTimeout(r, 500); })];
                    case 9:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        debug('skipping implicit generate at migrationResult');
                        _a.label = 12;
                    case 12:
                        if (!migrationResult.migration) return [3 /*break*/, 16];
                        if (!(this.definition.definition.seed &&
                            !this.flags['no-seed'] &&
                            projectNew)) return [3 /*break*/, 14];
                        if (!noHook) {
                            this.printHooks();
                        }
                        return [4 /*yield*/, this.seed(cluster, projectNew, serviceName, stageName, this.definition.getWorkspace())];
                    case 13:
                        _a.sent();
                        _a.label = 14;
                    case 14:
                        if (!migrationResult.migration) return [3 /*break*/, 16];
                        return [4 /*yield*/, this.printEndpoints(cluster, serviceName, stageName, this.definition.getWorkspace() || undefined)];
                    case 15:
                        _a.sent();
                        _a.label = 16;
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    Deploy.prototype.printHooks = function () {
        if (!this.showedHooks) {
            this.out.log(chalk_1.default.bold("\nHooks:"));
            this.showedHooks = true;
        }
    };
    Deploy.prototype.getProgress = function (applied, of) {
        return this.out.color.prisma("(" + applied + "/" + of + ")");
    };
    Deploy.prototype.seed = function (cluster, projectNew, serviceName, stageName, workspace) {
        return __awaiter(this, void 0, void 0, function () {
            var seeder, before, seedSource;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        seeder = new Seeder_1.Seeder(this.definition, this.client, this.out, this.config);
                        before = Date.now();
                        seedSource = this.definition.definition.seed.import ||
                            this.definition.definition.seed.run;
                        if (!seedSource) {
                            this.out.log(chalk_1.default.yellow('Invalid seed property in `prisma.yml`. Please use `import` or `run` under the `seed` property. Follow the docs for more info: http://bit.ly/prisma-seed-optional'));
                        }
                        else {
                            this.out.action.start("Seeding based on " + chalk_1.default.bold(seedSource));
                        }
                        return [4 /*yield*/, seeder.seed(util_1.concatName(cluster, serviceName, workspace), stageName)];
                    case 1:
                        _a.sent();
                        this.out.action.stop(util_1.prettyTime(Date.now() - before));
                        return [2 /*return*/];
                }
            });
        });
    };
    Deploy.prototype.printResult = function (payload, force, dryRun) {
        if (payload.errors && payload.errors.length > 0) {
            this.out.log("" + chalk_1.default.bold.red('\nErrors:'));
            this.out.migration.printErrors(payload.errors);
            this.out.log('\nDeployment canceled. Please fix the above errors to continue deploying.');
            this.out.log('Read more about deployment errors here: https://bit.ly/prisma-force-flag');
            this.out.exit(1);
        }
        if (payload.warnings && payload.warnings.length > 0) {
            this.out.log("" + chalk_1.default.bold.yellow('\nWarnings:'));
            this.out.migration.printWarnings(payload.warnings);
            if (force) {
                this.out.log('\nIgnoring warnings because you provided --force.');
            }
            else {
                this.out.log("\nIf you want to ignore the warnings, please deploy with the --force flag: " + chalk_1.default.cyan('$ prisma deploy --force'));
                this.out.log('Read more about deployment warnings here: https://bit.ly/prisma-force-flag');
                this.out.exit(1);
            }
        }
        var steps = payload.steps || (payload.migration && payload.migration.steps) || [];
        if (steps.length === 0) {
            if (dryRun) {
                this.out.log('There are no changes.');
            }
            else {
                this.out.log('Service is already up to date.');
            }
            return;
        }
        if (steps.length > 0) {
            this.out.log('\n' + chalk_1.default.bold(dryRun ? 'Potential changes:' : 'Changes:'));
            this.out.migration.printMessages(steps);
            this.out.log('');
        }
    };
    Deploy.prototype.printEndpoints = function (cluster, serviceName, stageName, workspace) {
        return __awaiter(this, void 0, void 0, function () {
            var version, hasAdmin, adminText;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, cluster.getVersion()];
                    case 1:
                        version = _a.sent();
                        hasAdmin = satisfiesVersion_1.satisfiesVersion(version, '1.29.0');
                        adminText = hasAdmin
                            ? util_1.printAdminLink(cluster.getApiEndpoint(serviceName, stageName, workspace))
                            : '';
                        this.out.log("\n" + 'Your Prisma endpoint is live:' + "\n\n  " + 'HTTP:' + "  " + cluster.getApiEndpoint(serviceName, stageName, workspace) + "\n  " + 'WS:' + "    " + cluster.getWSEndpoint(serviceName, stageName, workspace) + adminText + "\n");
                        return [2 /*return*/];
                }
            });
        });
    };
    Deploy.topic = 'deploy';
    Deploy.description = 'Deploy service changes (or new service)';
    Deploy.group = 'general';
    Deploy.printVersionSyncWarning = true;
    Deploy.help = "\n  \n  " + chalk_1.default.green.bold('Examples:') + "\n      \n" + chalk_1.default.gray('-') + " Deploy local changes from prisma.yml to the default service environment.\n  " + chalk_1.default.green('$ prisma deploy') + "\n    \n" + chalk_1.default.gray('-') + " Deploy local changes from default service file accepting potential data loss caused by schema changes\n  " + chalk_1.default.green('$ prisma deploy --force') + "\n  ";
    Deploy.flags = (_a = {
            force: prisma_cli_engine_1.flags.boolean({
                char: 'f',
                description: 'Accept data loss caused by schema changes',
            }),
            new: prisma_cli_engine_1.flags.boolean({
                char: 'n',
                description: 'Force interactive mode to select the cluster',
            }),
            'dry-run': prisma_cli_engine_1.flags.boolean({
                char: 'd',
                description: 'Perform a dry-run of the deployment',
            }),
            'no-seed': prisma_cli_engine_1.flags.boolean({
                description: 'Disable seed on initial service deploy',
            }),
            json: prisma_cli_engine_1.flags.boolean({
                char: 'j',
                description: 'Json Output',
            }),
            'no-migrate': prisma_cli_engine_1.flags.boolean({
                description: 'Disable migrations. Prisma 1.26 and above needed',
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
        _a['no-generate'] = prisma_cli_engine_1.flags.boolean({
            description: 'Disable implicit client generation',
        }),
        _a['skip-hooks'] = prisma_cli_engine_1.flags.boolean({
            description: 'Disable hooks on deploy',
        }),
        _a);
    return Deploy;
}(prisma_cli_engine_1.Command));
exports.default = Deploy;
function isValidProjectName(projectName) {
    return /^[A-Z](.*)/.test(projectName);
}
exports.isValidProjectName = isValidProjectName;
//# sourceMappingURL=deploy.js.map