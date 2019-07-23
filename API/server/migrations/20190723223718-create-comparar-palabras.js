'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('compararPalabras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      imagen: {
        type: Sequelize.BLOB
      },
      idPalabrasOriginales: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'palabrasOriginales',
          key: 'id',
          as: 'idPalabrasOriginales',
        }
      },
      idTraductorPalabras: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'traductorPalabras',
          key: 'id',
          as: 'idTraductorPalabras',
        }
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
    return queryInterface.dropTable('compararPalabras');
  }
};