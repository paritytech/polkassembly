"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var semver = require("semver");
function normalizeVersion(version) {
    version = version.replace(/-beta.*/, '').replace('-alpha', '');
    var regex = /(\d+\.\d+)/;
    var match = regex.exec(version);
    if (match) {
        return match[1] + '.0';
    }
    return version;
}
function satisfiesVersion(questionedVersion, baseVersion) {
    return semver.satisfies(normalizeVersion(questionedVersion), ">= " + baseVersion);
}
exports.satisfiesVersion = satisfiesVersion;
//# sourceMappingURL=satisfiesVersion.js.map