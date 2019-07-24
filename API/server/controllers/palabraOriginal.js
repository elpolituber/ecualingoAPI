import model from '../models';

const { PalabraOriginal } = model;

class PalabrasOriginales {
  static signUp(req, res) {
    const { palabraE } = req.body
      return PalabraOriginal.create({
        palabraE
    })
        .then(palabrasOriginales => res.status(201).send({
          success: true,
          message: 'Palabra ingresada con exito',
          palabrasOriginales
        }))
    }
}

export default PalabrasOriginales;