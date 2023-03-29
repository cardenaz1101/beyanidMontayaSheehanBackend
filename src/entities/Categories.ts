import { Column, Entity, PrimaryColumn, BaseEntity, ManyToOne, OneToMany } from "typeorm";
import { DocumentType } from "./Document_types";
// import { DocumentType } from "./Document_types";


@Entity('categories')
export class Category extends BaseEntity {
    @PrimaryColumn ()
    id: string;

    @Column ()
    name: string;

    @Column ()
    sort: number;

    @OneToMany(() => DocumentType, (documentType) => documentType.category)
    documentTypes: DocumentType[]
}   
