const express = require("express");
const ProdutoController = require("../controllers/produtos.js")
const routes = express.Router();



routes.get("/Produto/listar", ProdutoController.listarProduto);
routes.post("/Produto/cadastrar", ProdutoController.cadastrarProduto);


module.exports = routes;