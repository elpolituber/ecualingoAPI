'use strict';
module.exports = (sequelize, DataTypes) => {
  const palabrasOriginales = sequelize.define('palabrasOriginales', {
    palabraE: DataTypes.STRING
  }, {});
  palabrasOriginales.associate = function(models) {
    // associations can be defined here
    palabrasOriginales.belongsTo(models.traductorPalabras, {
      foreignKey: 'idTraductorPalabras',
      onDelete: 'CASCADE'
    });

    palabrasOriginales.belongsTo(models.compararPalabras, {
      foreignKey: 'idCompararPalabras',
      onDelete: 'CASCADE'
    });
  };
  return palabrasOriginales;
};