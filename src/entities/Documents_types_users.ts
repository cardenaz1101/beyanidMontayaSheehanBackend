import { Column, Entity, BaseEntity , ManyToOne, PrimaryColumn} from "typeorm";
import { User } from "./User";
import { DocumentType } from "./Document_types";

@Entity('documents_types_users')
export class DocumentTypeUser extends BaseEntity {
    @PrimaryColumn ()
    id: string;
    
    @Column ()
    price: number;
    
    @Column ()
    url: string;

    @ManyToOne(() => User, (user) => user.documentsTypesUsers)
    public users!: User

    @ManyToOne(() => DocumentType, (documentType) => documentType.documentsTypes)
    documentTypes: DocumentType
}   
