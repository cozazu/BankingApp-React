import { createCredential } from "./credentialService";
import User from "../entities/User";
import userModel from "../repositorys/userModel";
import createUserDto from "../dtos/ICreateUserDto";
import Credential from "../entities/Credential";


export const getAllUsersService = async (): Promise<User[]> => {
    const allUsers: User[] = await userModel.find({
        relations: { appointments: true }
    });
    return allUsers;
};

export const getUserByIdService = async (id: number): Promise<User> => {
    const foundUser: User | null = await userModel.findOne({
        where: { id }, relations: ['appointments']
    });
    if(!foundUser) throw Error("Usuario no encontrado");
    return foundUser;
};

export const createUserService = async (
    createUserDto: createUserDto): Promise<User> => {
    const newCredential: Credential = await createCredential({
        username: createUserDto.username,
        password: createUserDto.password
    });

    const newUser: User = userModel.create(createUserDto);
    await userModel.save(newUser);

    newUser.credential = newCredential;
    await userModel.save(newUser);

    return newUser;
};

export const findUserByCredentialId = async (
    credentialId: number
): Promise<User | null> => {
    const foundUser: User | null = await userModel.findOneBy({
        credential: { id: credentialId }
    });
    return foundUser;
};
 