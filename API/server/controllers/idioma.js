import model from '../models';

const { Idioma } = model;

class Idiomas {
  static signUp(req, res) {
    const { tipoIdioma } = req.body
      return Idioma.create({
        tipoIdioma
    })
        .then(idiomas => res.status(201).send({
          success: true,
          message: 'Idioma ingresado con exito',
          idiomas
        }))
    }
}

export default Idiomas;