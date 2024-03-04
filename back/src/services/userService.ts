import ICredential from "../interfaces/ICredential";
import IUser from "../interfaces/IUser";
import IUserDto from "../interfaces/IUserDto";
import { createCredential } from "./credentialService";

const users: IUser[] = [
    {
        id: 1,
        name: "Marge",
        email: "marge@gmail.com",
        birthdate: "1/1/1980",
        nDni: "123456789",
        credentialId: 1
    }
];
let userId: number = 2;

export const getAllUsersService = async () => {
    const allUsers: IUser[] = users;
    return allUsers;
};

export const getUserByIdService = async (id: number): Promise<IUser | null> => {
    const foundUser: IUser | undefined = users.find(
        user => user.id === id
    );
    if(!foundUser) throw Error("Usuario no encontrado");
    return foundUser;
}

export const createUserService = async (
    createUserDto: IUserDto
): Promise<IUser> => {
    const newCredential: ICredential = await createCredential({
        username: createUserDto.username,
        password: createUserDto.password
    });
    const newUser: IUser = {
        id: userId++,
        name: createUserDto.name,
        email: createUserDto.email,
        birthdate: createUserDto.birthdate,
        nDni: createUserDto.nDni,
        credentialId: newCredential.id
    };
    users.push(newUser);
    return newUser;
}
 