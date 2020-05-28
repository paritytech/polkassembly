"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spaces_1 = require("./spaces");
function hierachyLevel() {
    const reflection = this.reflection;
    const symbol = reflection && reflection.extendedTypes ? `${spaces_1.spaces(2)}↳` : '*';
    return symbol;
}
exports.hierachyLevel = hierachyLevel;
