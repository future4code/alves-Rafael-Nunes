"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const express_1 = __importDefault(require("express"));
const knex_1 = __importDefault(require("knex"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const getAllUsers_1 = require("./endpoints/getAllUsers");
const usersByName_1 = require("./endpoints/usersByName");
dotenv_1.default.config();
exports.connection = (0, knex_1.default)({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA
    }
});
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(3003, () => {
    console.log('rodando na porta 3003');
});
app.get('/users', getAllUsers_1.getAllUsers);
app.get('/name/filter', usersByName_1.filterName);
