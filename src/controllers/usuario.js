const {Usuario} = require("../models")
const bcrypt = require("bcryptjs")
const { json } = require("sequelize")
const jwt = require("jsonwebtoken");
const usuarioController = {
    async registro(req, res){
      const {user_name, email, senha} = req.body 

      const usuarioExistente = await Usuario.findOne({ where: { email: email } })

      if (usuarioExistente) {
        return res.status(400).json({ error: 'Este e-mail já está cadastrado.' })
      }

      const novaSenha = bcrypt.hashSync(senha, 10)

      const novoUsuario = await Usuario.create({user_name, email, senha: novaSenha})

      return res.status(201).json(novoUsuario)
    },

    async getUser(req, res){
      const [, token] = ctx.request.headers?.authorization?.split(" ") || []
      const payload = jwt.verify(token, process.env.JWT_SECRET)
      const user = await Usuario.findOne({
        where: { id: payload.id },
      })
    
      if (user) {
        res.json(user)
      } else {
        res.status(404).json({ message: "Produto não encontrado." })
      }
    }
}

const user = {
   
}

module.exports = usuarioController