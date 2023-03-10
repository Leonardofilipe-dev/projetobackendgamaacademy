const { where } = require('sequelize')
const {Produtos, Categorias} = require('../models')




class categoriaController {
     static async listarCategoria(req, res){
      const listaDeCategoria = await Categorias.findAll({
       
      }) // find All faz listar todos os produtos

      res.json(listaDeCategoria)
      
    }

    static async listarumaCategoria(req, res){
      const Categoria = await Categorias.findOne({
        where: { id: req.params.id },
        //include: Categorias
      })
    
      if (Categoria) {
        res.json(Categoria)
      } else {
        res.status(404).json({ message: "Produto não encontrado." })
      }
    }
    
    
    
    
    
    

   
    

    static async cadastrarCategoria(req, res){
      
      const {category_name } = req.body

      const categoriaExistente = await Categorias.findOne({ where: { category_name: category_name } })

      if (categoriaExistente) {
        return res.status(400).json({ error: 'Categoria ja cadastrada!' })
      }


      const novacategoria = await Categorias.create({
        category_name

        
      })

      

     

     console.log(req.body)
      res.status(201).json(novacategoria)
       
    }

    static async deletarCategoria(req, res){
      try{
      const {id} = req.params

    
  
      await Categorias.destroy({
        where:{
          id,
        },
      }),

      res.status(204).json("Deletado")
    }catch (error) {
      
      return res.status(500).json("Ocorreu um erro!")
    }

      }

    static async atualizarCategoria(req, res){
      const {id} = req.params
      const {category_name } = req.body

      if(!id) return res.status(400).json("id não enviado")


      const categoriaAtualizada = await Categorias.update(
        
          {
            category_name
           },

           {where:{
            id
          }}
       )

      res.json("Produto atualizado")
      

          
    }
}






module.exports = categoriaController