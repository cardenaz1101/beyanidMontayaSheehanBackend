"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
const Document_types_1 = require("../entities/Document_types");
const Document_1 = require("../entities/Document");
const Documents_types_users_1 = require("../entities/Documents_types_users");
const Categories_1 = require("../entities/Categories");
/**
 * @description LOCAL
 */
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "beyanidMontayaSheehan",
    entities: [User_1.User, Document_types_1.DocumentType, Document_1.Document, Documents_types_users_1.DocumentTypeUser, Categories_1.Category],
    logging: true,
    //synchronize: true,
});
/**
 * @description PROD
 */
// export const AppDataSource = new DataSource({
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "leyicrtb_admin",
//     password: "46#w4aVqVN@(",
//     database: "leyicrtb_beyanidMontoyaSheehan",
//     entities: [User, DocumentType, Document, DocumentTypeUser, Category],
//     logging: true,
//     //synchronize: true,
// })
