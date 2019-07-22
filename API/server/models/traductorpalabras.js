'use strict';
module.exports = (sequelize, DataTypes) => {
  const TraductorPalabras = sequelize.define('TraductorPalabras', {
    palabraT: DataTypes.STRING,
    idPalabrasEspanol: DataTypes.INTEGER,
    idIdiomas: DataTypes.INTEGER
  }, {});
  TraductorPalabras.associate = function(models) {
    // associations can be defined here
    TraductorPalabras.hasMany(models.Idiomas, {
      foreignKey: 'idtraductorPalabras',
    });

    TraductorPalabras.hasMany(models.PalabrasEspanol, {
      foreignKey: 'idtraductorPalabras',
    });
  };
  return TraductorPalabras;
};