module.exports = app => {
    const usuario = require("../controllers/usuario.controller");

    var router = require ("express").Router();

    //Criar usuário
    router.post("/", usuario.create);
    // atualizar usuario
    router.put("/:id",usuario.update)

    //Listar Clientes
    router.get("/clientes", usuario.findClientes);
    //buscar cliente por nome
    router.get("/cliente-nome:nome",usuario.findClienteByNomeAndTipo)
    // buscar cliente por cpf
    router.get("/cliente-cpf/:cpf",usuario.findClienteByCpf)
 
    //Listar Funcionarios
    router.get("/funcionarios", usuario.findFuncionarios);
     //buscar funcionario por nome
     router.get("/funcionario-nome:nome",usuario.findFuncionarioByNomeAndTipo)

   
    app.use('/api/usuario', router)
}