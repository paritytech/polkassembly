"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var figures = require("figures");
var chalk_1 = require("chalk");
var util_1 = require("./util");
var groupBy = require("lodash.groupby");
var b = function (s) { return "`" + chalk_1.default.bold(s) + "`"; };
var MigrationPrinter = /** @class */ (function () {
    function MigrationPrinter(out) {
        var _this = this;
        this.printStep = function (step) {
            var pad = '  ';
            switch (step.type) {
                case 'CreateModel': {
                    _this.out.log("" + pad + _this.getSymbol('create') + " Created type " + b(step.name));
                    break;
                }
                case 'DeleteModel': {
                    _this.out.log("" + pad + _this.getSymbol('delete') + " Deleted type " + b(step.name));
                    break;
                }
                case 'CreateField': {
                    var typeString = _this.printType(step.cf_typeName, step.cf_isRequired, step.cf_isList);
                    _this.out.log("" + pad + _this.getSymbol('create') + " Created field " + b(step.name) + " of type " + b(typeString));
                    break;
                }
                case 'DeleteField': {
                    _this.out.log("" + pad + _this.getSymbol('delete') + " Deleted field " + b(step.name));
                    break;
                }
                case 'UpdateField': {
                    var typeString = _this.printType(step.cf_typeName, step.cf_isRequired, step.cf_isList);
                    _this.out.log("" + pad + _this.getSymbol('update') + " Updated field " + b(step.name) + _this.getUpdateFieldActions(step));
                    break;
                }
            }
        };
        this.out = out;
    }
    MigrationPrinter.prototype.printMessages = function (steps) {
        this.printTypes(steps);
        this.printEnums(steps);
        this.printRelations(steps);
    };
    MigrationPrinter.prototype.printTypes = function (allSteps) {
        var _this = this;
        var steps = allSteps.filter(function (s) { return s.model || (s.type === 'CreateModel' || s.type === 'DeleteModel'); });
        var groupedByModel = groupBy(steps, function (s) { return s.model || s.name; });
        Object.keys(groupedByModel).forEach(function (model) {
            _this.out.log("\n  " + chalk_1.default.bold(model) + " (Type)");
            var modelSteps = groupedByModel[model];
            modelSteps.forEach(_this.printStep);
        });
    };
    MigrationPrinter.prototype.getUpdateFieldActions = function (step) {
        var messages = [];
        if (step.isRequired) {
            messages.push("became required");
        }
        if (step.isRequired === false) {
            messages.push("is not required anymore");
        }
        if (step.isList) {
            messages.push("became a list");
        }
        if (step.isList === false) {
            messages.push("is not a list anymore");
        }
        if (step.isUnique) {
            messages.push("became unique");
        }
        if (step.enum) {
            messages.push("now uses enum " + step.enum);
        }
        if (step.defaultValue) {
            messages.push("got default value " + step.defaultValue);
        }
        if (messages.length === 0) {
            return '';
        }
        return '. It ' + messages.join(', ') + '.';
    };
    MigrationPrinter.prototype.printType = function (typeName, isRequired, isList) {
        if (isList) {
            return "[" + typeName + "!]!";
        }
        return "" + typeName + (isRequired ? '!' : '');
    };
    MigrationPrinter.prototype.printEnums = function (steps) {
        var _this = this;
        var pad = '  ';
        steps.forEach(function (step) {
            switch (step.type) {
                case 'CreateEnum':
                    _this.printEnumName(step);
                    _this.out.log("" + pad + _this.getSymbol('create') + " Created enum " + step.name + " with values " + (step.ce_values &&
                        step.ce_values.map(b).join(', ')));
                    break;
                case 'UpdateEnum':
                    _this.printEnumName(step);
                    _this.out.log("" + pad + _this.getSymbol('update') + " Updated enum " + step.name);
                    break;
                case 'DeleteEnum':
                    _this.printEnumName(step);
                    _this.out.log("" + pad + _this.getSymbol('delete') + " Deleted enum " + step.name);
                    break;
            }
        });
    };
    MigrationPrinter.prototype.printRelations = function (steps) {
        var _this = this;
        var pad = '  ';
        steps.forEach(function (step) {
            switch (step.type) {
                case 'CreateRelation':
                    _this.printRelationName(step);
                    if (step.after) {
                        var after = step.after;
                        if (after.type === 'LinkTable') {
                            _this.out.log("" + pad + _this.getSymbol('create') + " Link Table " + b(after.table) + " between " + b(step.leftModel) + " and " + b(step.rightModel) + " has been created");
                        }
                        else {
                            _this.out.log("" + pad + _this.getSymbol('create') + " Created an inline relation between " + b(step.leftModel) + " and " + b(step.rightModel) + " in the column " + b(after.column) + " of table " + b(after.model));
                        }
                    }
                    break;
                case 'UpdateRelation':
                    if (step.ur_after && step.before) {
                        _this.printRelationName({ name: step.ur_newName || step.ur_name });
                        var before = step.before;
                        var after = step.ur_after;
                        if (before.type === 'LinkTable' && after.type === 'LinkTable') {
                            if (before.idColumn && !after.idColumn) {
                                _this.out.log("" + pad + _this.getSymbol('delete') + " The id column " + b(before.idColumn) + " in link table " + b(before.table) + " has been removed.\n" + pad + "  It was a Prisma legacy column that is not in use anymore.");
                            }
                        }
                        if (before.type === 'LinkTable' && after.type === 'Inline') {
                            _this.out.log("" + pad + _this.getSymbol('delete') + " Link Table " + b(before.table) + " has been removed");
                            _this.out.log("" + pad + _this.getSymbol('create') + " Created an inline relation in the column " + b(after.column) + " of table " + b(after.model));
                        }
                        if (before.type === 'Inline' && after.type === 'LinkTable') {
                            _this.out.log("" + pad + _this.getSymbol('delete') + " Removed an inline relation in the column " + b(before.column) + " of table " + b(before.model));
                            _this.out.log("" + pad + _this.getSymbol('create') + " Link Table " + b(after.table) + " has been created");
                        }
                    }
                    break;
                case 'DeleteRelation':
                    _this.printRelationName(step);
                    _this.out.log("" + pad + _this.getSymbol('delete') + " Deleted relation between " + step.leftModel + " and " + step.rightModel);
                    break;
            }
        });
    };
    MigrationPrinter.prototype.printRelationName = function (step) {
        this.out.log("\n  " + chalk_1.default.bold(step.name) + " (Relation)");
    };
    MigrationPrinter.prototype.printEnumName = function (step) {
        this.out.log("\n  " + chalk_1.default.bold(step.name) + " (Enum)");
    };
    MigrationPrinter.prototype.printErrors = function (errors) {
        var _this = this;
        var groupedByType = groupBy(errors, function (e) { return e.type; });
        Object.keys(groupedByType).forEach(function (type) {
            var typeErrors = groupedByType[type];
            _this.out.log('\n  ' + chalk_1.default.bold(type));
            typeErrors.forEach(function (error) {
                var outputMessage = util_1.makePartsEnclodesByCharacterBold(error.description, "`");
                _this.out.log("    " + chalk_1.default.red(figures.cross) + " " + outputMessage);
            });
        });
    };
    MigrationPrinter.prototype.printWarnings = function (warnings) {
        var _this = this;
        var groupedByType = groupBy(warnings, function (e) { return e.type; });
        Object.keys(groupedByType).forEach(function (type) {
            var typeErrors = groupedByType[type];
            _this.out.log('\n  ' + chalk_1.default.bold(type));
            typeErrors.forEach(function (error) {
                var outputMessage = util_1.makePartsEnclodesByCharacterBold(error.description, "`");
                _this.out.log("    " + chalk_1.default.yellow.bold('!') + " " + outputMessage);
            });
        });
    };
    MigrationPrinter.prototype.printMigrationMessage = function (migrationMessage, index) {
        var _this = this;
        var actionType = this.getType(migrationMessage.description);
        var symbol = this.getSymbol(actionType);
        var description = util_1.makePartsEnclodesByCharacterBold(migrationMessage.description, '`');
        var outputMessage = "   " + symbol + " " + description;
        this.out.log(outputMessage);
        migrationMessage.subDescriptions.forEach(function (subMessage, index2) {
            var actionType2 = _this.getType(subMessage.description);
            var symbol2 = _this.getSymbol(actionType2);
            var outputMessage2 = util_1.makePartsEnclodesByCharacterBold(subMessage.description, '`');
            var lastLine = index2 === migrationMessage.subDescriptions.length - 1;
            var endSymbol = lastLine ? '└' : '├';
            _this.out.log("   " + endSymbol + "\u2500 " + symbol2 + "  " + outputMessage2);
        });
    };
    MigrationPrinter.prototype.getType = function (message) {
        if (message.indexOf('create') >= 0) {
            return 'create';
        }
        else if (message.indexOf('update') >= 0) {
            return 'update';
        }
        else if (message.indexOf('delete') >= 0 ||
            message.indexOf('remove') >= 0) {
            return 'delete';
        }
        return 'unknown';
    };
    MigrationPrinter.prototype.getSymbol = function (type) {
        switch (type) {
            case 'create':
                return chalk_1.default.green('+');
            case 'delete':
                return chalk_1.default.red('-');
            case 'update':
                return chalk_1.default.yellow('~');
            case 'unknown':
                return chalk_1.default.cyan('?');
        }
    };
    return MigrationPrinter;
}());
exports.MigrationPrinter = MigrationPrinter;
var spaces = function (n) { return Array(n + 1).join(' '); };
var printType = function (type) {
    return chalk_1.default.bold.underline(type.replace(/\b\w/g, function (l) { return l.toUpperCase(); }) + 's');
};
//# sourceMappingURL=migration.js.map