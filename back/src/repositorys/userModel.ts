import { AppDataSource } from "../config/data-source";
import User from "../entities/User";

const userModel = AppDataSource.getRepository(User);

export default userModel;