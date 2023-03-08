const express = require("express");
const ProdutoController = require("../controllers/produtos.js") 
const usuarioController = require("../controllers/usuario.js")
const app = express()
const routes = express.Router();
const usuarioCreateValidation = require("../validations/usuarios/create.js")
const authLoginValidation = require("../validations/auth/login.js")
const authController = require("../controllers/authController.js")



const upload = require("../middlewares/upload.js");
const categoriaController = require("../controllers/categoria.js");


routes.get("/produto/", ProdutoController.listarProduto)
routes.get("/produto/:id", ProdutoController.listarumProduto);
routes.post("/produto", upload.single('photo'), ProdutoController.cadastrarProduto);
routes.delete("/produto/:id", ProdutoController.deletarProduto);
routes.patch("/produto/:id", upload.single('photo'), ProdutoController.atualizarProduto);


routes.post("/usuario", usuarioCreateValidation  , usuarioController.registro)
routes.post("/login", authLoginValidation, authController.login)


routes.get("/categoria/", categoriaController.listarCategoria)
routes.get("/categoria/:id", categoriaController.listarumaCategoria)
routes.post("/categoria/", categoriaController.cadastrarCategoria)
routes.delete("/categoria/:id", categoriaController.deletarCategoria)
routes.patch("/categoria/:id", categoriaController.atualizarCategoria)


module.exports = routes;