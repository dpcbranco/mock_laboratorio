const Schema = require('mongoose').Schema;

module.exports = new Schema({
    crm: String,
    nome: String, 
    especialidade: String,
    laudador: Boolean
},
{ versionKey: false})