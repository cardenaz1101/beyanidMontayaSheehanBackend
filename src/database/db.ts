import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { DocumentType } from "../entities/Document_types";
import { Document } from "../entities/Document";
import { DocumentTypeUser } from "../entities/Documents_types_users";
import { Category } from "../entities/Categories";

/**
 * @description LOCAL
 */
// export const AppDataSource = new DataSource({
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "postgres",
//     password: "root",
//     database: "beyanidMontayaSheehan",
//     entities: [User, DocumentType, Document, DocumentTypeUser, Category],
//     logging: true,
//     //synchronize: true,
// })
/**
 * @description PROD
 */
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "leyicrtb_admin",
    password: "46#w4aVqVN@(",
    database: "leyicrtb_beyanidMontoyaSheehan",
    entities: [User, DocumentType, Document, DocumentTypeUser, Category],
    logging: true,
    //synchronize: true,
})
