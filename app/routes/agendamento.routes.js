module.exports = app => {
    const agendamentos = require ("../controllers/agendamento.controller");

    var router = require ("express").Router();

    // Criar Agendamento
    router.post("/", agendamentos.create);

    // Listar Todos Agendamentos
    router.get("/", agendamentos.findAll);

    app.use('/api/agendamento', router)
}