'use strict';
module.exports = (sequelize, DataTypes) => {
  const PalabrasEspanol = sequelize.define('PalabrasEspanol', {
    palabraE: DataTypes.STRING
  }, {});
  PalabrasEspanol.associate = function(models) {
    // associations can be defined here
    PalabrasEspanol.blongsTo(models.TraductorPalabras, {
      foreignKey: 'idTraductorPalabras',
      onDelete: 'CASCADE'
    });

    PalabrasEspanol.blongsTo(models.Comparar, {
      foreignKey: 'idComparar',
      onDelete: 'CASCADE'
    });
  };
  return PalabrasEspanol;
};