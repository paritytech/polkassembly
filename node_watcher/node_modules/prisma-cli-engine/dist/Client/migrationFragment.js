"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RELATION_MANIFESTATION_FRAGMENT = "\n  type\n  ... on Inline {\n    model\n    column\n  }\n\n  ... on LinkTable {\n    table\n    modelAColumn\n    modelBColumn\n    idColumn\n    type\n  }\n";
/**
 * Generated a graphql fragment for the step type of the management api
 * @param r renderMigrationManifestations
 */
exports.renderStepFragment = function (r) { return "\n  type\n  __typename\n  ... on CreateEnum {\n    name\n    ce_values: values\n  }\n  ... on CreateField {\n    model\n    name\n    cf_typeName: typeName\n    cf_isRequired: isRequired\n    cf_isList: isList\n    cf_isUnique: unique\n    cf_relation: relation\n    cf_defaultValue: default\n    cf_enum: enum\n  }\n  ... on CreateModel {\n    name\n  }\n  ... on CreateRelation {\n    name\n    leftModel\n    rightModel\n    " + (r ? "after { " + RELATION_MANIFESTATION_FRAGMENT + " }" : '') + "\n  }\n  " + (r
    ? "\n    ... on UpdateRelation {\n      ur_name: name\n      ur_newName: newName\n      before { " + RELATION_MANIFESTATION_FRAGMENT + " }\n      ur_after: after { " + RELATION_MANIFESTATION_FRAGMENT + " }\n    }\n  "
    : '') + "\n  ... on DeleteEnum {\n    name\n  }\n  ... on DeleteField {\n    model\n    name\n  }\n  ... on DeleteModel {\n    name\n  }\n  ... on DeleteRelation {\n    name\n  }\n  ... on UpdateEnum {\n    name\n    newName\n    values\n  }\n  ... on UpdateField {\n    model\n    name\n    newName\n    typeName\n    isRequired\n    isList\n    isUnique: unique\n    relation\n    default\n    enum\n  }\n  ... on UpdateModel {\n    name\n    um_newName: newName\n  }\n"; };
exports.renderMigrationFragment = function (renderRelationManifestations) { return "\n  fragment MigrationFragment on Migration {\n    revision\n    steps {\n      " + exports.renderStepFragment(renderRelationManifestations) + "\n    }\n  }\n"; };
//# sourceMappingURL=migrationFragment.js.map