const db = require("../database/connection.js")
const {DataTypes} = require('sequelize')
const Categorias = require("../models/Categorias.js")


const Produtos = db.define("products",{
id:{
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,

},
product_name:{
    type: DataTypes.STRING,

},
photo:{
    type: DataTypes.STRING,
},
price:{
    type:DataTypes.FLOAT,
},
description:{
    type: DataTypes.STRING,
},
category_id:{
type: DataTypes.INTEGER,
references:{
model: Categorias, 
key: 'id',
},
},
//tableName:"products",

},
{
    timestamps: false // Desativa os campos "createdAt" e "updatedAt"
  }
)

module.exports = Produtos