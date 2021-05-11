const agendamentos = require ("../controllers/agendamento.controller");

const { Router } = require('express');

const agendamentoRouter = Router();

// Criar Agendamento
agendamentoRouter.post("/", agendamentos.create);

// Listar Todos Agendamentos
agendamentoRouter.get("/", agendamentos.findAll);

//Atualizar agendamento por id
agendamentoRouter.put("/:id", agendamentos.updateById);

// Listar Agendamentos por nome
agendamentoRouter.get("/clientes/:nome", agendamentos.findByName);

//Deletar agendamento
agendamentoRouter.delete("/:id", agendamentos.deleteAgendamento);

// Listar Agendamento por data
agendamentoRouter.get("/data/:data", agendamentos.findAgendamentoByData);

// Listar Agendamento por nome de funcionario
agendamentoRouter.get("/nomefuncionario/:nome", agendamentos.findByFuncionarioName);

// Listar Agendamento por servico
agendamentoRouter.get("/servico/:nome", agendamentos.findByServico);

module.exports = {
    agendamentoRouter,
}

