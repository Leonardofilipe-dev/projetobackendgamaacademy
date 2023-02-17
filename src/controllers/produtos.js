class ProdutoController {
    static listarProduto(req, res){
      res.json([{nome: "Produto1"}, {nome: "produto2"}])
       
    }

    static cadastrarProduto(req, res){
      
     console.log(req.body)
      res.json("Produto Cadastrado")
       
    }
}

module.exports = ProdutoController
