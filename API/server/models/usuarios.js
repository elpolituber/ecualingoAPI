'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuarios = sequelize.define('Usuarios', {
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
        msg: 'Ingresa tu correo electronico'
      },
      unique: {
        args: true,
        msg: 'Correo ya existe'
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
        msg: 'Ingresa una contraseña'
      },
      validate: {
        isNotShort: (value) => {
          if (value.length < 8) {
            throw new Error('Lacontraseña debe tener almenos 8 caracteres');
          }
        },
      },
    }
  }, {});
  Usuarios.associate = function(models) {
    // associations can be defined here
  };
  return Usuarios;
};