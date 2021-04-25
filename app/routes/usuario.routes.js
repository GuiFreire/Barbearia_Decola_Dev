module.exports = app => {
    const usuario = require("../controllers/usuario.controller");

    var router = require ("express").Router();

    //Criar usuário
    router.post("/", usuario.create);
    // atualizar usuario
    router.put("/:id",usuario.update);

    //Listar Clientes
    router.get("/clientes", usuario.findClientes);

    //buscar cliente por nome
    router.get("/cliente-nome/:nome",usuario.findClienteByNomeAndTipo);

    // buscar cliente por cpf
    router.get("/cliente-cpf/:cpf",usuario.findClienteByCpf);
 
    //Listar Funcionarios
    router.get("/funcionarios", usuario.findFuncionarios);
    
     //buscar funcionario por nome
    router.get("/funcionario-nome/:nome",usuario.findFuncionarioByNomeAndTipo);

    //Buscar Funcionario por Email
    router.get("/funcionario-email/:email", usuario.findFuncionarioByEmail);

    //Buscar Funcionario por CPF
    router.get("/funcionario-cpf/:cpf", usuario.findFuncionarioByCpf);

    //Buscar Cliente por Email
    router.get("/cliente-email/:email", usuario.findClienteByEmail);/// concluido

     //Listar Funcionarios por telefone
    router.get("/funcionariostelefone/:telefone", usuario.findFuncByPhone);

    //Deletar usuario por id
    router.delete("/:id", usuario.deleteUsuario);

    //Buscar Cliente por telefone
    router.get("/cliente-telefone/:telefone", usuario.findClienteByTelefone);
    
    app.use('/api/usuario', router)
}