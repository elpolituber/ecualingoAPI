import Usuarios from '../controllers/usuario';
import TraductorPalabras from '../controllers/traductorPalabra';
import PalabrasOriginales from '../controllers/palabraOriginal';
import Niveles from '../controllers/nivel';
import Idiomas from '../controllers/idioma';
import CompararPalabras from '../controllers/compararPalabra';
import Categorias from '../controllers/categoria';

        export default (app) => {

          app.get('/api', (req, res) => res.status(200).send({
            message: 'Bienvenido al API de EcuaLingo',
          }));
          app.get('/api/niveles', Niveles.list);

          app.post('/api/usuarios', Usuarios.registrar); 
          app.post('/api/traductorPalabras', TraductorPalabras.signUp); 
          app.post('/api/palabrasOriginales', PalabrasOriginales.signUp); 
          app.post('/api/niveles', Niveles.signUp); 
          app.post('/api/idiomas', Idiomas.signUp); 
          app.post('/api/compararPalabras', CompararPalabras.signUp); 
          app.post('/api/categorias', Categorias.signUp);
        };