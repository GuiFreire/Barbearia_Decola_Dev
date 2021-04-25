'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_atendimento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tb_atendimento.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    celular: DataTypes.STRING,
    assunto: DataTypes.STRING,
    mensagem: DataTypes.STRING,
    status: DataTypes.BOOLEAN
    
  }, {
    sequelize,
    modelName: 'tb_atendimento',
  });
  return tb_atendimento;
};