"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
var devPrefix = process.env.ENV === 'DEV' ? 'dev.' : '';
exports.consoleURL = function (token, projectName) {
    return "https://" + devPrefix + "console.graph.cool/token?token=" + token + (projectName ? "&redirect=/" + encodeURIComponent(projectName) : '');
};
// export const playgroundURL = (token: string, projectName: string) =>
function sortByTimestamp(a, b) {
    return a.timestamp < b.timestamp ? -1 : 1;
}
exports.sortByTimestamp = sortByTimestamp;
/**
 * Print a list of [['key', 'value'],...] pairs properly padded
 * @param {string[][]} arr1
 * @param {number} spaceLeft
 * @param {number} spaceBetween
 */
exports.prettyProject = function (p) { return chalk_1.default.bold(p.name) + " (" + p.id + ")"; };
function prettyTime(time) {
    var output = time > 1000 ? (Math.round(time / 100) / 10).toFixed(1) + 's' : time + 'ms';
    return chalk_1.default.cyan(output);
}
exports.prettyTime = prettyTime;
function concatName(cluster, name, workspace) {
    if (cluster.shared) {
        var workspaceString = workspace ? workspace + "~" : '';
        return "" + workspaceString + name;
    }
    return name;
}
exports.concatName = concatName;
exports.defaultDataModel = "type User {\n  id: ID! @id\n  name: String!\n}\n";
exports.defaultMongoDataModel = "type User {\n  id: ID! @id\n  name: String!\n}\n";
exports.defaultDockerCompose = "version: '3'\nservices:\n  prisma:\n    image: prismagraphql/prisma:1.34\n    restart: always\n    ports:\n    - \"4466:4466\"\n    environment:\n      PRISMA_CONFIG: |\n        port: 4466\n        # uncomment the next line and provide the env var PRISMA_MANAGEMENT_API_SECRET=my-secret to activate cluster security\n        # managementApiSecret: my-secret\n";
exports.printAdminLink = function (link) { return "\n\nYou can view & edit your data here:\n\n  " + chalk_1.default.bold("Prisma Admin: " + link + "/_admin"); };
//# sourceMappingURL=util.js.map