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

module.exports = {
    create,
    findAll,
    findServicoById
}