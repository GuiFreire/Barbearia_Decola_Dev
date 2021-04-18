module.exports = app => {
    const servico = require("../controllers/servico.controller");

    var router = require("express").Router();

    //Criar serviço
    router.post("/", servico.create);
    //Listar serviços
    router.get('/', servico.findAll)

    app.use('/api/servico', router)
}