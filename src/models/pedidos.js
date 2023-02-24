const db = require('../database/connection.js')
const { DataTypes, BelongsTo } = require('sequelize')
const { Produtos } = require('./')

const pedidos = db.define(
    'ordens',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      users_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Produtos,
          key: 'id'
        }
      },
      amount: {
        type: DataTypes.INTEGER,
        
      },
      products_id: {
        type: DataTypes.INTEGER,
        references: {
          model: Produtos ,
          key: 'id'
        }
      },

     
     
     
    },
    {
        timestamps: false // Desativa os campos "createdAt" e "updatedAt"
    }
  )

  module.exports = pedidos
