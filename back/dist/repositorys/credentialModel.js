"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../config/data-source");
const Credential_1 = __importDefault(require("../entities/Credential"));
const credentialModel = data_source_1.AppDataSource.getRepository(Credential_1.default);
exports.default = credentialModel;
