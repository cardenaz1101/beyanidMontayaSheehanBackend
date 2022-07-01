"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
const Document_types_1 = require("../entities/Document_types");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "beyanidMontayaSheehan",
    entities: [User_1.User, Document_types_1.DocumentType],
    logging: true,
    //synchronize: true,
});
