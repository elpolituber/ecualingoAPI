'use strict';
module.exports = (sequelize, DataTypes) => {
  const niveles = sequelize.define('niveles', {
    progreso: DataTypes.INTEGER
  }, {});
  niveles.associate = function(models) {
    // associations can be defined here
    niveles.belongsTo(models.usuarios, {
      foreignKey: 'idUsuarios',
      onDelete: 'CASCADE'
    });  
  };
  return niveles;
};