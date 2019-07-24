import model from '../models';

const { CompararPalabra } = model;

class CompararPalabras {
  static signUp(req, res) {
    const { nombreCategoria } = req.body
      return CompararPalabra.create({
        nombreCategoria
        })
        .then(compararPalabra => res.status(201).send({
          success: true,
          message: 'La categoria ${nombreCategoria} a sido creada existosamente',
          compararPalabra
        }))
    }
}

export default CompararPalabras;