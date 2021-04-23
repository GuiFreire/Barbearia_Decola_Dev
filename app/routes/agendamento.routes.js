module.exports = app => {
    const agendamentos = require ("../controllers/agendamento.controller");

    var router = require ("express").Router();

    // Criar Agendamento
    router.post("/", agendamentos.create);

    // Listar Todos Agendamentos
    router.get("/", agendamentos.findAll);

    //Deletar agendamento
    router.delete("/:id", agendamentos.deleteAgendamento);

    app.use('/api/agendamento', router)
}