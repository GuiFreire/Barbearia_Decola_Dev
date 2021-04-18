'use strict';
const {
  Model
} = require('sequelize');
const tb_agendamento = require('./tb_agendamento');
module.exports = (sequelize, DataTypes) => {
  class tb_usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tb_usuarios.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING,
    senha: DataTypes.STRING,
    tipo: DataTypes.INTEGER,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tb_usuarios',
  });
  tb_usuarios.associate = function(models) {
    tb_usuarios.hasMany(models.tb_agendamento)
  };
  return tb_usuarios;
};