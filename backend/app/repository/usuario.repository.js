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

const findUserById = async (id) => {
    const data = await Usuario.findOne({
        where: {id}
    });

    return data;
}

const findUserByEmailOrCpfOrPhone = async (email, cpf, telefone) => {
    const data = await Usuario.findOne({
        where:{[Op.or]: [{ email: email }, { cpf: cpf }, {telefone: telefone }]} 
    });

    return data;
};

const findFuncByPhone = async (telefone)  => {
    const data = await Usuario.findOne({
        where: {[Op.and]: [{ tipo: 2 }, { telefone : telefone }]}
    });

    return data;
};

const findUsuarioById = async (id) => {
  const data = await Usuario.findOne({
    where: {id}
  });
  
  return data;
};

const findFuncionarioByEmail = async (email) => {
    const data = await Usuario.findOne({
        where: { email: email, tipo: 2}
        
    });

    return data; 

};

const findFuncionarioByCpf = async (cpf) => {
    const data = await Usuario.findOne({
        where: {cpf: cpf, tipo: 2} 
    });

    return data;
  
};

const findClienteByEmail = async (email) => {
    const data = await Usuario.findOne({
        where:{ email: email, tipo: 1 } 
    
    }); 

    return data;
};

const findClienteByTelefone = async (telefone) => {
    const data = await Usuario.findOne({
        where: {telefone: telefone , tipo: 1} 
    });

    return data;
};

const deleteUsuario = async (id) => {
  const data = await Usuario.destroy({
    where: {id : id}
  });
  
  return data;
};

const findClienteByNomeAndTipo = async(nome) =>{
  const data = await Usuario.findAll({
      where: {
          [Op.and]: [
              { tipo: 1 },
              {
                  nome: {
                      [Op.like]: `${nome}%`
                  }
              }
          ]
      }
  });
      
  return data;
}
                                       
const findClienteByCpf =  async (cpf) => {
    const data = await Usuario.findOne({
        where: {cpf:cpf}
    });
    return data
};

const findFuncionarioByNomeAndTipo = async(nome) =>{
    const data = await Usuario.findAll({
        where: {
            [Op.and]: [
                { tipo: 2 },
                {
                    nome: {
                        [Op.like]: `${nome}%`
                    }
                }
            ]
        }
    });

    return data;
};

const findUsuarioByEmail = async (email) => {
    const data = await Usuario.findOne({
        where: {
            email
        }
    });

    return data;
}

module.exports = {
    create,
    findClientes,
    findFuncionarios,
    findUserByIdAndType,
    findUserByEmailOrCpfOrPhone,
    findFuncByPhone,
    findUsuarioById,
    deleteUsuario,
    findFuncionarioByEmail,
    findFuncionarioByCpf,
    findClienteByEmail,
    findClienteByTelefone,
    findClienteByNomeAndTipo,
    findClienteByCpf,
    findFuncionarioByNomeAndTipo,
    updateUser,
    findUsuarioByEmail,
    findUserById
}