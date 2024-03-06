import { AppDataSource } from "../config/data-source";
import Credential from "../entities/Credential";

const credentialModel = AppDataSource.getRepository(Credential);

export default credentialModel;