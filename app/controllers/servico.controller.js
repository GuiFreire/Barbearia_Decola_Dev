const servicoRepository = require('../repository/servico.repository');

const create = async (req, res) => {
    const {nome , descricao, valor} = req.body

    if (!nome) {
        res.status(400).send({
            message: "Nome não pode ser vazio!"
        })
        
        return;
    }

    const servico = {
        nome,
        descricao,
        valor,
    };
    
    const data = await servicoRepository.create(servico);
    
    res.send(data);
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

module.exports = {
    create,
    findAll,
    update
}