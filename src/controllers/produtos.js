const produtos = require('../models/Produtos.js')


class CategoriaController{
  static async cadastrarCategoria(req, res){
      
    const { } = req.body
  }
}

class ProdutoController {
     static async listarProduto(req, res){
      const listaDeProdutos = await produtos.findAll() // find All faz listar todos os produtos

      res.json(listaDeProdutos)
      
    }

   
    

    static async cadastrarProduto(req, res){
      
      const {product_name, photo, price, description, category_id } = req.body

      const novoProduto = await produtos.create({
        product_name,
         photo,
          price,
          description,
          category_id

      })

     console.log(req.body)
      res.json(novoProduto)
       
    }
}





module.exports = ProdutoController
