'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tb_produtos.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tb_produtos',
  });
  return tb_produtos;
};