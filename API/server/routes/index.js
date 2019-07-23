import Usuarios from '../controllers/usuarios';

        export default (app) => {

          app.get('/api', (req, res) => res.status(200).send({
            message: 'Bienvenido al API de EcuaLingo',
          }));

          app.post('/api/usuarios', Usuarios.signUp); // API route for user to signup
        };