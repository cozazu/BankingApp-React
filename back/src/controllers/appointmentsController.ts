import { Request, Response } from "express";


export const getAllAppointments = async (req: Request, res: Response) => {
    res.status(200).json({ message: "GET /appointments"});
};

export const getAllAppointmentById = async (req: Request, res: Response) => {
    res.status(200).json({ message: "GET /appointments/:appId"});
};

export const schedule = async (req: Request, res: Response) => {
    res.status(200).json({ message: "POST /appointments/schedule"});
};

export const cancel = async (req: Request, res: Response) => {
    res.status(200).json({ message: "PUT /appointments/cancel/:appId"});
};