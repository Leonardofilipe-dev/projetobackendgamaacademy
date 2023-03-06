const { where } = require('sequelize')
const {Produtos, Categorias} = require('../models')




class ProdutoController {
     static async listarProduto(req, res){
      const listaDeProdutos = await Produtos.findAll({
        include: Categorias
      }) // find All faz listar todos os produtos

      res.json(listaDeProdutos)
      
    }

    static async listarumProduto(req, res){
      const produto = await Produtos.findOne({
        where: { id: req.params.id },
        include: Categorias
      })
    
      if (produto) {
        res.json(produto)
      } else {
        res.status(404).json({ message: "Produto não encontrado." })
      }
    }
    
    
    
    
    
    

   
    

    static async cadastrarProduto(req, res){
      
      const {product_name, photo, price, description, category_id } = req.body




      const novoProduto = await Produtos.create({
        product_name,
         photo: req.file.filename,
          price,
          description,
          category_id

        
      })

      console.log(photo)

     

     console.log(req.body)
      res.status(201).json(novoProduto)
       
    }

    static async deletarProduto(req, res){
      try{
      const {id} = req.params

    
  
      await Produtos.destroy({
        where:{
          id,
        },
      }),

      res.status(204).json("Deletado")
    }catch (error) {
      
      return res.status(500).json("Ocorreu um erro!")
    }

      }

    static async atualizarProduto(req, res){
      const {id} = req.params
      const {product_name, photo, price, description, category_id } = req.body

      if(!id) return res.status(400).json("id não enviado")


      const produtoAtualizado = await Produtos.update(
        
          {product_name,
            photo: req.file.filename,
            price,
            description,
            category_id
           },

           {where:{
            id
          }}
       )

      res.json("Produto atualizado")
      

          
    }
}






module.exports = ProdutoController
