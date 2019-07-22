'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categorias = sequelize.define('Categorias', {
    nombreCategoria: DataTypes.STRING
  }, {});
  Categorias.associate = function(models) {
    // associations can be defined here
  };
  return Categorias;
};