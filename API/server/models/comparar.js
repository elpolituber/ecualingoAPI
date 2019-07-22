'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comparar = sequelize.define('Comparar', {
    idPalabrasEspanol: DataTypes.INTEGER,
    idTraductor: DataTypes.INTEGER,
    idCategoria: DataTypes.INTEGER,
    imagen: DataTypes.BLOB
  }, {});
  Comparar.associate = function(models) {
    // associations can be defined here
    Comparar.hasMany(models.PalabrasEspanol, {
      foreignKey: 'idComparar',
    });

  };
  return Comparar;
};