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

const findAgendamentoByData = async ( data ) => {
    const datas = await Agendamento.findOne({
        where: { data }
    });

    return datas;
}

const findByFuncionarioName = async (nome) => {
    const data = await Agendamento.findAll({
        include: [
            {
                model: Usuario,
                as: 'funcionarioAgendamento',
                where: {
                          nome : nome ,
                          tipo :2
                },
                attributes: ['id', 'nome']
            },
            {
                model: Usuario,
                as: 'clienteAgendamento',
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

const findByServico = async (nome) => {
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
                attributes: ['id', 'nome']
            },
            {
                model: Servico,
                as: 'servicoAgendamento',
                where: {
                    nome : nome 
                },
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
    findAgendamentoByData,
    findByFuncionarioName,
    findByServico
}