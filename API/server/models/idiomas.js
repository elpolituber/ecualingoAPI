'use strict';
module.exports = (sequelize, DataTypes) => {
  const idiomas = sequelize.define('idiomas', {
    tipoIdioma: DataTypes.STRING
  }, {});
  idiomas.associate = function(models) {
    // associations can be defined here
    idiomas.belongsTo(models.traductorPalabras, {
      foreignKey: 'idTraductorPalabras',
      onDelete: 'CASCADE'
    });
  };
  return idiomas;
};