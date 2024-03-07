import Appointment from "../entities/Appointments";
import { AppDataSource } from "../config/data-source";

const appointmentModel = AppDataSource.getRepository(Appointment);

export default appointmentModel;