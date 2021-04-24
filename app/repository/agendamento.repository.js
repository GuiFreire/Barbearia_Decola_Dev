const db = require('../models');

const Agendamento = db.tb_agendamento;
const Usuario = db.tb_usuarios;
const Servico = db.tb_servicos;

const findAll = async () => {
    const data = await Agendamento.findAll({
        include: [
            {
                model: Usuario,
                as: 'funcionarioAgendamento',
                attributes: ['id', 'nome']
            },
            {
                model: Usuario,
                as: 'clienteAgendamento',
                attributes: ['id', 'nome', 'telefone']
            }
            
        ],
        attributes: ['data']
    });

    return data;
};

const create = async (agendamento) => {
    const data = await Agendamento.create(agendamento);

    return data;
};

const findAgendamentoByDataAndFuncionario = async (data, id_funcionario) => {
    const datas = await Agendamento.findOne({
        where: { data, id_funcionario }
    });

    return datas;
}

const updateById = async (agendamento, id) => {
    const data = await Agendamento.update(agendamento, {
        where: {id : id}
    });

    return data
};

const findByName = async (nome) => {
    const data = await Agendamento.findAll({
        include: [
            {
                model: Usuario,
                as: 'clienteAgendamento',
                where: {
                          nome : nome ,
                          tipo :1
                },
                attributes: ['id', 'nome']
            },
            {
                model: Usuario,
                as: 'funcionarioAgendamento',
                attributes: ['id', 'nome']
            },
            {
                model: Servico,
                as: 'servicoAgendamento',
                attributes: ['id', 'nome']
            }
        ],
            attributes: ['data']
            
    });

    return data;
};


module.exports = {
    create,
    findAll,
    findAgendamentoByDataAndFuncionario,
    updateById,
    findByName
}