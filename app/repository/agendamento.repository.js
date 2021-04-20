const db = require('../models');

const Agendamento = db.tb_agendamento;
const Usuario = db.tb_usuarios;

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

module.exports = {
    create,
    findAll,
    findAgendamentoByDataAndFuncionario
}