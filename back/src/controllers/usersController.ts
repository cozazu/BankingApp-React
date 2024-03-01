import { Request, Response } from "express";

export const getAllUSers = async (req: Request, res: Response) => {
    res.status(200).json({ message: "GET /users"})
};

export const getUserById = async (req: Request, res: Response) => {
    res.status(200).json({ message: "GET /users/:id"});
};

export const register = async (req: Request, res: Response) => {
    res.status(200).json({ message: "POST /users/register"});
};

export const login = async (req: Request, res: Response) => {
    res.status(200).json({ message: "POST /users/login"});
};