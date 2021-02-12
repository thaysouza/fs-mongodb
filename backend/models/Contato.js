const { Schema, model } = require('mongoose')

//modelo da tabela 
const ContatoSchema = new Schema({
    nome: {
        type: String
    },
    msg:{
        type: String
    }
})

const modelo = model("contato", ContatoSchema)
module.exports = modelo