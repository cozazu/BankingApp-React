import { Request, Response } from "express";
import Appointment from "../entities/Appointments";
import { getAllAppointmentService, scheduleAppointmentService, getAppointmentByIdService, cancelAppointmentService } from "../services/appointmentServices"


export const getAllAppointments = async (req: Request, res: Response) => {
    try {
        const allAppointments: Appointment[] = await getAllAppointmentService();
        res.status(200).json(allAppointments);
    } catch (error: any) {
        res.status(400).json({ error: error.message});
    }     
};

export const getAllAppointmentById = async (req: Request, res: Response) => {
    const { appId } = req.params;
    try {
        const appointment = await getAppointmentByIdService(Number(appId));
        res.status(200).json(appointment);        
    } catch (error: any) {
        res.status(400).json({ error: error.message});
    }    
};

export const schedule = async (req: Request, res: Response) => {
    const { date, time, userId, description } = req.body;
    try {
        const newAppointment: Appointment = await
        scheduleAppointmentService({
            date,
            time,
            userId,
            description,
        });
        res.status(201).json(newAppointment);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const cancel = async (req: Request, res: Response) => {
    const { appId } = req.params;
    try {
        await cancelAppointmentService(Number(appId));
        res.status(200).json({ message: "Turno cancelado"});
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};