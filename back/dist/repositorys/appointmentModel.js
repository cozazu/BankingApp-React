"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Appointments_1 = __importDefault(require("../entities/Appointments"));
const data_source_1 = require("../config/data-source");
const appointmentModel = data_source_1.AppDataSource.getRepository(Appointments_1.default);
exports.default = appointmentModel;
