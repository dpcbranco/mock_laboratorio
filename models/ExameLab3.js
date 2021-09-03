const Schema = require('mongoose').Schema;
const ObjectId = require('mongoose').ObjectId;

module.exports = new Schema({
    exame: Number,
    paciente: String,
    medicoSolicitante: String,
    medicoLaudador: String,
    laudo: String,
    dataExame: Number,
    arquivos: [ObjectId]
}, {
    versionKey: false
})