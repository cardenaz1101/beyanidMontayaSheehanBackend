import { Column, Entity, PrimaryColumn, BaseEntity , OneToMany} from "typeorm";
import { Document } from "./Document";

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

}   
