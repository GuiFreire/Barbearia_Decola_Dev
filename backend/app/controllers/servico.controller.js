const servicoRepository = require('../repository/servico.repository');

const create = async (req, res) => {
    const {nome , descricao, valor, url} = req.body

    if (!nome || !descricao || !valor) {
        res.status(400).send({
            message: "Missing required value"
        })
        
        return;
    }

    const servicoExistente = await servicoRepository.findServicoByName(nome);

    if (servicoExistente) {
        res.status(400).send({
            message: "Serviço já existe!"
        })
    };

    try {
        const servico = {
            nome,
            descricao,
            valor,
            url: url ? url : "https://i.imgur.com/v5V6pLd.png"
        };
        
        const data = await servicoRepository.create(servico);
        
        res.send(data);
    } catch(error) {
        res.status(500).send(error)
    }
    
}

const findAll = async (req, res) => {
    const data = await servicoRepository.findAll()

    res.send(data);
};

const update = async (req, res) => {
    //Pegando o ID da rota
    const id = req.params.id;

    //Verifica se serciço existe
    const servico = await servicoRepository.findServicoById(id);

    //Se o serviço não existir, não atualiza
    if (!servico) {
        res.status(400).send({
            message: "Serviço não existe"
        })

        return
    };

    try {
        //Atualiza o que vier no corpo no ID que estiver no parametro da rota
        const servicoAtualizado = await servicoRepository.updateById(req.body, id);

        //Verificando se o serviço foi atualizado
        if (servicoAtualizado == 1) {
            res.send({
                message: "Serviço atualizado com sucesso"
            });
        } else {
            res.send({
                message: "Falha ao atualizar serviço"
            })
        };
    } catch(error){
        res.status(500).send(error)
    };
};

const findServicoByName = async (req, res) => {
    const nome = req.params.nome;

    //valida se produto existe
    const servico = await servicoRepository.findServicoByName(nome);

    if (!servico) {
        res.status(400).send({
            message: "O servico em questão não existe"
        });

        return;
    };

    try {
        const servicoRetorno = await servicoRepository.findServicoByName(nome)
        res.send(servicoRetorno)
    } catch(error) {
        res.status(500).send(error)
    };
};

const findServicoById = async (req, res) => {
    const id = req.params.id;

    //valida se produto existe
    const servico = await servicoRepository.findServicoById(id);

    if (!servico) {
        res.status(400).send({
            message: "O servico em questão não existe"
        });

        return;
    };

    try {
        const servicoRetorno = await servicoRepository.findServicoById(id)
        res.send(servicoRetorno)
    } catch(error) {
        res.status(500).send(error)
    };
};

const deleteServico = async (req, res) => {
    const id = req.params.id;

    const servico = await servicoRepository.findServicoById(id)

    if(!servico) {
        res.status(400).send({
            message: 'Serviço não existe'
        })

        return
    }

    try {
        const servicoDeletado = await servicoRepository.deleteServico(id);

        if(servicoDeletado) {
            res.send({
                message: 'Serviço deletado com sucesso'
            });
        } else {
            res.send({
                message: 'Falha ao deletar serviço'
            })
        }
    } catch(error) {
        res.status(500).send(error)
    }
}

module.exports = {
    create,
    findAll,
    update,
    findServicoById,
    deleteServico,
    findServicoByName
}