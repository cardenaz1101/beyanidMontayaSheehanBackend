import { Column, Entity, PrimaryColumn, BaseEntity } from "typeorm";


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

    // @CreateDateColumn ()
    // createdAt: Date;

    // @UpdateDateColumn ()
    // updatedAt: Date;

}   
