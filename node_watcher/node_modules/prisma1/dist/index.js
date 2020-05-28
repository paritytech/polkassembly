#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var semver = require("semver");
var fs = require("fs-extra");
var prisma_cli_engine_1 = require("prisma-cli-engine");
// import 'require-onct'
var root = path.join(__dirname, '..');
var pjson = fs.readJsonSync(path.join(root, 'package.json'));
var nodeVersion = process.version.split('v')[1];
if (!semver.satisfies(nodeVersion, pjson.engines.node)) {
    process.stderr.write("ERROR: Node version must be " + pjson.engines.node + " to use the Prisma CLI");
    process.exit(1);
}
prisma_cli_engine_1.run({ config: { root: root, mock: false } });
//# sourceMappingURL=index.js.map