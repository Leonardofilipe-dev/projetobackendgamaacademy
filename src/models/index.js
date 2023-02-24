const Categorias = require("./Categorias.js")
const Produtos = require("./Produtos.js")
const pedidos = require("../models/pedidos.js")
const Usuario = require("./Usuario")

Produtos.belongsTo(Categorias, {
foreignKey: "category_id",
})

pedidos.belongsTo(Produtos, {
    foreignKey: "products_id",
    })


module.exports = {
Categorias, 
Produtos,
pedidos,
Usuario
}