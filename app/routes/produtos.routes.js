module.exports = app => {
    const produto = require("../controllers/produtos.controller");

    var router = require("express").Router();

    //Criar produtos
    router.post("/", produto.create);

    //Listar todos os produtos
    router.get("/", produto.findAll);


    app.use("/api/produto", router);
}