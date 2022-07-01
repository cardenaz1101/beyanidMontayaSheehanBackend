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
exports.UsersController = void 0;
const User_1 = require("../../entities/User");
const uuid_1 = require("uuid");
const password_handler_1 = require("../../helpers/password_handler");
const index_1 = __importDefault(require("../../use_cases/users/index"));
class UsersController {
    login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const result = yield index_1.default.login(email, password);
                res.json(result);
            }
            catch (error) {
                next(error);
            }
        });
    }
    signUp(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { firstName, lastName, email, document, phone, password } = req.body;
                const hashes = (0, password_handler_1.hashPwd)(password);
                const newUser = new User_1.User();
                newUser.id = (0, uuid_1.v4)();
                newUser.first_name = firstName;
                newUser.last_name = lastName;
                newUser.email = email;
                newUser.document = document;
                newUser.phone = phone;
                newUser.password = hashes.password;
                newUser.password_salt = hashes.password_salt;
                yield newUser.save();
                res.json(newUser);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.UsersController = UsersController;
