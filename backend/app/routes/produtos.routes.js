const produto = require("../controllers/produtos.controller");

const { Router } = require("express");

const produtosRouter = Router();

//Criar produtos
produtosRouter.post("/", produto.create);

//Listar todos os produtos
produtosRouter.get("/", produto.findAll);

//Atualizar produto por id
produtosRouter.put("/:id", produto.updateOne);

//Buscar produto por id
produtosRouter.get("/:id", produto.findProdutoById);

//Buscar produto por nome
produtosRouter.get("/nome/:nome", produto.findProdutoByName);

//Deletar produto por id
produtosRouter.delete("/:id", produto.deleteProduto);

module.exports = {
    produtosRouter
}