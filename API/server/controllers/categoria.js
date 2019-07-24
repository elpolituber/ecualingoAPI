import model from '../models';

const { Categoria } = model;

class Categorias {
  static signUp(req, res) {
    const { nombreCategoria } = req.body
      return Categoria.create({
        nombreCategoria
        })
        .then(categoria => res.status(201).send({
          success: true,
          message: 'La categoria ${nombreCategoria} a sido creada existosamente',
          categoria
        }))
    }
}

export default Categorias;