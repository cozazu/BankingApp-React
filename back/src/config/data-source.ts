import { DataSource } from "typeorm"
import {DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME} from "./envs"
import User from "../entities/User"
import Credential from "../entities/Credential"
import Appointment from "../entities/Appointments"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST || "localhost",
    port: /* Number(DB_PORT) || */ 5432,
    username: "aranzazu",
    password: "Postjulian",
    database: "appointments",
    synchronize: true,
    logging: ["error"], /* Mostrar errores en consola */
    entities: [User, Credential, Appointment],
    subscribers: [],
    migrations: [],
})