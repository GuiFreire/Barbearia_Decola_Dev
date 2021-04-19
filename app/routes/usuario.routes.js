module.exports = app => {
    const usuario = require("../controllers/usuario.controller");

    var router = require ("express").Router();

    //Criar usuário
    router.post("/", usuario.create);

    //Listar Clientes
    router.get("/clientes", usuario.findClientes);

    //Listar Funcionarios
    router.get("/funcionarios", usuario.findFuncionarios);


    app.use('/api/usuario', router)
}