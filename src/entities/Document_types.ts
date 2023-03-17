import { Column, Entity, PrimaryColumn, BaseEntity , OneToMany, ManyToOne} from "typeorm";
import { Document } from "./Document";
import { Category } from "./Categories";
import { DocumentTypeUser } from "./Documents_types_users";

@Entity('document_types')
export class DocumentType extends BaseEntity {
    @PrimaryColumn ()
    id: string;

    @Column ()
    name: string;
    
    @Column ()
    price: number;

    @OneToMany(() => Document, (document) => document.documentTypes)
    documents: Document[]

    @OneToMany(() => DocumentTypeUser, (documentsTypesUsers) => documentsTypesUsers.documentTypes)
    documentsTypes: DocumentTypeUser[]

    @ManyToOne(() => Category, (category) => category.documentTypes)
    category: Category

}   
