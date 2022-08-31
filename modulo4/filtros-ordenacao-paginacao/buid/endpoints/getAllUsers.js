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
exports.getAllUsers = void 0;
const __1 = require("..");
function selectAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield __1.connection.raw(`
     SELECT id, name, email, type
     FROM aula49_exercicio;
  `);
        return result[0];
    });
}
exports.default = selectAllUsers;
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield selectAllUsers();
        if (!users.length) {
            res.statusCode = 404;
            throw new Error("No users found");
        }
        res.status(200).send(users);
    }
    catch (error) {
        console.log(error);
        res.send('Houve um erro');
        //res.send(error.message || error.sqlMessage)
    }
});
exports.getAllUsers = getAllUsers;
