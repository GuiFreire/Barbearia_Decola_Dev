'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_servicos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tb_servicos.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    valor: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'tb_servicos',
  });
  tb_servicos.associate = function(models) {
    tb_servicos.hasMany(models.tb_agendamento)
  };
  return tb_servicos;
};