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
            },
            {
                model: Servico,
                as: 'servicoAgendamento',
                attributes: ['id', 'nome', 'descricao', 'valor']
            }
            
        ],
        attributes: ['id', 'data']
    });

    return data;
};

const create = async (agendamento) => {
    const data = await Agendamento.create(agendamento);

    return data;
};

const findAgendamentoByDataAndFuncionario = async (data, id_funcionario) => {
    const datas = await Agendamento.findOne({
       where: { data, id_funcionario } , 
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
            },
            {
                model: Servico,
                as: 'servicoAgendamento',
                attributes: ['id', 'nome', 'descricao', 'valor']
            }
        ],
        attributes: ['id', 'data']
    });

    return datas;
};

const updateById = async (agendamento, id) => {
    const data = await Agendamento.update(agendamento, {
        where: {id : id}
    });

    return data
};

const findAgendamentoByData = async ( data ) => {
    const datas = await Agendamento.findAll({
        where: { data },
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
            },
            {
                model: Servico,
                as: 'servicoAgendamento',
                attributes: ['id', 'nome', 'descricao', 'valor']
            }
        ],
        attributes: ['id', 'data']
    });

    return datas;
};

const deleteAgendamento = async (id) => {
    const data = await Agendamento.destroy({
        where: {id : id}
    });

    return data;
};

const findById = async (id) => {
    const data = await Agendamento.findOne({
        where: { id: id },
        include: [
            {
                model: Usuario,
                as: 'clienteAgendamento',
                attributes: ['id', 'nome']
            }
        ],
            attributes: ['id', 'data']
    });
    return data;
};


const findByName = async (nome) => {
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
                where: {
                  nome: nome,
                  tipo: 1
                },
                attributes: ['id', 'nome', 'telefone']
            },
            {
                model: Servico,
                as: 'servicoAgendamento',
                attributes: ['id', 'nome', 'valor']
            }
        ],
        attributes: ['id', 'data']
    });

    return data;
};


const findByFuncionarioName = async (nome) => {
    const data = await Agendamento.findAll({
        include: [
            {
                model: Usuario,
                as: 'funcionarioAgendamento',
                where: {
                    nome: nome,
                     tipo: 2
                },
                attributes: ['id', 'nome']
            },
            {
                model: Usuario,
                as: 'clienteAgendamento',
                attributes: ['id', 'nome', 'telefone']
            },
            {
                model: Servico,
                as: 'servicoAgendamento',
                attributes: ['id', 'nome', 'valor']
            }
        ],
        attributes: ['id', 'data']
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
                attributes: ['id', 'nome', 'telefone']
            },
            {
                model: Servico,
                as: 'servicoAgendamento',
                where: {
                    nome : nome 
                },
                attributes: ['id', 'nome', 'descricao', 'valor']
            }
        ],
            attributes: ['id', 'data']
    });

    return data;
}

const findByAgendamentoByClienteId = async (id, tipo) => {
    const data = await Agendamento.findAll({
        include: [
            {
                model: Usuario,
                as: 'clienteAgendamento',
                attributes: ['id', 'nome'],
                where: { id, tipo },
            }
        ],
        attributes: ['id', 'data']
    });

    return data;
};

const findByAgendamentoByFuncionarioId = async (id, tipo) => {
    const data = await Agendamento.findAll({
        include: [
            {
                model: Usuario,
                as: 'funcionarioAgendamento',
                attributes: ['id', 'nome'],
                where: { id, tipo },
            }
        ],
        attributes: ['id', 'data']
    });

    return data;
};



module.exports = {
    create,
    findAll,
    findAgendamentoByDataAndFuncionario,
    updateById,
    findByName,
    findById,
    deleteAgendamento,
    findAgendamentoByData,
    findByFuncionarioName,
    findByServico,
    findByAgendamentoByClienteId,
    findByAgendamentoByFuncionarioId
}