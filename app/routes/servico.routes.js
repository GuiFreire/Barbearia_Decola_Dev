
const servico = require("../controllers/servico.controller");

const { Router } = require("express");

const servicoRouter = Router();

//Criar serviço
servicoRouter.post("/", servico.create);
//Listar serviços
servicoRouter.get('/', servico.findAll);
//Atualizar serviço por ID
servicoRouter.put('/:id', servico.update);

module.exports = {
    servicoRouter
}