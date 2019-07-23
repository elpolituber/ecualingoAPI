'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      nombreUsuario: {
        type: Sequelize.STRING
      },
      correo: {
        type: Sequelize.STRING
      },
      contrasena: {
        type: Sequelize.STRING
      },
      idCategorias: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'categorias',
          key: 'id',
          as: 'idCategorias',
        }
      },
      idNiveles: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'niveles',
          key: 'id',
          as: 'idNiveles',
        }
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuarios');
  }
};