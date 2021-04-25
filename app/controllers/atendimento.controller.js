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
            mensagem,
            status: req.body.status ? req.body.status : false
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

const atualizarStatusDoAtendimento = async (req, res) => {
    const id = req.params.id;

    //Verifica se usuario existe
    const atendimentoStatus = await atendimentoRepository.findAtendimentoById(id);

    if (!atendimentoStatus) {
        res.status(400).send({
            message: "Nenhum atendimento encontrado"
        })

        return;
    };

    try {
        
        const statusAtualizado = await atendimentoRepository.atualizarStatusDoAtendimento(req.body, id);

        
        if (statusAtualizado == 1) {
            res.send({
                message: "status atualizado com sucesso"
            });
        } else {
            res.send({
                message: "Falha ao atualizar status"
            })
        };
    } catch(error){
        res.status(500).send(error)
    };
};


module.exports = {
    create,
    findAll,
    findAtendimentoByEmail,
    atualizarStatusDoAtendimento
}