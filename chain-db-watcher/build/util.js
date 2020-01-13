"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const types_1 = require("@polkadot/types/types");
const util_1 = require("@polkadot/util");
const node_fetch_1 = __importDefault(require("node-fetch"));
dotenv_1.default.config();
exports.createValue = (param) => {
    const value = exports.getInitValue(param.type);
    return {
        isValid: !util_1.isUndefined(value),
        value
    };
};
exports.getInitValue = (def) => {
    if (def.info === types_1.TypeDefInfo.Vec) {
        return [exports.getInitValue(def.sub)];
    }
    else if (def.info === types_1.TypeDefInfo.Tuple) {
        return Array.isArray(def.sub)
            ? def.sub.map((def) => exports.getInitValue(def))
            : [];
    }
    else if (def.info === types_1.TypeDefInfo.Struct) {
        return Array.isArray(def.sub)
            ? def.sub.reduce((result, def) => {
                result[def.name] = exports.getInitValue(def);
                return result;
            }, {})
            : {};
    }
    else if (def.info === types_1.TypeDefInfo.Enum) {
        return Array.isArray(def.sub)
            ? { [def.sub[0].name]: exports.getInitValue(def.sub[0]) }
            : {};
    }
};
exports.getToken = () => __awaiter(void 0, void 0, void 0, function* () {
    const credentials = JSON.stringify({
        "username": process.env.USERNAME,
        "password": process.env.PASSWORD
    });
    const url = process.env.AUTH_SERVER_LOGIN_URL || '';
    if (!url) {
        throw new Error(`Invalid url: ${url}`);
    }
    const token = yield node_fetch_1.default(url, {
        method: 'post',
        body: credentials,
        headers: { 'Content-Type': 'application/json' },
    })
        .then(res => res.json())
        .then(json => json.token)
        .catch(e => { throw new Error('Couldn\'t fetch the token' + e); });
    return token;
});
