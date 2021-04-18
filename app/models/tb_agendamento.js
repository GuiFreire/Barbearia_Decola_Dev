'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_agendamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  
  tb_agendamento.init({
    data: DataTypes.DATE,
    id_cliente: DataTypes.INTEGER,
    id_funcionario: DataTypes.INTEGER,
    id_servico: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tb_agendamento',
  });
  
  tb_agendamento.associate = function(models) {
    tb_agendamento.belongsTo(models.tb_usuarios, { foreignKey: 'id_funcionario', as: 'funcionarioAgendamento' });
    
    tb_agendamento.belongsTo(models.tb_usuarios, { foreignKey: 'id_cliente', as: 'clienteAgendamento' });
    
    tb_agendamento.belongsTo(models.tb_servicos, { foreignKey: 'id_servico' });
  };

  return tb_agendamento;
};
