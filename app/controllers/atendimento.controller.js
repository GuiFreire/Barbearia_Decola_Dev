const atendimentoRepository = require('../repository/atendimento.repository');

const create = async (req, res) => {
    const { nome, email, celular, assunto, mensagem} = req.body;

    if (!nome || !email || !celular || !assunto || !mensagem) {
        res.status(400).send({
            message: "Missing required value"
        })

        return;
    }

    try {
        const atendimentoCriado = await atendimentoRepository.create({
            nome,
            email,
            celular,
            assunto,
            mensagem
        });
        
        res.status(201).send(atendimentoCriado);
    } catch(error) {
        res.status(500).send(error);
    }
};

const findAll = async (req, res) => {
    const atendimentos = await atendimentoRepository.findAll();

    res.send(atendimentos)
};


module.exports = {
    create,
    findAll
}