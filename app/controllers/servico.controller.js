const servicoRepository = require('../repository/servico.repository');

const create = async (req, res) => {
    if (!req.body.nome) {
        res.status(400).send({
            message: "Nome não pode ser vazio!"
        })
        
        return;
    }

    const servico = {
        nome: req.body.nome,
        descricao: req.body.descricao,
        valor: req.body.valor,
    };
    
    const data = await servicoRepository.create(servico);
    
    res.send(data);
}

const findAll = async (req, res) => {
    const data = await servicoRepository.findAll()

    res.send(data);
};

module.exports = {
    create,
    findAll
}