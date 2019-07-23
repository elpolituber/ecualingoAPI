'use strict';
module.exports = (sequelize, DataTypes) => {
  const usuarios = sequelize.define('usuarios', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Ingresa tu nombre'
      }
    },
    nombreUsuario: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Ingresa tu nombre de usuario'
      }
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Ingresa tu correo'
      },
      unique: {
        args: true,
        msg: 'El correo ya existe'
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Ingresa un correo electronico valido'
        },
      },
    },
    contrasena: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Ingresa tu contraseña'
      },
      validate: {
        isNotShort: (value) => {
          if (value.length < 8) {
            throw new Error('La contraseña debe tener almenos 8 caracteres');
          }
        },
      },
    },
    idCategorias: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'categorias',
        key: 'id',
        as: 'idCategorias',
      }
    },
    idNiveles: {
      type: DataTypes.INTEGER,
      references: {
        model: 'niveles',
        key: 'id',
        as: 'idNiveles',
      }
    }
  }, {});
  usuarios.associate = function(models) {
    // associations can be defined here
    usuarios.hasMany(models.categorias, {
      foreignKey: 'idUsuarios',
    });

    usuarios.hasMany(models.niveles, {
      foreignKey: 'idUsuarios',
    });
  };
  return usuarios;
};