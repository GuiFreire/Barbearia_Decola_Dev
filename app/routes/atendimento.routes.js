module.exports = app => {
    const atendimento = require("../controllers/atendimento.controller");

    var router = require("express").Router();

    //Criar atendimento
    router.post("/", atendimento.create);

    //Listar todos os atendimentos
    router.get("/", atendimento.findAll);

    router.get('/cliente-email/:email', atendimento.findAtendimentoByEmail);

    router.put('/status-atendimento/:id', atendimento.atualizarStatusDoAtendimento);

    app.use('/api/atendimento', router)
}