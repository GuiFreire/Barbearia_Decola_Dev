module.exports = app => {
    const servico = require("../controllers/servico.controller");

    var router = require("express").Router();

    //Criar serviço
    router.post("/", servico.create);
    //Listar serviços
    router.get('/', servico.findAll)

    router.get('/:nome', servico.findServicoByName)
    //Atualizar serviço por ID
    router.put('/:id', servico.update)

    router.delete('/:id', servico.deleteServico)

    app.use('/api/servico', router)
}