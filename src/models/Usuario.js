const db = require("../database/connection.js")
const {DataTypes} = require('sequelize')

const Usuario = db.define("users",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    
    },
    user_name:{
        type: DataTypes.STRING,
        allowNull:false,
    
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    senha:{
        type:DataTypes.STRING,
        allowNull:false
    },
    type:{
        type: DataTypes.STRING,
    },
    
    //tableName:"users",
    
    },
    {
        timestamps: false // Desativa os campos "createdAt" e "updatedAt"
      }
    )
    
    module.exports = Usuario