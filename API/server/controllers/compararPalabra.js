import model from '../models';

const { CompararPalabra } = model;

class CompararPalabras {
  static signUp(req, res) {
    const { imagen } = req.body
    const { idPalabrasOriginales, idTraductorPalabras, idCategorias } = req.params
      return CompararPalabra.create({
        imagen,
        idPalabrasOriginales,
        idTraductorPalabras,
        idCategorias
        })
        .then(compararPalabra => res.status(201).send({
          var: result = idPalabrasOriginales.localeCompare(idTraductorPalabras),
          success: true,
          message: 'El resultado es: ${result}',
          compararPalabra
        }))
    }
}

export default CompararPalabras;