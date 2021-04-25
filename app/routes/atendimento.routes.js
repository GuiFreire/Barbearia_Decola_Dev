const atendimento = require("../controllers/atendimento.controller");

const { Router } = require("express");

const atendimentoRouter = Router();

//Criar atendimento
atendimentoRouter.post("/", atendimento.create);

//Listar todos os atendimentos
atendimentoRouter.get("/", atendimento.findAll);

module.exports = {
    atendimentoRouter,
}

