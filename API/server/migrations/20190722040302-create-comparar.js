'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Comparar', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      idTraductorPalabras: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'TraductorPalabras',
          key: 'id',
          as: 'idTraductorPalabras',
        }
      },
      idCategoria: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Categorias',
          key: 'id',
          as: 'idCategoria',
        }
      },
      imagen: {
        type: Sequelize.BLOB
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
    return queryInterface.dropTable('Comparar');
  }
};