import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { DocumentType } from "../entities/Document_types";
import { Document } from "../entities/Document";
import { DocumentTypeUser } from "../entities/Documents_types_users";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "beyanidMontayaSheehan",
    entities: [User, DocumentType, Document, DocumentTypeUser],
    logging: true,
    //synchronize: true,
})