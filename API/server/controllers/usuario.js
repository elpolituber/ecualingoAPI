import model from '../models';

const { Usuario } = model;

class Usuarios {
    static registrar(req, res) {
    const { nombre, nombreUsuario, correo, contrasena } = req.body
    const { idCategorias, idNiveles } = req.params
    return Usuario
        .create({
        nombre,
        nombreUsuario,
        correo,
        contrasena,
        idCategorias,
        idNiveles
        })
        .then(usuario => res.status(201).send({
        message: `El usuario ${nombre} a sido creado exitosamente`,
        usuario
        }))
    }
}

export default Usuarios