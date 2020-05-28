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
var prisma_cli_engine_1 = require("prisma-cli-engine");
var fs = require("fs-extra");
var path = require("path");
var chalk_1 = require("chalk");
var EndpointDialog_1 = require("../../utils/EndpointDialog");
var dockerComposeInstalled_1 = require("../../utils/dockerComposeInstalled");
var npm_run_1 = require("npm-run");
var child_process_1 = require("child_process");
var figures = require("figures");
var debug = require('debug')('init');
var Init = /** @class */ (function (_super) {
    __extends(Init, _super);
    function Init() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Init.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dirName, newDefinitionDir, endpoint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dirName = this.args.dirName;
                        if (dirName) {
                            newDefinitionDir = path.join(this.config.cwd, dirName + '/');
                            this.config.definitionDir = newDefinitionDir;
                        }
                        else {
                            this.config.definitionDir = this.config.cwd;
                        }
                        endpoint = this.flags.endpoint;
                        return [4 /*yield*/, this.runInit({ endpoint: endpoint })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Init.prototype.runInit = function (_a) {
        var endpoint = _a.endpoint;
        return __awaiter(this, void 0, void 0, function () {
            var files, datamodelBoilerplatePath, prismaYml, endpointSteps, endpointDir, endpointCreatedFiles, endpointDialog, results, databaseTypeString, prismaYmlString, dir, isLocal, steps, createdFiles, isPackaged, spawnPath, child, stderr, stdout, status_1, error, dockerComposeInstalled;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        files = [];
                        try {
                            files = fs.readdirSync(this.config.definitionDir);
                        }
                        catch (e) {
                            debug("prisma init workflow called without existing directory.");
                            debug(e.toString());
                        }
                        // the .prismarc must be allowed for the docker version to be functioning
                        if (files.length > 0 &&
                            (files.includes('prisma.yml') || files.includes('datamodel.prisma'))) {
                            this.out.log("\nThe directory " + chalk_1.default.cyan(this.config.definitionDir) + " contains files that could conflict:\n\n" + files.map(function (f) { return "  " + f; }).join('\n') + "\n\nEither try using a new directory name, or remove the files listed above.\n      ");
                            this.out.exit(1);
                        }
                        /**
                         * If there is a predefined endpoint provided as a cli arg
                         */
                        if (endpoint) {
                            fs.mkdirpSync(this.config.definitionDir);
                            datamodelBoilerplatePath = this.definition.definition &&
                                this.definition.definition.databaseType === 'document'
                                ? path.join(__dirname, 'boilerplate', 'datamodel-mongo.prisma')
                                : path.join(__dirname, 'boilerplate', 'datamodel.prisma');
                            fs.writeFileSync(path.join(this.config.definitionDir, 'datamodel.prisma'), fs.readFileSync(datamodelBoilerplatePath));
                            prismaYml = "endpoint: " + endpoint + "\ndatamodel: datamodel.prisma\n";
                            fs.writeFileSync(path.join(this.config.definitionDir, 'prisma.yml'), prismaYml);
                            endpointSteps = [];
                            endpointDir = this.args.dirName;
                            if (endpointDir) {
                                endpointSteps.push("Open folder: " + chalk_1.default.cyan("cd " + endpointDir));
                            }
                            endpointSteps.push("Deploy your Prisma service: " + chalk_1.default.cyan('prisma deploy'));
                            endpointCreatedFiles = [
                                "  " + chalk_1.default.cyan('prisma.yml') + "           Prisma service definition",
                                "  " + chalk_1.default.cyan('datamodel.prisma') + "    GraphQL SDL-based datamodel (foundation for database)",
                            ];
                            this.out.log("\n" + chalk_1.default.bold("Created " + endpointCreatedFiles.length + " new files:                                                                          ") + "\n\n" + endpointCreatedFiles.join('\n') + "\n\n" + chalk_1.default.bold('Next steps:') + "\n\n" + endpointSteps.map(function (step, index) { return "  " + (index + 1) + ". " + step; }).join('\n'));
                            this.out.exit(0);
                        }
                        return [4 /*yield*/, this.env.fetchClusters()];
                    case 1:
                        _b.sent();
                        endpointDialog = new EndpointDialog_1.EndpointDialog({
                            out: this.out,
                            client: this.client,
                            env: this.env,
                            config: this.config,
                            definition: this.definition,
                            shouldAskForGenerator: true,
                        });
                        return [4 /*yield*/, endpointDialog.getEndpoint()];
                    case 2:
                        results = _b.sent();
                        databaseTypeString = results.database && results.database.type === 'mongo'
                            ? '\ndatabaseType: document'
                            : '';
                        prismaYmlString = "endpoint: " + results.endpoint + "\ndatamodel: datamodel.prisma" + databaseTypeString;
                        if (results.generator && results.generator !== 'no-generation') {
                            prismaYmlString += this.getGeneratorConfig(results.generator);
                        }
                        fs.mkdirpSync(this.config.definitionDir);
                        fs.writeFileSync(path.join(this.config.definitionDir, 'prisma.yml'), prismaYmlString);
                        fs.writeFileSync(path.join(this.config.definitionDir, "datamodel.prisma"), results.datamodel);
                        if (results.cluster.local && results.writeDockerComposeYml) {
                            debug("prisma init: writing docker-compose.yml");
                            fs.writeFileSync(path.join(this.config.definitionDir, 'docker-compose.yml'), results.dockerComposeYml);
                        }
                        if (results.managementSecret) {
                            fs.writeFileSync(path.join(this.config.definitionDir, '.env'), "PRISMA_MANAGEMENT_API_SECRET=" + results.managementSecret);
                        }
                        dir = this.args.dirName;
                        isLocal = results.cluster.local && results.writeDockerComposeYml;
                        steps = [];
                        if (dir) {
                            steps.push("Open folder: " + chalk_1.default.cyan("cd " + dir));
                        }
                        if (results.cluster.local && results.writeDockerComposeYml) {
                            steps.push("Start your Prisma server: " + chalk_1.default.cyan('docker-compose up -d'));
                        }
                        steps.push("Deploy your Prisma service: " + chalk_1.default.cyan('prisma deploy'));
                        if (results.database && results.database.alreadyData) {
                            steps.push("Read more about introspection:\n     http://bit.ly/prisma-introspection");
                        }
                        else if ((results.database && !results.database.alreadyData) ||
                            results.newDatabase) {
                            steps.push("Read more about Prisma server:\n     http://bit.ly/prisma-server-overview");
                        }
                        else {
                            steps.push("Read more about deploying services:\n     http://bit.ly/prisma-deploy-services");
                        }
                        createdFiles = [
                            "  " + chalk_1.default.cyan('prisma.yml') + "           Prisma service definition",
                            "  " + chalk_1.default.cyan('datamodel.prisma') + "    GraphQL SDL-based datamodel (foundation for database)",
                        ];
                        if (isLocal) {
                            createdFiles.push("  " + chalk_1.default.cyan('docker-compose.yml') + "   Docker configuration file");
                        }
                        if (results.managementSecret) {
                            createdFiles.push("  " + chalk_1.default.cyan('.env') + "                 Env file including PRISMA_API_MANAGEMENT_SECRET");
                        }
                        this.out.log("\n" + chalk_1.default.bold("Created " + createdFiles.length + " new files:                                                                          ") + "\n\n" + createdFiles.join('\n') + "\n\n" + chalk_1.default.bold('Next steps:') + "\n\n" + steps.map(function (step, index) { return "  " + (index + 1) + ". " + step; }).join('\n'));
                        if (results.generator && results.generator !== 'no-generation') {
                            try {
                                process.chdir(this.config.definitionDir);
                            }
                            catch (err) {
                                this.out.log(chalk_1.default.red(err));
                            }
                            isPackaged = fs.existsSync('/snapshot');
                            debug({ isPackaged: isPackaged });
                            spawnPath = isPackaged ? child_process_1.spawnSync : npm_run_1.spawnSync;
                            child = spawnPath('prisma', ['generate']);
                            stderr = child.stderr && child.stderr.toString();
                            if (stderr && stderr.length > 0) {
                                this.out.log(chalk_1.default.red(stderr));
                            }
                            stdout = child.stdout && child.stdout.toString();
                            if (stdout && stdout.length > 0) {
                                this.out.log(chalk_1.default.white(stdout));
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
                            prismaYmlString += this.getGeneratorConfig(results.generator);
                        }
                        if (!isLocal) return [3 /*break*/, 4];
                        return [4 /*yield*/, dockerComposeInstalled_1.isDockerComposeInstalled()];
                    case 3:
                        dockerComposeInstalled = _b.sent();
                        if (!dockerComposeInstalled) {
                            this.out.log("\nTo install docker-compose, please follow this link: " + chalk_1.default.cyan('https://docs.docker.com/compose/install/'));
                        }
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Init.prototype.getGeneratorConfig = function (generator) {
        return "\n\ngenerate:\n  - generator: " + generator + "\n    output: ./generated/prisma-client/";
    };
    Init.topic = 'init';
    Init.description = 'Initialize a new service';
    Init.printVersionSyncWarning = true;
    Init.args = [
        {
            name: 'dirName',
            description: 'Folder to initialize in (optional)',
        },
    ];
    Init.flags = {
        endpoint: prisma_cli_engine_1.flags.string({
            char: 'e',
            description: 'Initial service endpoint (optional)',
            required: false,
        }),
    };
    return Init;
}(prisma_cli_engine_1.Command));
exports.default = Init;
//# sourceMappingURL=init.js.map