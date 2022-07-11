"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = exports.login = void 0;
const login_1 = require("./login");
const signUp_1 = require("./signUp");
const login = (0, login_1.build)();
exports.login = login;
const signUp = (0, signUp_1.build)();
exports.signUp = signUp;
const service = {
    login,
    signUp
};
exports.default = service;
