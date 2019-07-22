'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TraductorPalabras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      palabraT: {
        type: Sequelize.STRING
      },
      idPalabrasEspanol: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'PalabrasEspanol',
          key: 'id',
          as: 'idPalabrasEspanol',
        }
      },
      idIdiomas: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Idiomas',
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
    return queryInterface.dropTable('TraductorPalabras');
  }
};