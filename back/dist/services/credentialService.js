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
exports.validateCredential = exports.createCredential = void 0;
const credentials = [];
let credentialId = 1;
const createCredential = (createCredentialDto) => __awaiter(void 0, void 0, void 0, function* () {
    const newCredential = {
        id: credentialId++,
        username: createCredentialDto.username,
        password: createCredentialDto.password
    };
    credentials.push(newCredential);
    return newCredential;
});
exports.createCredential = createCredential;
const validateCredential = (validateCredentialDto) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = validateCredentialDto;
    const foundCredential = credentials.find(credential => credential.username === username);
    if (!foundCredential)
        throw Error("Usuario no encontrado");
    if (password !== (foundCredential === null || foundCredential === void 0 ? void 0 : foundCredential.password))
        throw Error("Contraseña incorrecta");
    return foundCredential;
});
exports.validateCredential = validateCredential;
