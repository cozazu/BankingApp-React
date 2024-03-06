import { Request, Response } from "express";
import { getAllUsersService, getUserByIdService, createUserService, findUserByCredentialId } from "../services/userService";
import User from "../entities/User";
import { validateCredential } from "../services/credentialService";

export const getAllUSers = async (req: Request, res: Response) => {
    const users: User[] = await getAllUsersService();
    res.status(200).json(users);
};

export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const foundUser: User = await getUserByIdService(Number(id));
        res.status(200).json(foundUser);
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }    
};

export const register = async (req: Request, res: Response) => {
    try {
        const { name, email, birthdate, nDni, username, password } = req.body;
        const newUser: User = await createUserService({
            name, email, birthdate, nDni, username, password 
        })
        res.status(200).json(newUser);        
    } catch (error: any) {
        res.status(400).json({ message: error.message })        
    }    
};

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;    
    try {
        const credential = await validateCredential({
            username, password
        });
        const user = await findUserByCredentialId(credential.id);
        res.status(200).json({ login: true, user });                
    } catch (error: any) {
        res.status(400).json({ message: error.message })  
    }    
};