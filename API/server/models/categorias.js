'use strict';
module.exports = (sequelize, DataTypes) => {
  const categorias = sequelize.define('categorias', {
    nombreCategoria: DataTypes.STRING
  }, {});
  categorias.associate = function(models) {
    // associations can be defined here
    categorias.belongsTo(models.compararPalabras, {
      foreignKey: 'idCompararPalabras',
      onDelete: 'CASCADE'
    });

    categorias.belongsTo(models.usuarios, {
      foreignKey: 'idUsuarios',
      onDelete: 'CASCADE'
    });
  };
  return categorias;
};