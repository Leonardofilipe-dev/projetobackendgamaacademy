const db = require("../database/connection.js")
const {DataTypes} = require('sequelize')


const Categorias = db.define("categories",{
id:{
    type:DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,

},
category_name:{
    type: DataTypes.STRING,

},

//tableName:"products",

},
{
    timestamps: false // Desativa os campos "createdAt" e "updatedAt"
  }
)

module.exports = Categorias 
