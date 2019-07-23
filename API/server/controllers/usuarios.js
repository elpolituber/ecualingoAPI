import model from '../models';

        const { usuarios } = model;

        class usuarios {
          static signUp(req, res) {
            const { nombre, nombreUsuario, correo, contrasena } = req.body
              return usuarios
                .create({
                  nombre,
                  nombreUsuario,
                  correo,
                  contrasena
                })
                .then(userData => res.status(201).send({
                  success: true,
                  message: 'Usuario creado existosamente',
                  userData
                }))
            }
        }

        export default usuarios;