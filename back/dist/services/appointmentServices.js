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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointmentService = exports.getAppointmentByIdService = exports.getAllAppointmentService = exports.scheduleAppointmentService = void 0;
const appointmentModel_1 = __importDefault(require("../repositorys/appointmentModel"));
const userModel_1 = __importDefault(require("../repositorys/userModel"));
const scheduleAppointmentService = (scheduleTurnDto) => __awaiter(void 0, void 0, void 0, function* () {
    const newAppointment = appointmentModel_1.default.
        create(scheduleTurnDto);
    yield appointmentModel_1.default.save(newAppointment);
    const user = yield userModel_1.default.findOneBy({
        id: scheduleTurnDto.userId,
    });
    if (!user)
        throw Error('Usuario inexistente');
    newAppointment.user = user;
    yield appointmentModel_1.default.save(newAppointment);
    return newAppointment;
});
exports.scheduleAppointmentService = scheduleAppointmentService;
const getAllAppointmentService = () => __awaiter(void 0, void 0, void 0, function* () {
    const allAppointments = yield appointmentModel_1.default.find();
    return allAppointments;
});
exports.getAllAppointmentService = getAllAppointmentService;
const getAppointmentByIdService = (appId) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield appointmentModel_1.default.findOneBy({
        id: appId,
    });
    if (!appointment)
        throw Error('Turno inexistente');
    return appointment;
});
exports.getAppointmentByIdService = getAppointmentByIdService;
const cancelAppointmentService = (appId) => __awaiter(void 0, void 0, void 0, function* () {
    const appointment = yield appointmentModel_1.default.findOneBy({
        id: appId,
    });
    if (!appointment)
        throw Error('Turno inexistente');
    appointment.status = 'cancelled';
    yield appointmentModel_1.default.save(appointment);
});
exports.cancelAppointmentService = cancelAppointmentService;
