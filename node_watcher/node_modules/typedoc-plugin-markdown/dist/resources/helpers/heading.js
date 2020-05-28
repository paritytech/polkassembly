"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function heading(level) {
    return [...Array(level)].map(() => '#').join('');
}
exports.heading = heading;
