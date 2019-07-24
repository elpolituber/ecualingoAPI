import model from '../models';

const { Nivel } = model;

class Niveles {
  static signUp(req, res) {
    const { progreso } = req.body
      return Nivel.create({
        progreso
    })
        .then(nivel => res.status(201).send({
          success: true,
          message: 'Progreso actualizado',
          nivel
        }))
    }
}

export default Niveles;