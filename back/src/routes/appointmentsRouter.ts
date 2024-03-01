import { Router } from "express";
import { cancel, getAllAppointmentById, getAllAppointments, schedule } from "../controllers/appointmentsController";
const appointmentsRouter = Router();

appointmentsRouter.get("/", getAllAppointments);
appointmentsRouter.get("/:appId", getAllAppointmentById);
appointmentsRouter.post("/schedule", schedule);
appointmentsRouter.put("/cancel/:appId", cancel);

export default appointmentsRouter;