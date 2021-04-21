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
};

const updateOne = async (produto, id) => {
    const data = await Produto.update(produto, {
        where: {id : id}
    });

    return data
};

const findProdutoById = async (id) => {
    const data = await Produto.findOne({
        where: {id} 
    });

    return data;
};

const deleteProduto = async (id) => {
    const data = await Produto.destroy({
        where: {id : id}
    });

    return data;
};

module.exports = {
    create,
    findProdutoByName,
    findAll,
    updateOne,
    findProdutoById,
    deleteProduto
}