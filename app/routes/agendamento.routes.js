module.exports = app => {
    const agendamentos = require ("../controllers/agendamento.controller");

    var router = require ("express").Router();

    // Criar Agendamento
    router.post("/", agendamentos.create);

    // Listar Todos Agendamentos
    router.get("/", agendamentos.findAll);

    // Listar Agendamento por data
    router.get("/data/:data", agendamentos.findAgendamentoByData);

    // Listar Agendamento por nome de funcionario
    router.get("/nomefuncionario/:nome", agendamentos.findByFuncionarioName);

    // Listar Agendamento por servico
    router.get("/servico/:nome", agendamentos.findByServico);

    app.use('/api/agendamento', router)
}