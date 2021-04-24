module.exports = app => {
    const agendamentos = require ("../controllers/agendamento.controller");

    var router = require ("express").Router();

    // Criar Agendamento
    router.post("/", agendamentos.create);

    // Listar Todos Agendamentos
    router.get("/", agendamentos.findAll);

     //Atualizar agendamento por id
    router.put("/:id", agendamentos.updateById);

    // Listar Agendamentos por nome
    router.get("/clientes/:nome", agendamentos.findByName);

    app.use('/api/agendamento', router)
}