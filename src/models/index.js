const Categorias = require("./Categorias.js")
const Produtos = require("./Produtos.js")

Produtos.belongsTo(Categorias, {
foreignKey: "category_id",
})


module.exports = {
Categorias, 
Produtos,
}