const {Usuario} = require("../models")
const bcrypt = require("bcryptjs")
const { json } = require("sequelize")
const usuarioController = {
    async registro(req, res){
      const {user_name, email, senha} = req.body 

      const novaSenha = bcrypt.hashSync(senha, 10)

      const novoUsuario = await Usuario.create({user_name, email, senha: novaSenha})

      return res.status(201).json(novoUsuario)
    }
}

module.exports = usuarioController