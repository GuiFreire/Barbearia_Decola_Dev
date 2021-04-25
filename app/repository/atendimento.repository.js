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

const findAtendimentoById = async (id) => {
    const data = await Atendimento.findOne({ where: { id }});

    return data;
};


const findAtendimentoByEmail = async (email) => {
    const data = await Atendimento.findOne({
        where: { email: email }
    })

    return data;
};

const atualizarStatusDoAtendimento = async (status, id) => {
    const data = await Atendimento.update(status, {
        where: { id : id }
    });

    return data;
}



module.exports = {
    create,
    findAll,
    findAtendimentoByEmail,
    atualizarStatusDoAtendimento,
    findAtendimentoById
}