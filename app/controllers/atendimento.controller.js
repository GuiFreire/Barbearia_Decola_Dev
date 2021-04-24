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

const findAtendimentoByEmail = async (req, res) => {
    const email = req.params.email;

    //valida se produto existe
    const atendimento = await atendimentoRepository.findAtendimentoByEmail(email);

    if (!atendimento) {
        res.status(400).send({
            message: "O atendimento em questão não existe"
        });

        return;
    };

    try {
        const atendimentoRetorno = await atendimentoRepository.findAtendimentoByEmail(email)
        res.send(atendimentoRetorno)
    } catch(error) {
        res.status(500).send(error)
    };
};


module.exports = {
    create,
    findAll,
    findAtendimentoByEmail
}