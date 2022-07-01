"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPwd = exports.HasherPasswordResult = void 0;
const crypto_1 = __importDefault(require("crypto"));
class HasherPasswordResult {
    constructor(password, password_salt) {
        this.password = password;
        this.password_salt = password_salt;
    }
}
exports.HasherPasswordResult = HasherPasswordResult;
const SIZE = 64;
const ENCODING = "hex";
const ALGORITHM = "sha256";
const hashPwd = (password) => {
    const salt = crypto_1.default.randomBytes(SIZE).toString(ENCODING);
    const hashed = crypto_1.default.createHmac(ALGORITHM, salt).update(password).digest(ENCODING);
    return new HasherPasswordResult(hashed, salt);
};
exports.hashPwd = hashPwd;
const service = {
    hashPwd,
};
exports.default = service;
