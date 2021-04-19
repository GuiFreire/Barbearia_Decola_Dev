const db = require("../models");

Produto = db.tb_produtos;

const create = async (produto) => {
    const data = await Produto.create(produto);

    return data;
};

const findProdutoByName = async (nome) => {
    const data = await Produto.findOne({
        where: {nome} 
    });

    return data;
};

const findAll = async () => {
    const data = await Produto.findAll();

    return data;
}

module.exports = {
    create,
    findProdutoByName,
    findAll
}