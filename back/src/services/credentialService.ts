import ICredential from "../interfaces/ICredential";
import ICredentialDto from "../interfaces/ICredentialDto";

const credentials: ICredential[] = []; /* [ { id: 2, username: "Homero", password: "1234"  } ] */
let credentialId: number = 1;

export const createCredential = async (createCredentialDto: ICredentialDto): Promise<ICredential> => {
    const newCredential: ICredential = {
        id: credentialId++,
        username: createCredentialDto.username,
        password: createCredentialDto.password
    };
    credentials.push(newCredential);
    console.log(credentials)
    return newCredential;
};

export const validateCredential = async (validateCredentialDto: ICredentialDto): Promise<ICredential> => {
    /* { username: "Homero", passsword: "1234" } */
    const { username, password } = validateCredentialDto;
    const foundCredential = credentials.find(
        credential => credential.username === username
    );
    /* { id: 2, username: "Homero", password: "1234" } */
    if(!foundCredential) throw Error("Usuario no encontrado");
    if(password !== foundCredential?.password) throw Error("Contraseña incorrecta");
    return foundCredential;
}