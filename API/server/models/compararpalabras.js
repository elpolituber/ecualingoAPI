'use strict';
module.exports = (sequelize, DataTypes) => {
  const compararPalabras = sequelize.define('compararPalabras', {
    imagen: DataTypes.BLOB,
    idPalabrasOriginales: {
      type: DataTypes.INTEGER,
      references: {
        model: 'palabrasOriginales',
        key: 'id',
        as: 'idPalabrasOriginales',
      }
    },
    idTraductorPalabras: {
      type: DataTypes.INTEGER,
      references: {
        model: 'traductorPalabras',
        key: 'id',
        as: 'idTraductorPalabras',
      }
    },
    idCategorias: {
        type: DataTypes.INTEGER,
        references: {
          model: 'categorias',
          key: 'id',
          as: 'idCategorias',
        }
      }
    }, {});
  compararPalabras.associate = function(models) {
    // associations can be defined here
    compararPalabras.hasMany(models.palabrasOriginales, {
      foreignKey: 'idCompararPalabras',
    });

    compararPalabras.hasMany(models.traductorPalabras, {
      foreignKey: 'idCompararPalabras',
    });

    compararPalabras.belongsTo(models.categorias, {
      foreignKey: 'idCompararPalabras',
    });
  };
  return compararPalabras;
};