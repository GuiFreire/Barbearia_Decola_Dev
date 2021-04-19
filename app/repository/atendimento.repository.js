const db = require("../models");

Atendimento = db.tb_atendimento;

const create = async (atendimento) => {
    const data = await Atendimento.create(atendimento);

    return data;
};

const findAll = async () => {
    const data = await Atendimento.findAll();

    return data;
};


module.exports = {
    create,
    findAll
}