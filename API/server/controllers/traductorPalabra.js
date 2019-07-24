import model from '../models';

const { TraductorPalabra } = model;

class TraductorPalabras {
  static signUp(req, res) {
    const { palabraT } = req.body
    const { idIdiomas } = req.params
      return TraductorPalabra.create({
        palabraT,
        idIdiomas
    })
        .then(traductorPalabras => res.status(201).send({
          success: true,
          message: 'Palabra taducida con exito',
          traductorPalabras
        }))
    }
}

export default TraductorPalabras;