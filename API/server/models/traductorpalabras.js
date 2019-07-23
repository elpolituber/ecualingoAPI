'use strict';
module.exports = (sequelize, DataTypes) => {
  const traductorPalabras = sequelize.define('traductorPalabras', {
    palabraT: DataTypes.STRING,
    idPalabrasOriginales: {
      type: DataTypes.INTEGER,
      references: {
        model: 'palabrasOriginales',
        key: 'id',
        as: 'idPalabrasOriginales',
      }
    },
    idIdiomas: {
      type: DataTypes.INTEGER,
      references: {
        model: 'idiomas',
        key: 'id',
        as: 'idIdiomas',
      }
    }
  }, {});
  traductorPalabras.associate = function(models) {
    // associations can be defined here
    traductorPalabras.hasMany(models.idiomas, {
      foreignKey: 'idTraductorPalabras',
    });

    traductorPalabras.belongsTo(models.compararPalabras, {
      foreignKey: 'idCompararPalabras',
      onDelete: 'CASCADE'
    });

    traductorPalabras.hasMany(models.palabrasOriginales, {
      foreignKey: 'idTraductorPalabras',
    });
  };
  return traductorPalabras;
};