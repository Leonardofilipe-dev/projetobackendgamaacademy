const {Usuario} = require("../models")
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

        return res.json("Logado com sucesso!")

        },

}    




module.exports = authController