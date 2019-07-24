import model from '../models';

const { Usuario } = model;

class Usuarios {
  static signUp(req, res) {
    const { nombre, nombreUsuario, correo, contrasena } = req.body
    const { idCategorias, idNiveles } = req.params
      return Usuario.create({
        nombre,
        nombreUsuario,
        correo,
        contrasena,
        idCategorias,
        idNiveles
        })
        .then(usario => res.status(201).send({
          success: true,
          message: 'Usuario ${nombre} a sido creado existosamente',
          usario
        }))
    }
}

export default Usuarios;