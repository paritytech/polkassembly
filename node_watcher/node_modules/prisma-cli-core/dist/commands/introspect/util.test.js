"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("./util");
test('sanitizeMongoUri', function () {
    expect(util_1.sanitizeMongoUri('mongodb://localhost')).toBe('mongodb://localhost/admin');
    expect(util_1.sanitizeMongoUri('mongodb://localhost/')).toBe('mongodb://localhost/admin');
    expect(util_1.sanitizeMongoUri('mongodb://localhost:27017')).toBe('mongodb://localhost:27017/admin');
    expect(util_1.sanitizeMongoUri('mongodb://localhost:27017/')).toBe('mongodb://localhost:27017/admin');
    expect(util_1.sanitizeMongoUri('mongodb://localhost:27017/prisma')).toBe('mongodb://localhost:27017/prisma');
    expect(util_1.sanitizeMongoUri('mongodb+srv://prisma:asdas9djasdpassword@cluster100.mongodb.net/test?retryWrites=true')).toBe('mongodb+srv://prisma:asdas9djasdpassword@cluster100.mongodb.net/test?retryWrites=true');
});
test('populateMongoDatabase', function () {
    expect(util_1.populateMongoDatabase({ uri: 'mongodb://localhost:27017/prisma' }))
        .toMatchInlineSnapshot("\nObject {\n  \"database\": \"prisma\",\n  \"uri\": \"mongodb://localhost:27017/prisma\",\n}\n");
    expect(util_1.populateMongoDatabase({
        uri: 'mongodb://localhost:27017/prisma',
        database: 'another-db',
    })).toMatchInlineSnapshot("\nObject {\n  \"database\": \"another-db\",\n  \"uri\": \"mongodb://localhost:27017/prisma\",\n}\n");
    expect(util_1.populateMongoDatabase({
        uri: 'mongodb://localhost:27017/prisma?authSource=admin',
    })).toMatchInlineSnapshot("\nObject {\n  \"database\": \"prisma\",\n  \"uri\": \"mongodb://localhost:27017/prisma?authSource=admin\",\n}\n");
    expect(util_1.populateMongoDatabase({
        uri: 'mongodb://localhost:27017/',
        database: 'database',
    })).toMatchInlineSnapshot("\nObject {\n  \"database\": \"database\",\n  \"uri\": \"mongodb://localhost:27017/\",\n}\n");
    expect(function () {
        return util_1.populateMongoDatabase({
            uri: 'mongodb://localhost:27017/',
        });
    }).toThrow();
});
//# sourceMappingURL=util.test.js.map