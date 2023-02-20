const express = require("express");
const ProdutoController = require("../controllers/produtos.js")
const app = express()
const routes = express.Router();

const upload = require("../middlewares/upload.js")



routes.get("/produto/listar", ProdutoController.listarProduto);
routes.post("/produto/cadastrar", upload.single('photo'), ProdutoController.cadastrarProduto);
routes.delete("/produto/:id/deletar", ProdutoController.deletarProduto);
routes.put("/produto/:id/atualizar", upload.single('photo'), ProdutoController.atualizarProduto);


module.exports = routes;