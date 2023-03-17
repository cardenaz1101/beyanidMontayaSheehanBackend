import { Column, Entity, PrimaryColumn, BaseEntity, ManyToOne } from "typeorm";
import { DocumentType } from "./Document_types";


@Entity('documents')
export class Document extends BaseEntity {
    @PrimaryColumn ()
    id: string;

    @Column ()
    name: string;
    
    @Column ()
    url: string;

    @Column ()
    type: string;

    @ManyToOne(() => DocumentType, (documentType) => documentType.documents)
    documentTypes: DocumentType
}   
