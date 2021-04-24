module.exports = app => {
    const usuario = require("../controllers/usuario.controller");

    var router = require ("express").Router();

    //Criar usuário
    router.post("/", usuario.create);

    //Listar Clientes
    router.get("/clientes", usuario.findClientes);

    //Listar Funcionarios
    router.get("/funcionarios", usuario.findFuncionarios);



    //Buscar Funcionario por Email
    router.get("/funcionario-email/:email", usuario.findFuncionarioByEmail);

    //Buscar Funcionario por CPF
    router.get("/funcionario-cpf/:cpf", usuario.findFuncionarioByCpf);

    //Buscar Cliente por Email
    router.get("/cliente-email/:email", usuario.findClienteByEmail);/// concluido

    //Buscar Cliente por telefone
    router.get("/cliente-telefone/:telefone", usuario.findClienteByTelefone);
    

    app.use('/api/usuario', router)
}