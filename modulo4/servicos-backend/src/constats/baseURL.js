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
exports.getAddress = exports.baseURL = void 0;
exports.baseURL = 'https://viacep.com.br/';
const axios_1 = __importDefault(require("axios"));
const getAddress = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cep = req.params;
        const address = yield axios_1.default.get(`${exports.baseURL}/${cep}/json`);
        console.log(address.data);
        if (!address) {
            res.status(400);
            throw new Error('not found');
        }
        const addressInfos = {
            bairro: address.bairro,
            localidade: address.localidade,
            logradouro: address.logradouro,
            estado: address.uf
        };
        res.status(200).send(addressInfos);
    }
    catch (_a) {
    }
});
exports.getAddress = getAddress;
