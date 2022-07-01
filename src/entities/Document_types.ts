import { Column, Entity, PrimaryColumn, BaseEntity } from "typeorm";


@Entity('document_types')
export class DocumentType extends BaseEntity {
    @PrimaryColumn ()
    id: string;

    @Column ()
    name: string;
    
    @Column ()
    price: number;
}   
