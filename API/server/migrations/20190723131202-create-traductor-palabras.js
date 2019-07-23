'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('traductorPalabras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      palabraT: {
        type: Sequelize.STRING
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
      idIdiomas: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'idiomas',
          key: 'id',
          as: 'idIdiomas',
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
    return queryInterface.dropTable('traductorPalabras');
  }
};