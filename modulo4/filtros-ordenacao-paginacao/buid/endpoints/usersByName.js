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
exports.filterName = exports.selecByName = void 0;
const __1 = require("..");
function selecByName(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield __1.connection.raw(`
  select id, name, email, type
  from aula49_exercicio
  whree name like "%${name}%"
`);
        return result[0];
    });
}
exports.selecByName = selecByName;
const filterName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.query.name;
        const users = yield selecByName;
        if (!name) {
            throw new Error('O nome não consta no banco de dados');
        }
        if (!users.length) {
            res.status(400);
            throw new Error('Usuarios não encontrados');
        }
        res.status(200).send(users);
    }
    catch (error) {
        res.send('Erro');
    }
});
exports.filterName = filterName;
