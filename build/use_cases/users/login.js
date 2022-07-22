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
exports.build = void 0;
const User_1 = require("../../entities/User");
const http_errors_1 = require("http-errors");
const crypto_1 = __importDefault(require("crypto"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const ENCODING = "hex";
const ALGORITHM = "sha256";
const build = () => {
    const execute = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield getUserByLogin(email);
            const passwordCorrect = user === null ? false : validatePwd(password, user.password_salt, user.password);
            if (!(user && passwordCorrect)) {
                throw new http_errors_1.InternalServerError("Invalid email or password");
            }
            const userForToken = {
                id: user.id,
                email: user.email,
            };
            const token = jsonwebtoken_1.default.sign(userForToken, process.env.JWT_SECRET, {
                expiresIn: "1d"
            });
            return token;
        }
        catch (error) {
            throw error;
        }
    });
    const getUserByLogin = (email) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield User_1.User.findOneBy({ email });
            return user;
        }
        catch (err) {
            throw err;
        }
    });
    const validatePwd = (password, password_salt, hashed) => {
        const toVerify = crypto_1.default
            .createHmac(ALGORITHM, password_salt)
            .update(password)
            .digest(ENCODING);
        return hashed === toVerify;
    };
    return execute;
};
exports.build = build;
