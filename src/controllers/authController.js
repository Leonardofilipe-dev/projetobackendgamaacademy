const {Usuario} = require("../models")
const jwt = require("jsonwebtoken")
const secret = require("../configs/secret.js")
const bcrypt = require("bcryptjs")


const authController = {
    
async login(req, res){
    console.log(Usuario)
    const {email, senha} = req.body

    const usuario = await Usuario.findOne({
        where:{
            email,
        }
    })

        

        if(!usuario){
            return res.status(400).json("Email não está cadastrado!")
        }
        if(!bcrypt.compareSync(senha, usuario.senha)){
            return res.status(401).json("Senha invalida!")
        }

        const token = jwt.sign({
                id: usuario.id,
                email: usuario.email,
                nome: usuario.nome},
                secret.key
                )

        return res.json(token)

        },

}    




module.exports = authController