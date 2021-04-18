'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tb_agendamentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data: {
        type: Sequelize.DATE
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        references: { model: 'tb_usuario', key: 'id' }
      },
      id_funcionario: {
        type: Sequelize.INTEGER,
        references: { model: 'tb_usuario', key: 'id' }
      },
      id_servico: {
        type: Sequelize.INTEGER,
        references: { model: 'tb_servicos', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tb_agendamentos');
  }
};