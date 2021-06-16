const Schema = require('mongoose').Schema;

module.exports = new Schema(
    {
        _id: Number, 
        nome: String,
        categoria: String,
        preparo: String
    },
    {
        versionKey: false
    }
)