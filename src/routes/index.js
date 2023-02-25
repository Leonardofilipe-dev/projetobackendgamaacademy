const express = require("express");
const ProdutoController = require("../controllers/produtos.js") 
const usuarioController = require("../controllers/usuario.js")
const app = express()
const routes = express.Router();
const usuarioCreateValidation = require("../validations/usuarios/create.js")
const authLoginValidation = require("../validations/auth/login.js")
const authController = require("../controllers/authController.js")


const upload = require("../middlewares/upload.js")



routes.get("/produto", ProdutoController.listarProduto);
routes.post("/produto", upload.single('photo'), ProdutoController.cadastrarProduto);
routes.delete("/produto/:id", ProdutoController.deletarProduto);
routes.patch("/produto/:id", upload.single('photo'), ProdutoController.atualizarProduto);

routes.post("/usuario", usuarioCreateValidation  , usuarioController.registro)
routes.post("/login", authLoginValidation, authController.login)


module.exports = routes;