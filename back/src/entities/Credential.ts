import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({ name: "credentials"})
class Credential {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ unique: true })
    username: string

    @Column()
    password: string

    /* User 1:1 User */
    /* Ya establecida en la entidad "User" */
}

export default Credential;