const db = require("../models");

Servico = db.tb_servicos;

const create = async (servico) => {
    const data = await Servico.create(servico);

    return data;
}

const findAll = async () => {
    const data = await Servico.findAll();

    return data;
};

const findServicoById = async (id) => {
    const data = await Servico.findOne({where: { id }});

    return data;
};

const updateById = async (servico, id) => {
    const data = await Servico.update(servico, {
        where: {id : id}
    });

    return data;
}

const deleteServico = async (id) => {
    const data = await Servico.destroy({
        where: { id : id}
    })

    return data;
};

module.exports = {
    create,
    findAll,
    findServicoById,
    updateById,
    deleteServico
}