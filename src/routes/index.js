const express = require("express");
const ProdutoController = require("../controllers/produtos.js")
const routes = express.Router();



routes.get("/produto/listar", ProdutoController.listarProduto);
routes.post("/produto/cadastrar", ProdutoController.cadastrarProduto);
routes.delete("/produto/:id/deletar", ProdutoController.deletarProduto);
routes.put("/produto/:id/atualizar", ProdutoController.atualizarProduto);


module.exports = routes;