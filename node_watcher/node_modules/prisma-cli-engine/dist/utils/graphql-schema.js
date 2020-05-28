"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hasTypeWithField(introspection, type, field) {
    var foundType = introspection.__schema.types.find(function (t) { return t.name === type; });
    if (foundType) {
        if (foundType.kind === 'OBJECT') {
            return foundType.fields.some(function (f) { return f.name === field; });
        }
        if (foundType.kind === 'INPUT_OBJECT') {
            return foundType.inputFields.some(function (f) { return f.name === field; });
        }
    }
    return false;
}
exports.hasTypeWithField = hasTypeWithField;
//# sourceMappingURL=graphql-schema.js.map