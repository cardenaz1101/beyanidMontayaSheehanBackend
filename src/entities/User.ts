import { Column, Entity, PrimaryColumn, BaseEntity, OneToMany } from "typeorm";
import { DocumentTypeUser } from "./Documents_types_users";

@Entity('users')
export class User extends BaseEntity {
    @PrimaryColumn ()
    id: string;

    @Column ()
    first_name: string;
    
    @Column ()
    last_name: string;

    @Column ()
    email: string;

    @Column ()
    document: string;

    @Column ()
    phone: string;

    @Column ()
    password: string;

    @Column ()
    password_salt: string;

    @OneToMany(() => DocumentTypeUser, (documentsTypesUsers) => documentsTypesUsers.users)
    documentsTypesUsers: DocumentTypeUser[]

    // @CreateDateColumn ()
    // createdAt: Date;

    // @UpdateDateColumn ()
    // updatedAt: Date;

}   
