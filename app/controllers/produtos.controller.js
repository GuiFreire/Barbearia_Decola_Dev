const produtoRepository = require("../repository/produtos.repository");

const create = async (req, res) => {
    const { nome, descricao, url } = req.body;

    if (!nome || !descricao || !url) {
        res.status(400).send({
            message: "Missing required value"
        });
        
        return;
    };

    //Valida se o produto já existe
    const produto = await produtoRepository.findProdutoByName(nome);

    //Se o produto for encontrado, não deixa criar outro
    if (produto) {
        res.status(400).send({
            message: "Produto já cadastrado"
        });

        return;
    };

    try {
        const produtoCriado = await produtoRepository.create({
            nome,
            descricao,
            url
        });

        res.status(201).send(produtoCriado);
    } catch(error) {
        res.status(500).send(error);
    }
};

const findAll = async(req, res) => {
    const produtos = await produtoRepository.findAll();

    res.send(produtos);
};

module.exports = {
    create,
    findAll
}
