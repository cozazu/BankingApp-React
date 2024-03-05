import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Credential from "./Credential";
import Appointment from "./Appointments";

@Entity({ name: "users" })
class User {
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    birthdate: Date

    @Column()
    nDni: string

    /* User 1:1 Credential */
    @OneToOne(() => Credential)
    @JoinColumn()
    credential: Credential

    /* User 1:N Appointment */
    @OneToMany(() => Appointment, (appointment) => appointment.user)
    appointments: Appointment[]
}

export default User;