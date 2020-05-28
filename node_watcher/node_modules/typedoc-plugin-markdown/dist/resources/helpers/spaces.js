"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function spaces(length) {
    return `!spaces${[...Array(length)].map(() => ' ').join('')}`;
}
exports.spaces = spaces;
