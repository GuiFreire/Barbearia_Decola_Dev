const atendimento = require("../controllers/atendimento.controller");

const { Router } = require("express");

const atendimentoRouter = Router();

//Criar atendimento
atendimentoRouter.post("/", atendimento.create);

atendimentoRouter.get('/cliente-email/:email', atendimento.findAtendimentoByEmail);

atendimentoRouter.put('/status-atendimento/:id', atendimento.atualizarStatusDoAtendimento);

//Listar todos os atendimentos
atendimentoRouter.get("/", atendimento.findAll);

module.exports = {
    atendimentoRouter,
}
