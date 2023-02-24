const { Pedidos } = require('../models/')





class pedidoController {
    static async cadastrarPedido(req, res){
      const {id} = req.params
      const { users_id, products, amount } =
        await Pedidos.findOne({
          where: {
            id
          }
        });
        const cadastrarPedido = await Pedidos.create({
            users_id,
            products,
            amount
            
          })
    }



  
    static async listarPedido(req, res){
      const listaDePedidos = await Pedidos.findAll();
      res.json(listaDePedidos);
    }
  }


module.exports = pedidoController