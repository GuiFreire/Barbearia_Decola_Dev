module.exports = app => {
    const produto = require("../controllers/produtos.controller");

    var router = require("express").Router();

    //Criar produtos
    router.post("/", produto.create);

    //Listar todos os produtos
    router.get("/", produto.findAll);

    //Atualizar produto por id
    router.put("/:id", produto.updateOne);

    //Buscar produto por id
    router.get("/:id", produto.findProdutoById);

    //Buscar produto por nome
    router.get("/nome/:nome", produto.findProdutoByName);

    //Deletar produto por id
    router.delete("/:id", produto.deleteProduto);


    app.use("/api/produto", router);
}