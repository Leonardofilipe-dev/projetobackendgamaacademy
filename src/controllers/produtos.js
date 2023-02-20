const { where } = require('sequelize')
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
         photo: req.file.filename,
          price,
          description,
          category_id

      })

     

     console.log(req.body)
      res.json(novoProduto)
       
    }

    static async deletarProduto(req, res){
      const {id} = req.params

    
  
      await produtos.destroy({
        where:{
          id,
        }
      })

      res.json("Produto deletado com sucesso!")

      }

    static async atualizarProduto(req, res){
      const {id} = req.params
      const {product_name, photo, price, description, category_id } = req.body

      const produtoAtualizado = await produtos.update(
          {product_name,
            photo,
            price,
            description,
            category_id
           },

           {where:{
            id
          }}
       )

       res.json("Atualizado com sucesso!")

          
    }
}






module.exports = ProdutoController
