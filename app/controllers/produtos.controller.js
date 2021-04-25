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

const findAll = async (req, res) => {
    const produtos = await produtoRepository.findAll();

    res.send(produtos);
};

const updateOne = async (req, res) => {
    const id = req.params.id;

    try {
        const produtoAtualizado = await produtoRepository.updateOne(req.body, id);

        if (produtoAtualizado == 1) {
            res.send({
                message: "Produto atualizado com sucesso"
            })
        } else {
            res.send({
                message: "Não foi possível atualizar o produto"
            });
        };
    } catch(error) {
        res.status(500).send(error)
    } 
};

const findProdutoById = async (req, res) => {
    const id = req.params.id;

    //valida se produto existe
    const produto = await produtoRepository.findProdutoById(id);

    try {
        if (!produto) {
            res.status(400).send({
                message: "O produto em questão não existe"
            });

            return;
        };
  
        const produtoRetorno = await produtoRepository.findProdutoById(id)
        res.send(produtoRetorno)
        
    } catch(error) {
        res.status(500).send(error)
    };
};

const deleteProduto = async (req, res) => {
    const id = req.params.id;

    //valida se produto existe
    const produto = await produtoRepository.findProdutoById(id);

    //Se não existir, não deixa deletar
    if (!produto) {
        res.status(400).send({
            message: "O produto em questão não existe"
        });

        return;
    };

    try {
        const produtoDeletado = await produtoRepository.deleteProduto(id)
        res.send({
            message: "Produto deletado com sucesso"
        })
    } catch(error) {
        res.status(500).send(error)
    };
};

module.exports = {
    create,
    findAll,
    updateOne,
    findProdutoById,
    deleteProduto
}
