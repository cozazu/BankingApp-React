"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const envs_1 = require("./envs");
const User_1 = __importDefault(require("../entities/User"));
const Credential_1 = __importDefault(require("../entities/Credential"));
const Appointments_1 = __importDefault(require("../entities/Appointments"));
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: envs_1.DB_HOST || "localhost",
    port: 5432,
    username: "aranzazu",
    password: "Postjulian",
    database: "appointments",
    synchronize: true,
    logging: ["error"],
    entities: [User_1.default, Credential_1.default, Appointments_1.default],
    subscribers: [],
    migrations: [],
});
