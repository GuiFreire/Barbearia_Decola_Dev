const db = require("../models");
const { Op } = require("sequelize");

Usuario = db.tb_usuarios;

const create = async (usuario) => {
    const data = await Usuario.create(usuario);

    return data;
};
const updateUser = async (usuario, id) => {
    const data = await Usuario.update(usuario, {
        where: {id : id}
    });

    return data
};

const findClientes = async () => {
    const data = await Usuario.findAll({
        where: {tipo: 1}
    });

    return data;
};

const findUsuarioById = async (id) => {
    const data = await Usuario.findOne({
        where: {id} 
    });
    return data;
};

const findFuncionarios = async () => {
    const data = await Usuario.findAll({
        where: {tipo: 2}
    });

    return data;
};

const findUserByIdAndType = async (id, tipo) => {
    const data = await Usuario.findOne({
        where: { id, tipo }
    });

    return data;
};

const findUserByEmailOrCpfOrPhone = async (email, cpf, telefone) => {
    const data = await Usuario.findOne({
        where:{[Op.or]: [{ email: email }, { cpf: cpf }, {telefone: telefone }]} 
    });

    return data;
};

const findClienteByNomeAndTipo = async(nome) =>{
    const data = await Usuario.findOne({
        where:{[Op.and]: [{ tipo: 1 }, { nome : nome }]}
    });
    return data
};

const findClienteByCpf =  async (cpf) => {
    const data = await Usuario.findOne({
        where: {cpf:cpf}
    });
    return data
};

const findFuncionarioByNomeAndTipo = async(nome) =>{
    const data = await Usuario.findOne({
        where: {[Op.and]: [{ tipo: 2 }, { nome : nome }]}
    });
    return data
};
module.exports = {
    create,
    findClientes,
    findFuncionarios,
    findUserByIdAndType,
    findUserByEmailOrCpfOrPhone,
    findClienteByNomeAndTipo,
    findClienteByCpf,
    findFuncionarioByNomeAndTipo,
    updateUser,
    findUsuarioById
}