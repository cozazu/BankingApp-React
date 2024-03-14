"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancel = exports.schedule = exports.getAllAppointmentById = exports.getAllAppointments = void 0;
const appointmentServices_1 = require("../services/appointmentServices");
const getAllAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allAppointments = yield (0, appointmentServices_1.getAllAppointmentService)();
        res.status(200).json(allAppointments);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getAllAppointments = getAllAppointments;
const getAllAppointmentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { appId } = req.params;
    try {
        const appointment = yield (0, appointmentServices_1.getAppointmentByIdService)(Number(appId));
        res.status(200).json(appointment);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getAllAppointmentById = getAllAppointmentById;
const schedule = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { date, time, userId, description } = req.body;
    try {
        const newAppointment = yield (0, appointmentServices_1.scheduleAppointmentService)({
            date,
            time,
            userId,
            description,
        });
        res.status(201).json(newAppointment);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.schedule = schedule;
const cancel = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { appId } = req.params;
    try {
        yield (0, appointmentServices_1.cancelAppointmentService)(Number(appId));
        res.status(200).json({ message: "Turno cancelado" });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.cancel = cancel;
