import Credential from "../entities/Credential";
import createCredentialDto from "../dtos/ICredentialDto";
import validateCredentialDto from "../dtos/IValidateCredentialDto"
import credentialModel from "../repositorys/credentialModel";

export const createCredential = async (createCredentialDto: createCredentialDto): Promise<Credential> => {
    const newCredential: Credential = credentialModel.create(createCredentialDto);
    await credentialModel.save(newCredential);
    return newCredential;
};

export const validateCredential = async (validateCredentialDto: validateCredentialDto): Promise<Credential> => {
    /* { username: "Homero", passsword: "1234" } */
    const { username, password } = validateCredentialDto;
    const foundCredential: Credential | null = await credentialModel.findOneBy({ username });
    if(!foundCredential) throw Error('Usuario no encontrado');
    if(password !== foundCredential.password) throw Error('Password incorrecto');
    return foundCredential;
}