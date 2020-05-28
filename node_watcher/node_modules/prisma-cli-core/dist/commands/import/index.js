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
var fs = require("fs-extra");
var Importer_1 = require("./Importer");
var chalk_1 = require("chalk");
var Import = /** @class */ (function (_super) {
    __extends(Import, _super);
    function Import() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Import.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data, envFile, serviceName, stage, cluster;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = this.flags.data;
                        envFile = this.flags['env-file'];
                        return [4 /*yield*/, this.definition.load(this.flags, envFile)];
                    case 1:
                        _a.sent();
                        serviceName = this.definition.service;
                        stage = this.definition.stage;
                        return [4 /*yield*/, this.definition.getCluster()];
                    case 2:
                        cluster = _a.sent();
                        this.env.setActiveCluster(cluster);
                        if (this.definition.definition.databaseType &&
                            this.definition.definition.databaseType === 'document') {
                            throw new Error("Import is not yet supported for document stores. Please use the native import features of your database. \n        \n        More info here: https://docs.mongodb.com/manual/reference/program/mongorestore/");
                        }
                        else {
                            this.out.log(chalk_1.default.yellow("Warning: The `prisma import` command will not be further developed in the future. Please use the native import features of your database for these workflows. \n    \nMore info here:\nMySQL: https://dev.mysql.com/doc/refman/5.7/en/mysqlimport.html\nPostgres: https://www.postgresql.org/docs/10/app-pgrestore.html\n"));
                        }
                        if (!fs.pathExistsSync(data)) {
                            throw new Error("Path " + data + " does not exist");
                        }
                        if (!data.endsWith('.zip') && !fs.lstatSync(data).isDirectory()) {
                            throw new Error("data must be a directory or end with .zip");
                        }
                        // continue
                        return [4 /*yield*/, this.import(data, serviceName, stage, this.definition.getToken(serviceName, stage), this.definition.getWorkspace() || undefined)];
                    case 3:
                        // continue
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Import.prototype.import = function (source, serviceName, stage, token, workspaceSlug) {
        return __awaiter(this, void 0, void 0, function () {
            var typesString, importer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.definition.load({})];
                    case 1:
                        _a.sent();
                        typesString = this.definition.typesString;
                        importer = new Importer_1.Importer(source, typesString, this.client, this.out, this.config);
                        return [4 /*yield*/, importer.upload(serviceName, stage, token, workspaceSlug)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Import.topic = 'import';
    Import.description = 'Import data into a service';
    Import.printVersionSyncWarning = true;
    Import.flags = (_a = {
            data: prisma_cli_engine_1.flags.string({
                char: 'd',
                description: 'Path to zip or folder including data to import',
                required: true,
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
        _a);
    return Import;
}(prisma_cli_engine_1.Command));
exports.default = Import;
//# sourceMappingURL=index.js.map