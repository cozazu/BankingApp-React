import { Request, Response } from "express";
import IUser from "../interfaces/IUser";
import { getAllUsersService, getUserByIdService, createUserService } from "../services/userService";

export const getAllUSers = async (req: Request, res: Response) => {
    const users: IUser[] = await getAllUsersService();
    res.status(200).json(users);
};

export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const foundUser = await getUserByIdService(Number(id));
        res.status(200).json(foundUser);
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }    
};

export const register = async (req: Request, res: Response) => {
    try {
        const { name, email, birthdate, nDni, username, password } = req.body;
        const newUser: IUser = await createUserService({
            name, email, birthdate, nDni, username, password 
        })
        res.status(200).json(newUser);        
    } catch (error: any) {
        res.status(400).json({ message: error.message })        
    }    
};

export const login = async (req: Request, res: Response) => {
    res.status(200).json({ message: "POST /users/login"});
};