"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../config/data-source");
const User_1 = __importDefault(require("../entities/User"));
const userModel = data_source_1.AppDataSource.getRepository(User_1.default);
exports.default = userModel;
