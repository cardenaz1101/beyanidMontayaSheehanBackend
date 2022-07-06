import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { DocumentType } from "../entities/Document_types";
import { Document } from "../entities/Document";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "beyanidMontayaSheehan",
    entities: [User, DocumentType, Document],
    logging: true,
    //synchronize: true,
})