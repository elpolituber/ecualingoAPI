'use strict';
module.exports = (sequelize, DataTypes) => {
  const Idiomas = sequelize.define('Idiomas', {
    tipoIdioma: DataTypes.STRING
  }, {});
  Idiomas.associate = function(models) {
    // associations can be defined here
    Idiomas.blongsTo(models.TraductorPalabras, {
      foreignKey: 'idTraductorPalabras',
      onDelete: 'CASCADE'
    });
  };
  return Idiomas;
};